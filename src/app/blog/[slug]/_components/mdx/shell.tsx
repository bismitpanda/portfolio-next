import { CopyButton } from "../copy-button";

export function Shell({ code }: { code: string }) {
  return (
    <pre className="my-4 max-h-[650px] overflow-x-auto rounded-lg py-3 px-2 relative default-callout">
      <CopyButton code={code} className="top-1.5 right-1" />
      <code className="text-white">
        <span className="text-green-400">$&gt;</span> {code}
      </code>
    </pre>
  );
}
