import { execSync } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { consola } from "consola";

const githubUrl = "https://github.com/catppuccin/vscode-icons.git";
const repoDir = path.join(
  os.tmpdir(),
  `repo_clone_catppuccin-icons_${Date.now()}`,
);
const tmpDir = path.join(process.cwd(), ".tmp");
const componentsDir = "src/components/catppuccin-icons";
const libDir = path.join(process.cwd(), "src/lib/catppuccin-icons");

try {
  await fs.mkdir(tmpDir);

  consola.info("Cloning catppuccin-icons...");
  execSync(
    `git clone --depth=1 --single-branch --branch=main ${githubUrl} ${repoDir}`,
  );

  consola.info("Copying icons...");
  await fs.cp(
    path.join(repoDir, "icons/mocha"),
    path.join(process.cwd(), "assets/catppuccin-icons"),
    { recursive: true, force: true },
  );

  consola.info("Copying file icons...");
  await fs.cp(
    path.join(repoDir, "src/defaults/fileIcons.ts"),
    path.join(tmpDir, "file-icons.ts"),
  );

  consola.info("Copying folder icons...");
  await fs.cp(
    path.join(repoDir, "src/defaults/folderIcons.ts"),
    path.join(tmpDir, "folder-icons.ts"),
  );

  consola.info("Importing file icons...");
  const fileIconsFile = await import(path.join(tmpDir, "file-icons.ts"));
  consola.info("Importing folder icons...");
  const folderIconsFile = await import(path.join(tmpDir, "folder-icons.ts"));

  const fileNames = fileIconsFile.fileNames;
  const fileExtensions = fileIconsFile.fileExtensions;
  const folderNames = folderIconsFile.folderNames;

  consola.info("Generating file icons...");
  const iconComponentsPath = path.join(tmpDir, "icon-components.json");
  execSync(
    `bun x @svgr/cli -d ${componentsDir} --filename-case kebab --no-prettier --typescript --index-template scripts/svgr-index-template.cjs assets/catppuccin-icons`,
    { env: { ...process.env, SVGR_ICON_COMPONENTS: iconComponentsPath } },
  );
  const componentByIcon: Record<string, string> = JSON.parse(
    await fs.readFile(iconComponentsPath, "utf8"),
  );

  consola.info("Writing file icons...");
  await fs.writeFile(
    path.join(libDir, "file-icons.ts"),
    `export const fileNames: Record<string, string> = ${JSON.stringify(fileNames)};

export const fileExtensions: Record<string, string> = ${JSON.stringify(fileExtensions)};`,
  );

  consola.info("Writing folder icons...");
  await fs.writeFile(
    path.join(libDir, "folder-icons.ts"),
    `export const folderNames: Record<string, string> = ${JSON.stringify(folderNames)};`,
  );

  consola.info("Reading icon names...");
  const files = await fs.readdir(
    path.join(process.cwd(), "assets/catppuccin-icons"),
  );

  const iconNames = files
    // biome-ignore lint/style/noNonNullAssertion: It is guaranteed that the file will have a dot
    .map((file) => file.split(".")[0]!)
    .sort();

  const iconNameType = iconNames.map((file) => `"${file}"`).join("|");

  consola.info("Writing icon names...");
  await fs.writeFile(
    path.join(libDir, "icons.ts"),
    `export type IconName = ${iconNameType};`,
  );

  consola.info("Writing icon map...");
  const iconMapEntries = iconNames.map((icon) => {
    const component = componentByIcon[icon];
    if (!component) {
      throw new Error(`No generated component for icon "${icon}"`);
    }
    return `"${icon}": C.${component},`;
  });
  await fs.writeFile(
    path.join(libDir, "icon-map.ts"),
    `import * as C from "@/components/catppuccin-icons";
import type { IconName } from "./icons";

export const iconMap: Record<
  IconName,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  ${iconMapEntries.join("\n")}
};`,
  );
  consola.success("Done!");
} catch (error) {
  consola.error(`Could not update icons: ${error}`);
  process.exitCode = 1;
} finally {
  consola.info("Removing repo...");
  await fs.rm(repoDir, { recursive: true, force: true });

  consola.info("Removing tmp...");
  await fs.rm(tmpDir, { recursive: true, force: true });
}
