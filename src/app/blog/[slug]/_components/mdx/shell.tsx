import { CopyButton } from "../copy-button";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

export function Shell({ code, meta }: { code: string; meta: Record<string, string | undefined> }) {
  const tabs = meta.tabs?.split(",");
  const separator = meta.separator ?? "---";

  if (tabs) {
    const codes = code.split(separator).map((code) => code.trim());

    return (
      <Tabs defaultValue={tabs[0]} className="relative mt-6 gap-0">
        <TabsList className="justify-start rounded-none border border-b-0 bg-transparent p-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        {codes.map((code, index) => (
          <TabsContent key={index} value={tabs[index] ?? ""} className="relative">
            <pre className="mb-4 max-h-[650px] overflow-x-auto rounded-b-lg py-3 px-2 relative default-callout">
              <CopyButton code={code} className="top-1.5 right-1" />
              <code className="text-white">
                <span className="text-green-400">$&gt;</span> {code}
              </code>
            </pre>
          </TabsContent>
        ))}
      </Tabs>
    );
  }

  return (
    <pre className="my-4 max-h-[650px] overflow-x-auto rounded-lg py-3 px-2 relative default-callout">
      <CopyButton code={code} className="top-1.5 right-1" />
      <code className="text-white">
        <span className="text-green-400">$&gt;</span> {code}
      </code>
    </pre>
  );
}
