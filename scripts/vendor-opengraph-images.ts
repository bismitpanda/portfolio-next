import fs from "node:fs/promises";
import path from "node:path";
import { consola } from "consola";
import ogs from "open-graph-scraper";
import { parse } from "yaml";

const projectsDir = path.join(process.cwd(), "content/projects");
const publicDir = path.join(process.cwd(), "public");

type ProjectYaml = {
  slug?: string;
  liveUrl?: string;
  featuredImage?: string;
};

function extensionFromContentType(contentType: string | null, url: string) {
  const type = contentType?.split(";")[0]?.trim().toLowerCase();

  if (type === "image/jpeg") return "jpg";
  if (type === "image/webp") return "webp";
  if (type === "image/avif") return "avif";
  if (type === "image/gif") return "gif";
  if (type === "image/png") return "png";

  const fromUrl = path.extname(new URL(url).pathname).slice(1).toLowerCase();
  if (["jpg", "jpeg", "png", "webp", "avif", "gif"].includes(fromUrl)) {
    return fromUrl === "jpeg" ? "jpg" : fromUrl;
  }

  return "png";
}

function updateYamlField(content: string, field: string, value: string) {
  const pattern = new RegExp(`^(${field}:\\s*).*$`, "m");
  if (!pattern.test(content)) {
    throw new Error(`Field "${field}" not found in YAML`);
  }

  return content.replace(pattern, `$1${value}`);
}

const files = (await fs.readdir(projectsDir)).filter((file) =>
  file.endsWith(".yml"),
);

for (const file of files) {
  const filePath = path.join(projectsDir, file);

  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const project = parse(raw) as ProjectYaml;
    const projectSlug = project.slug ?? file.replace(/\.yml$/, "");

    if (!project.liveUrl) {
      continue;
    }

    if (project.featuredImage?.startsWith("/images/vendored/")) {
      continue;
    }

    consola.info(`Scraping ${projectSlug} (${project.liveUrl})...`);

    const { error, result } = await ogs({ url: project.liveUrl });
    if (error) {
      throw error;
    }

    const imageUrl = result.ogImage?.[0]?.url;
    if (!imageUrl) {
      throw new Error("no og:image found");
    }

    consola.info(`Downloading ${projectSlug} from ${imageUrl}...`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const extension = extensionFromContentType(
      response.headers.get("content-type"),
      imageUrl,
    );
    const outputDir = path.join(publicDir, "images/vendored", projectSlug);
    const outputPath = path.join(outputDir, `featured-image.${extension}`);
    const publicPath = `/images/vendored/${projectSlug}/featured-image.${extension}`;

    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(outputPath, Buffer.from(await response.arrayBuffer()));
    await fs.writeFile(
      filePath,
      updateYamlField(raw, "featuredImage", publicPath),
    );

    consola.success(`${projectSlug} -> ${publicPath}`);
  } catch (error) {
    consola.error(`${file}: ${error}`);
  }
}

consola.success("Done!");
