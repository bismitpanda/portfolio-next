import path from "node:path";

const a = await import(
  path.join(process.cwd(), "src/lib/catppuccin-icons/file-icons.ts")
);

console.log(JSON.stringify(a.fileNames));
