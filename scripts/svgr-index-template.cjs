const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

module.exports = (files) => {
  const componentByFile = new Map();
  const componentByIcon = {};

  for (const { path: filePath, originalPath } of files) {
    const file = path.basename(filePath, path.extname(filePath));

    if (!componentByFile.has(file)) {
      const source = ts.createSourceFile(
        filePath,
        fs.readFileSync(filePath, "utf8"),
        ts.ScriptTarget.Latest,
      );
      const defaultExport = source.statements.find(ts.isExportAssignment);
      if (!defaultExport || !ts.isIdentifier(defaultExport.expression)) {
        throw new Error(`No default export identifier in ${filePath}`);
      }
      componentByFile.set(file, defaultExport.expression.text);
    }

    componentByIcon[path.basename(originalPath, path.extname(originalPath))] =
      componentByFile.get(file);
  }

  fs.writeFileSync(
    process.env.SVGR_ICON_COMPONENTS,
    JSON.stringify(componentByIcon),
  );

  return [...componentByFile]
    .map(
      ([file, component]) =>
        `export { default as ${component} } from "./${file}";`,
    )
    .join("\n");
};
