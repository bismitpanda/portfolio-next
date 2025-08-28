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
  execSync(
    "bun x @svgr/cli -d src/components/catppuccin-icons --filename-case kebab --no-prettier --typescript assets/catppuccin-icons",
  );

  consola.info("Writing file icons...");
  await fs.writeFile(
    path.join(process.cwd(), "src/lib/catppuccin-icons/file-icons.ts"),
    `export const fileNames: Record<string, string> = ${JSON.stringify(fileNames)};

export const fileExtensions: Record<string, string> = ${JSON.stringify(fileExtensions)};`,
  );

  consola.info("Writing folder icons...");
  await fs.writeFile(
    path.join(process.cwd(), "src/lib/catppuccin-icons/folder-icons.ts"),
    `export const folderNames: Record<string, string> = ${JSON.stringify(folderNames)};`,
  );

  consola.info("Reading icon names...");
  const files = await fs.readdir(
    path.join(process.cwd(), "assets/catppuccin-icons"),
  );

  // biome-ignore lint/style/noNonNullAssertion: It is guaranteed that the file will have a dot
  const iconNames = files.map((file) => file.split(".")[0]!);

  const iconNameType = iconNames.map((file) => `"${file}"`).join("|");

  consola.info("Writing icon names...");
  await fs.writeFile(
    path.join(process.cwd(), "src/lib/catppuccin-icons/icons.ts"),
    `export type IconName = ${iconNameType};`,
  );

  consola.info("Writing icon map...");
  await fs.writeFile(
    path.join(process.cwd(), "src/lib/catppuccin-icons/icon-map.ts"),
    `import * as C from "@/components/catppuccin-icons";
import type { IconName } from "./icons";

export const iconMap: Record<
  IconName,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  ${iconNames
    .map(
      (icon) =>
        `"${icon}": C.${icon
          .split(/_|-/g)
          .map(
            (word) =>
              word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
          )
          .join("")},`,
    )
    .join("\n")}
};`,
  );

  consola.success("Done!");
} catch (error) {
  consola.error(`Could not update icons: ${error}`);
} finally {
  consola.info("Removing repo...");
  await fs.rm(repoDir, { recursive: true, force: true });

  consola.info("Removing tmp...");
  await fs.rm(tmpDir, { recursive: true, force: true });
}
