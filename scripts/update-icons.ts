import { execSync } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const githubUrl = "https://github.com/catppuccin/vscode-icons.git";
const repoDir = path.join(os.tmpdir(), "repo_clone_catppuccin-icons");
const tmpDir = path.join(process.cwd(), ".tmp");

try {
  await fs.mkdir(tmpDir);

  console.log("Cloning catppuccin-icons...");
  execSync(
    `git clone --depth=1 --single-branch --branch=main ${githubUrl} ${repoDir}`,
  );

  console.log("Copying icons...");
  await fs.cp(
    path.join(repoDir, "icons/mocha"),
    path.join(process.cwd(), "assets/catppuccin-icons"),
    { recursive: true, force: true },
  );

  console.log("Copying file icons...");
  await fs.cp(
    path.join(repoDir, "src/defaults/fileIcons.ts"),
    path.join(tmpDir, "file-icons.ts"),
  );

  console.log("Copying folder icons...");
  await fs.cp(
    path.join(repoDir, "src/defaults/folderIcons.ts"),
    path.join(tmpDir, "folder-icons.ts"),
  );

  console.log("Importing file icons...");
  const fileIconsFile = await import(path.join(tmpDir, "file-icons.ts"));
  console.log("Importing folder icons...");
  const folderIconsFile = await import(path.join(tmpDir, "folder-icons.ts"));

  const fileNames = fileIconsFile.fileNames;
  const fileExtensions = fileIconsFile.fileExtensions;
  const folderNames = folderIconsFile.folderNames;

  console.log("Generating file icons...");
  execSync(
    "bun x @svgr/cli -d src/components/catppuccin-icons --filename-case kebab --no-prettier --typescript assets/catppuccin-icons",
  );

  console.log("Writing file icons...");
  await fs.writeFile(
    path.join(process.cwd(), "src/lib/catppuccin-icons/file-icons.ts"),
    `export const fileNames: Record<string, string> = ${JSON.stringify(fileNames)};

export const fileExtensions: Record<string, string> = ${JSON.stringify(fileExtensions)};`,
  );

  console.log("Writing folder icons...");
  await fs.writeFile(
    path.join(process.cwd(), "src/lib/catppuccin-icons/folder-icons.ts"),
    `export const folderNames: Record<string, string> = ${JSON.stringify(folderNames)};`,
  );

  console.log("Reading icon names...");
  const files = await fs.readdir(
    path.join(process.cwd(), "assets/catppuccin-icons"),
  );

  const iconNames = files.map((file) => file.split(".")[0]);

  const iconNameType = iconNames.map((file) => `"${file}"`).join("|");

  console.log("Writing icon names...");
  await fs.writeFile(
    path.join(process.cwd(), "src/lib/catppuccin-icons/icons.ts"),
    `export type IconName = ${iconNameType};`,
  );

  console.log("Writing icon map...");
  await fs.writeFile(
    path.join(process.cwd(), "src/lib/catppuccin-icons/index.ts"),
    `import * as C from "@/components/catppuccin-icons";
import { fileExtensions, fileNames } from "./file-icons";
import { folderNames } from "./folder-icons";
import type { IconName } from "./icons";

const catppuccinIconMap: Record<
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
};

export const getFileIcon = (name: string) =>
  catppuccinIconMap[
    (fileNames[name] ??
      fileExtensions[name.split(".").pop() ?? ""] ??
      "_file") as IconName
  ];

export const getFolderIcon = (name: string) =>
  catppuccinIconMap[(folderNames[name] ?? "_folder") as IconName];
`,
  );

  console.log("Done!");
} finally {
  console.log("Removing repo...");
  await fs.rm(repoDir, { recursive: true, force: true });

  console.log("Removing tmp...");
  await fs.rm(tmpDir, { recursive: true, force: true });
}
