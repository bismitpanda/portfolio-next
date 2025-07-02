import { CopyButton } from "../copy-button";
import { Mermaid } from "./mermaid";
import { Shell } from "./shell";
import { cn } from "@/lib/utils";

type CodeblockFn = (code: string, meta: Record<string, string | undefined>) => React.ReactNode;

export const customCodeblockHandlers: Record<string, CodeblockFn> = {
  mermaid: (code: string) => {
    return <Mermaid chart={code} />;
  },

  shell: (code: string, meta: Record<string, string | undefined>) => {
    return <Shell code={code} meta={meta} />;
  },
};

const parseMeta = (dataMeta: string) => {
  return Object.fromEntries(
    dataMeta
      ?.split(" ")
      .map((item) =>
        item.includes("=") ? (item.split("=") as [string, string]) : [item, undefined],
      ) ?? [],
  );
};

export function Codeblock({
  className,
  "data-code": code,
  "data-meta": dataMeta,
  "data-language": lang,
  ...props
}: React.HTMLAttributes<HTMLPreElement> & {
  "data-code": string;
  "data-meta"?: string;
  "data-language": string;
}) {
  const meta = parseMeta(dataMeta ?? "");

  const handler = customCodeblockHandlers[lang];
  if (handler) {
    return handler(code, meta);
  }

  const filename = meta.filename;
  const noLineNumbers = "no-line-numbers" in meta;

  return (
    <figure className="mt-6 w-full overflow-hidden rounded-lg">
      <figcaption className="flex items-center justify-between rounded-t-lg border-b border-b-zinc-700 bg-muted p-2 px-4 font-mono font-semibold text-muted-foreground text-xs leading-normal">
        {filename && <p className="mb-0">{filename}</p>}
        <p>{lang}</p>
      </figcaption>

      <div className="relative">
        <CopyButton code={code} />
        <pre
          className={cn(
            "relative mb-4 max-h-[650px] overflow-x-auto rounded-b-lg px-2 py-3",
            className,
          )}
          {...props}
          data-show-line-numbers={!noLineNumbers}
        />
      </div>
    </figure>
  );
}
