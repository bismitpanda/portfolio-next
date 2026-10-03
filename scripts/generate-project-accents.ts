import fs from "node:fs/promises";
import path from "node:path";
import { consola } from "consola";
import sharp from "sharp";
import { parse } from "yaml";

const projectsDir = path.join(process.cwd(), "content/projects");
const publicDir = path.join(process.cwd(), "public");

type ProjectYaml = {
  slug?: string;
  featuredImage?: string;
};

function toHex(value: number) {
  return Math.round(value).toString(16).padStart(2, "0");
}

function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function resolveImagePath(featuredImage: string) {
  if (featuredImage.startsWith("/")) {
    return path.join(publicDir, featuredImage.slice(1));
  }

  return null;
}

function updateYamlField(content: string, field: string, value: string) {
  const pattern = new RegExp(`^(${field}:\\s*).*$`, "m");
  if (pattern.test(content)) {
    return content.replace(pattern, `$1"${value}"`);
  }

  const featuredImagePattern = /^(featuredImage:\s*.+)$/m;
  if (!featuredImagePattern.test(content)) {
    throw new Error(`Cannot insert "${field}" — featuredImage not found`);
  }

  return content.replace(featuredImagePattern, `$1\naccent: "${value}"`);
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

    if (!project.featuredImage) {
      continue;
    }

    const imagePath = resolveImagePath(project.featuredImage);
    if (!imagePath) {
      consola.warn(`${projectSlug}: remote image, run vendor-opengraph-images first`);
      continue;
    }

    consola.info(`Generating accent for ${projectSlug}...`);

    const { dominant } = await sharp(imagePath)
      .resize(200, 200, { fit: "inside" })
      .stats();
    const accent = rgbToHex(dominant);

    await fs.writeFile(filePath, updateYamlField(raw, "accent", accent));
    consola.success(`${projectSlug}: ${accent}`);
  } catch (error) {
    consola.error(`${file}: ${error}`);
  }
}

consola.success("Done!");
