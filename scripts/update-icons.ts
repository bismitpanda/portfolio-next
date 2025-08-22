import { execSync } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const githubUrl = "https://github.com/catppuccin/vscode-icons.git";
const repoDir = path.join(os.tmpdir(), "repo_clone_catppuccin-cons");
await fs.mkdir(repoDir);

execSync(`git clone ${githubUrl} ${repoDir}`);

await fs.cp(
  path.join(repoDir, "icons/mocha"),
  path.join(process.cwd(), "assets/catppuccin-icons"),
  { recursive: true, force: true },
);

const fileIconsFile = await import(
  path.join(repoDir, "src/default/fileIcons.ts")
);
const folderIconsFile = await import(
  path.join(repoDir, "src/default/folderIcons.ts")
);

const fileNames = fileIconsFile.fileNames;
const fileExtensions = fileIconsFile.fileExtensions;
const folderNames = folderIconsFile.folderNames;

await fs.rm(repoDir, { recursive: true, force: true });

execSync(
  "bun x @svgr/cli -d src/components/catppuccin-icons --filename-case kebab --no-prettier --typescript assets/catppuccin-icons",
);

await fs.writeFile(
  path.join(process.cwd(), "src/lib/catppuccin-icons/file-icons.ts"),
  `export const fileNames = ${JSON.stringify(fileNames)};

export const fileExtensions = ${JSON.stringify(fileExtensions)};`,
);

await fs.writeFile(
  path.join(process.cwd(), "src/lib/catppuccin-icons/folder-icons.ts"),
  `export const folderNames = ${JSON.stringify(folderNames)};`,
);

const files = await fs.readdir(path.join(repoDir, "assets/catppuccin-icons"));

const iconNames = files
  .map((file) => file.split(".")[0])
  .map((file) => `"${file}"`)
  .join("|");

await fs.writeFile(
  path.join(process.cwd(), "src/lib/catppuccin-icons/icons.ts"),
  `export type IconName = ${iconNames};`,
);
