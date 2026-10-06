import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import { availableParallelism } from "node:os";
import path from "node:path";
import { consola } from "consola";
import { slug as slugify } from "github-slugger";
import ogs from "open-graph-scraper";
import sharp from "sharp";
import { type Font, render } from "takumi-js";
import { parse } from "yaml";

// Bump to force every cover to re-render after changing a template.
const TEMPLATE_VERSION = 5;

const root = process.cwd();
const projectsDir = path.join(root, "content/projects");
const iconsDir = path.join(root, "assets/project-icons");
const fontsDir = path.join(root, "assets/fonts");
const outputDir = path.join(root, "public/images/generated/projects");
const publicPrefix = "/images/generated/projects";
// Downloads and the manifest live under .next/cache so Vercel keeps them
// between builds; only the rendered images go to public/.
const cacheDir = path.join(root, ".next/cache/project-images");
const manifestPath = path.join(cacheDir, "manifest.json");
const cacheIndexPath = path.join(cacheDir, "index.json");

const offline = process.argv.includes("--offline");
const verbose = process.argv.includes("--verbose");
const warnings: string[] = [];

const COVER = { width: 1600, height: 900 };
const OG = { width: 1200, height: 630 };
// Each grid's card aspect in projects-content.tsx, so cards never crop.
const CARDS = {
  product: COVER,
  client: { width: 1600, height: 1200 },
  systems: { width: 1600, height: 1000 },
};
const WEBP = { format: "webp", quality: 85 } as const;
const PNG = { format: "png" } as const;

type Size = { width: number; height: number };
type Encoding = typeof WEBP | typeof PNG;
const FRAME_WIDTH = 1042;
const BACKGROUND = "#F3EFE8";

type ProjectYaml = {
  slug?: string;
  title: string;
  description: string;
  projectType: "product" | "client" | "systems";
  liveUrl?: string;
  cover?: {
    source?: string;
    title?: string;
    tagline?: string;
    icon?: string;
  };
};

export type ProjectImageEntry = {
  featuredImage: string;
  cardImage: string;
  ogImage: string;
  width: number;
  height: number;
  accent: string;
  source: string;
  key: string;
};

type CacheIndex = {
  pages: Record<string, { imageUrl: string }>;
  images: Record<
    string,
    { file: string; etag?: string; lastModified?: string }
  >;
};

async function readJson<T>(filePath: string, fallback: T): Promise<T> {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf-8")) as T;
  } catch {
    return fallback;
  }
}

function sha256(...parts: (string | Uint8Array)[]) {
  const hash = createHash("sha256");
  for (const part of parts) hash.update(part);
  return hash.digest("hex");
}

const cacheIndex = await readJson<CacheIndex>(cacheIndexPath, {
  pages: {},
  images: {},
});

// open-graph-scraper rejects with `{ result: { error } }` instead of an Error.
function describeError(error: unknown) {
  if (error instanceof Error) return error.message;
  const result = (error as { result?: { error?: string } })?.result;
  return result?.error ?? String(error);
}

async function resolveOgImageUrl(pageUrl: string) {
  const cached = cacheIndex.pages[pageUrl]?.imageUrl;
  if (offline) return cached ?? null;

  try {
    const { error, result } = await ogs({
      url: pageUrl,
      timeout: 5,
    });
    if (error) throw new Error("scrape failed");

    const imageUrl = result.ogImage?.[0]?.url;
    if (!imageUrl) {
      warnings.push(`${pageUrl}: no og:image`);
      return null;
    }

    const absolute = new URL(imageUrl, pageUrl).toString();
    cacheIndex.pages[pageUrl] = { imageUrl: absolute };
    return absolute;
  } catch (error) {
    if (cached) {
      warnings.push(
        `${pageUrl}: ${describeError(error)}, using cached og:image`,
      );
      return cached;
    }
    throw error;
  }
}

async function fetchImage(url: string) {
  const cached = cacheIndex.images[url];
  const cachedFile = cached && path.join(cacheDir, cached.file);

  if (offline) {
    if (!cachedFile) throw new Error(`${url} is not cached (--offline)`);
    return fs.readFile(cachedFile);
  }

  try {
    const headers: Record<string, string> = {};
    if (cached?.etag) headers["if-none-match"] = cached.etag;
    if (cached?.lastModified)
      headers["if-modified-since"] = cached.lastModified;

    const response = await fetch(url, {
      headers,
      signal: AbortSignal.timeout(10_000),
    });

    if (response.status === 304 && cachedFile) {
      return fs.readFile(cachedFile);
    }
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const bytes = Buffer.from(await response.arrayBuffer());
    const file = sha256(url).slice(0, 16);
    await fs.writeFile(path.join(cacheDir, file), bytes);
    cacheIndex.images[url] = {
      file,
      etag: response.headers.get("etag") ?? undefined,
      lastModified: response.headers.get("last-modified") ?? undefined,
    };
    return bytes;
  } catch (error) {
    if (cachedFile) {
      warnings.push(`${url}: ${describeError(error)}, using cached copy`);
      return fs.readFile(cachedFile);
    }
    throw error;
  }
}

async function resolveSource(project: ProjectYaml) {
  const source = project.cover?.source;

  if (source) {
    if (/^https?:\/\//.test(source)) {
      return { label: source, bytes: await fetchImage(source) };
    }
    return {
      label: source,
      bytes: await fs.readFile(path.join(root, source)),
    };
  }

  if (project.projectType === "systems" || !project.liveUrl) {
    return null;
  }

  const imageUrl = await resolveOgImageUrl(project.liveUrl);
  if (!imageUrl) return null;

  return { label: imageUrl, bytes: await fetchImage(imageUrl) };
}

// Discord-style accent: drop transparent, near-white and near-black pixels,
// bucket the rest into 5-bit RGB cells, and average the most populated cell
// together with its neighbours. Neutral results fall back to the colourful
// pixels when there are enough of them, otherwise the neutral is kept.
const MIN_CHROMA = 16;
const MIN_SATURATION = 0.25;
const MIN_COLORFUL_SHARE = 0.01;

type Rgb = [number, number, number];
type Bucket = { count: number; r: number; g: number; b: number };

// Saturation alone calls near-black noise colourful, so also require chroma.
function isColorful(rgb: Rgb) {
  const chroma = Math.max(...rgb) - Math.min(...rgb);
  return chroma >= MIN_CHROMA && rgbToHsl(rgb)[1] >= MIN_SATURATION;
}

function dominantAverage(buckets: Map<number, Bucket>): Rgb | null {
  let topKey = -1;
  let topCount = 0;
  for (const [key, bucket] of buckets) {
    if (bucket.count > topCount) {
      topKey = key;
      topCount = bucket.count;
    }
  }
  if (topKey < 0) return null;

  const r0 = topKey >> 10;
  const g0 = (topKey >> 5) & 31;
  const b0 = topKey & 31;
  const sum = { count: 0, r: 0, g: 0, b: 0 };

  for (let dr = -1; dr <= 1; dr++) {
    for (let dg = -1; dg <= 1; dg++) {
      for (let db = -1; db <= 1; db++) {
        const r = r0 + dr;
        const g = g0 + dg;
        const b = b0 + db;
        if (r < 0 || g < 0 || b < 0 || r > 31 || g > 31 || b > 31) continue;

        const bucket = buckets.get((r << 10) | (g << 5) | b);
        if (!bucket) continue;
        sum.count += bucket.count;
        sum.r += bucket.r;
        sum.g += bucket.g;
        sum.b += bucket.b;
      }
    }
  }

  return [sum.r / sum.count, sum.g / sum.count, sum.b / sum.count];
}

function rgbToHsl([r, g, b]: Rgb): Rgb {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return [h / 6, s, l];
}

function hslToRgb([h, s, l]: Rgb): Rgb {
  const hueToRgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [
    hueToRgb(p, q, h + 1 / 3) * 255,
    hueToRgb(p, q, h) * 255,
    hueToRgb(p, q, h - 1 / 3) * 255,
  ];
}

function toHex(rgb: Rgb) {
  return `#${rgb.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")}`;
}

async function extractAccent(image: Buffer) {
  const { data } = await sharp(image)
    .resize(64, 64, { fit: "inside" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const all = new Map<number, Bucket>();
  const colorful = new Map<number, Bucket>();
  const opaque = { count: 0, r: 0, g: 0, b: 0 };
  let total = 0;
  let colorfulTotal = 0;

  const add = (map: Map<number, Bucket>, key: number, rgb: Rgb) => {
    const bucket = map.get(key) ?? { count: 0, r: 0, g: 0, b: 0 };
    bucket.count++;
    bucket.r += rgb[0];
    bucket.g += rgb[1];
    bucket.b += rgb[2];
    map.set(key, bucket);
  };

  for (let i = 0; i < data.length; i += 4) {
    const rgb: Rgb = [
      data.readUInt8(i),
      data.readUInt8(i + 1),
      data.readUInt8(i + 2),
    ];
    if (data.readUInt8(i + 3) < 125) continue;
    opaque.count++;
    opaque.r += rgb[0];
    opaque.g += rgb[1];
    opaque.b += rgb[2];
    if (rgb.every((v) => v > 250) || rgb.every((v) => v < 8)) continue;

    const key = ((rgb[0] >> 3) << 10) | ((rgb[1] >> 3) << 5) | (rgb[2] >> 3);
    add(all, key, rgb);
    total++;
    if (isColorful(rgb)) {
      add(colorful, key, rgb);
      colorfulTotal++;
    }
  }

  let color = dominantAverage(all);
  if (
    (!color || !isColorful(color)) &&
    colorfulTotal / Math.max(total, 1) >= MIN_COLORFUL_SHARE
  ) {
    color = dominantAverage(colorful);
  }
  // Pure black or white art has nothing left after filtering, so fall back to
  // the plain average of its opaque pixels.
  color ??= [
    opaque.r / Math.max(opaque.count, 1),
    opaque.g / Math.max(opaque.count, 1),
    opaque.b / Math.max(opaque.count, 1),
  ];

  // Keep the glow visible on both the light and dark themes.
  const [h, s, l] = rgbToHsl(color);
  return toHex(hslToRgb([h, s, Math.min(Math.max(l, 0.4), 0.72)]));
}

const fonts: Font[] = [
  {
    name: "Playfair Display",
    data: await fs.readFile(path.join(fontsDir, "PlayfairDisplay.ttf")),
  },
  {
    name: "Fustat",
    data: await fs.readFile(path.join(fontsDir, "Fustat.ttf")),
  },
  {
    name: "JetBrains Mono",
    data: await fs.readFile(path.join(fontsDir, "JetBrainsMono.ttf")),
  },
];

function PhotoCover({ fit }: { fit: "cover" | "contain" }) {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {fit === "contain" && (
        // biome-ignore lint/performance/noImgElement: rendered by Takumi
        <img
          src="source"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(48px) brightness(0.8)",
            transform: "scale(1.15)",
          }}
        />
      )}
      {/* biome-ignore lint/performance/noImgElement: rendered by Takumi */}
      <img
        src="source"
        alt=""
        style={{ width: "100%", height: "100%", objectFit: fit }}
      />
    </div>
  );
}

// Inline `code` in taglines renders in the mono font.
function Tagline({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "block",
        marginTop: 4,
        fontFamily: "Fustat",
        fontSize: 32,
        fontWeight: 450,
      }}
    >
      {text.split(/(`[^`]+`)/).map((part, index) =>
        part.startsWith("`") ? (
          // biome-ignore lint/suspicious/noArrayIndexKey: static split
          <span key={index} style={{ fontFamily: "JetBrains Mono" }}>
            {part.slice(1, -1)}
          </span>
        ) : (
          // biome-ignore lint/suspicious/noArrayIndexKey: static split
          <span key={index}>{part}</span>
        ),
      )}
    </div>
  );
}

type CoverProps = { title: string; tagline?: string; hasIcon: boolean };

// The Figma layout (icon, Playfair title, Fustat tagline) centred with padding
// on every side. `bottomInset` keeps it clear of the client cards' caption.
// Some icons are rasters on white, so multiply drops the white onto the
// background.
function GeneratedCover({
  title,
  tagline,
  hasIcon,
  bottomInset,
}: CoverProps & { bottomInset: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 80,
        paddingBottom: Math.max(80, bottomInset),
        backgroundColor: BACKGROUND,
        color: "#000",
      }}
    >
      {hasIcon && (
        // biome-ignore lint/performance/noImgElement: rendered by Takumi
        <img
          src="icon"
          alt=""
          style={{
            width: 240,
            height: 240,
            marginRight: 56,
            flexShrink: 0,
            objectFit: "contain",
            mixBlendMode: "multiply",
          }}
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          maxWidth: 620,
        }}
      >
        <div
          style={{
            fontFamily: "Playfair Display",
            fontSize: 88,
            fontWeight: 400,
            lineHeight: 1.15,
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </div>
        {tagline && <Tagline text={tagline} />}
      </div>
    </div>
  );
}

async function findIcon(name: string) {
  for (const ext of ["svg", "png"]) {
    let bytes: Buffer;
    try {
      bytes = await fs.readFile(path.join(iconsDir, `${name}.${ext}`));
    } catch {
      continue;
    }
    // Trim the source's own padding so every icon fills the same box.
    return sharp(bytes, { density: 300 })
      .trim()
      .resize(800, 800, { fit: "inside" })
      .png()
      .toBuffer();
  }
  return null;
}

async function renderPhoto(source: Buffer, size: Size, encoding: Encoding) {
  const { width = 1, height = 1 } = await sharp(source).metadata();
  const ratio = width / height / (size.width / size.height);
  const fit = Math.abs(ratio - 1) > 0.15 ? "contain" : "cover";

  return render(<PhotoCover fit={fit} />, {
    ...size,
    ...encoding,
    images: [{ src: "source", data: source }],
  });
}

async function renderGenerated(
  props: CoverProps,
  icon: Buffer | null,
  size: Size,
  encoding: Encoding,
  captionSafe = false,
) {
  // width/height are output pixels; the ratio scales the Figma px layout.
  const devicePixelRatio = size.width / FRAME_WIDTH;
  const bottomInset = captionSafe ? (size.height / devicePixelRatio) * 0.4 : 0;

  return render(<GeneratedCover {...props} bottomInset={bottomInset} />, {
    ...size,
    devicePixelRatio,
    ...encoding,
    fonts,
    images: icon ? [{ src: "icon", data: icon }] : [],
  });
}

async function mapConcurrent<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>,
) {
  const results: R[] = [];
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (next < items.length) {
        const index = next++;
        results[index] = await fn(items[index] as T);
      }
    }),
  );
  return results;
}

async function resolveProject(file: string) {
  const project = parse(
    await fs.readFile(path.join(projectsDir, file), "utf-8"),
  ) as ProjectYaml;
  const projectSlug = project.slug ?? slugify(project.title);

  let source: Awaited<ReturnType<typeof resolveSource>> = null;
  let fallback = false;
  try {
    source = await resolveSource(project);
    fallback =
      source === null &&
      project.projectType !== "systems" &&
      Boolean(project.cover?.source ?? project.liveUrl);
  } catch (error) {
    fallback = true;
    warnings.push(
      `${projectSlug}: ${describeError(error)}, generating a cover instead`,
    );
  }

  const icon = source
    ? null
    : await findIcon(project.cover?.icon ?? projectSlug);
  const coverProps = {
    title: project.cover?.title ?? project.title,
    tagline: project.cover?.tagline,
    hasIcon: icon !== null,
  };
  const featuredImage = `${publicPrefix}/${projectSlug}.webp`;
  const cardSize = CARDS[project.projectType];
  const cardImage =
    cardSize === COVER
      ? featuredImage
      : `${publicPrefix}/${projectSlug}-card.webp`;
  const ogImage = `${publicPrefix}/${projectSlug}-og.png`;

  return {
    slug: projectSlug,
    cardSize,
    cardImage,
    source,
    icon,
    coverProps,
    fallback,
    featuredImage,
    ogImage,
    key: sha256(
      String(TEMPLATE_VERSION),
      source?.bytes ?? JSON.stringify(coverProps),
      icon ?? "",
    ),
  };
}

type ResolvedProject = Awaited<ReturnType<typeof resolveProject>>;

async function isUpToDate(
  project: ResolvedProject,
  previous: ProjectImageEntry | undefined,
) {
  if (previous?.key !== project.key) return false;
  const paths = [project.featuredImage, project.cardImage, project.ogImage];
  const outputs = paths.map((p) =>
    fs.stat(path.join(root, "public", p)).catch(() => null),
  );
  return (await Promise.all(outputs)).every(Boolean);
}

async function renderProject(
  project: ResolvedProject,
): Promise<ProjectImageEntry> {
  // Normalise everything (avif, svg, gif, exif rotation) to PNG for Takumi.
  const normalized = project.source
    ? await sharp(project.source.bytes, { animated: false })
        .rotate()
        .png()
        .toBuffer()
    : null;

  const renderAt = (size: Size, encoding: Encoding) =>
    normalized
      ? renderPhoto(normalized, size, encoding)
      : renderGenerated(
          project.coverProps,
          project.icon,
          size,
          encoding,
          size === CARDS.client,
        );
  const write = (publicPath: string, bytes: Uint8Array) =>
    fs.writeFile(path.join(root, "public", publicPath), bytes);

  const [cover, card, og] = await Promise.all([
    renderAt(COVER, WEBP),
    project.cardImage === project.featuredImage
      ? null
      : renderAt(project.cardSize, WEBP),
    renderAt(OG, PNG),
  ]);

  await Promise.all([
    write(project.featuredImage, cover),
    card && write(project.cardImage, card),
    write(project.ogImage, og),
  ]);

  // Generated covers take their colour from the icon, not the flat background.
  const accentSource = normalized ?? project.icon ?? Buffer.from(cover);

  return {
    featuredImage: project.featuredImage,
    cardImage: project.cardImage,
    ogImage: project.ogImage,
    ...COVER,
    accent: await extractAccent(accentSource),
    source: project.source?.label ?? "generated",
    key: project.key,
  };
}

await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(cacheDir, { recursive: true });

const previousManifest = await readJson<Record<string, ProjectImageEntry>>(
  manifestPath,
  {},
);
const files = (await fs.readdir(projectsDir)).filter((file) =>
  file.endsWith(".yml"),
);

const errors: string[] = [];
const resolved = (
  await mapConcurrent(files, 16, (file) =>
    resolveProject(file).catch((error) => {
      errors.push(`${file}: ${describeError(error)}`);
      return null;
    }),
  )
).filter((project) => project !== null);

const manifest: Record<string, ProjectImageEntry> = {};
const stale: ResolvedProject[] = [];
for (const project of resolved) {
  const previous = previousManifest[project.slug];
  if (previous && (await isUpToDate(project, previous))) {
    manifest[project.slug] = previous;
    if (verbose) consola.log(`cached   ${project.slug}`);
  } else {
    stale.push(project);
  }
}

await mapConcurrent(stale, availableParallelism(), async (project) => {
  try {
    const entry = await renderProject(project);
    manifest[project.slug] = entry;
    consola.log(
      `rendered ${project.slug} <- ${entry.source} (${entry.accent})`,
    );
  } catch (error) {
    errors.push(`${project.slug}: ${describeError(error)}`);
  }
});

await fs.writeFile(
  manifestPath,
  `${JSON.stringify(
    Object.fromEntries(
      Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)),
    ),
    null,
    2,
  )}\n`,
);
await fs.writeFile(cacheIndexPath, JSON.stringify(cacheIndex, null, 2));

const fallbacks = resolved.filter((project) => project.fallback).length;
consola.success(
  `${files.length} projects · ${stale.length} rendered · ${resolved.length - stale.length} cached · ${fallbacks} fallbacks`,
);
if (warnings.length > 0) {
  consola.warn(
    `${warnings.length} warnings\n${warnings.map((w) => `  ${w}`).join("\n")}`,
  );
}
if (errors.length > 0) {
  consola.error(
    `${errors.length} errors\n${errors.map((e) => `  ${e}`).join("\n")}`,
  );
  process.exit(1);
}
