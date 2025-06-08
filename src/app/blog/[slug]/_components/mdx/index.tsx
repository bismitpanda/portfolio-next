"use client";

import { Callout } from "./callout";
import { CopyButton } from "./copy-button";
import { EmbedBlog } from "./embed-blog";
import { Mermaid } from "./mermaid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useMDXComponent } from "@content-collections/mdx/react";
import type * as AccordionPrimitive from "@radix-ui/react-accordion";
import Link from "next/link";

const components = {
  Accordion,
  AccordionContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof AccordionPrimitive.Content>) => (
    <AccordionContent className={cn("font-sans text-base", className)} {...props} />
  ),
  AccordionItem: ({
    className,
    ...props
  }: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
    <AccordionItem className={cn("font-sans", className)} {...props} />
  ),
  AccordionTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => (
    <AccordionTrigger className={cn("font-sans text-lg", className)} {...props} />
  ),
  Button,
  h1: ({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
    <h1 className={cn("font-heading mt-2 scroll-m-20 text-4xl font-bold", className)} {...props} />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading mt-16 scroll-m-20 border-b pb-4 text-2xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "font-heading mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "font-heading mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a
      className={cn("underline underline-offset-4", className)}
      target={props.href ? "_blank" : ""}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("leading-[1.65rem] [&:not(:first-child)]:mt-6", className)} {...props} />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-semibold", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "my-6 not-[.contains-task-list]:ml-6 not-[.contains-task-list]:list-disc",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className={cn("relative w-full overflow-hidden border-none text-sm", className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("last:border-b-none m-0 border-b", className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    "data-code": code,
    "data-meta": dataMeta,
    "data-language": lang,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    "data-code": string;
    "data-meta"?: string;
    "data-language": string;
  }) => {
    const meta = Object.fromEntries(
      dataMeta
        ?.split(" ")
        .map((item) =>
          item.includes("=") ? (item.split("=") as [string, string]) : [item, undefined],
        ) ?? [],
    );

    const filename = meta.filename;
    const noLineNumbers = "no-line-numbers" in meta;

    return (
      <figure className="overflow-hidden rounded-lg mt-6 w-full">
        <figcaption className="flex justify-between items-center text-sm p-2 px-4 leading-normal rounded-t-lg bg-gray-700 text-white">
          {filename && <p className="mb-0">{filename}</p>}
          <p className="text-xs text-white font-mono font-semibold">{lang}</p>
        </figcaption>

        <div className="relative">
          <CopyButton code={code} />
          <pre
            className={cn(
              "mb-4 max-h-[650px] overflow-x-auto rounded-b-lg py-3 px-2 relative",
              className,
            )}
            {...props}
            data-show-line-numbers={!noLineNumbers}
          />
        </div>
      </figure>
    );
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className={cn("relative rounded font-mono text-sm", className)} {...props} />
  ),
  Callout,
  AspectRatio,
  EmbedBlog,
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 [counter-reset:step] md:ml-4 md:border-l md:pl-8"
      {...props}
    />
  ),
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
  ),
  TabsList: ({ className, ...props }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn("w-full justify-start rounded-none border-b bg-transparent p-0", className)}
      {...props}
    />
  ),
  TabsTrigger: ({ className, ...props }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
        className,
      )}
      {...props}
    />
  ),
  TabsContent: ({ className, ...props }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
        className,
      )}
      {...props}
    />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link className={cn("underline underline-offset-4", className)} {...props} />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10",
        className,
      )}
      {...props}
    />
  ),
  Mermaid,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
