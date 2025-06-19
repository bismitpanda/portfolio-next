import { configureLogging } from "@content-collections/integrations";

async function main() {
  const { createBuilder } = await import("@content-collections/core");
  const builder = await createBuilder("content-collections.ts");
  configureLogging(builder);
  await builder.build();
}

void main();
