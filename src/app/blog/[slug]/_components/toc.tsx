"use client";

import Link from "next/link";
import type { Blog } from "@/lib/content";

export function TableOfContents({ headings }: { headings: Blog["headings"] }) {
  return (
    <div className="my-8 w-full rounded-lg border">
      <div className="rounded-t-lg border-b bg-muted p-4 font-medium text-xl">
        Table of Contents
      </div>
      <div className="max-h-[300px] overflow-y-auto pr-2">
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li className="mb-1" key={heading.slug}>
              <Link
                className="flex items-center truncate py-1 text-lg text-muted-foreground transition-colors hover:text-primary"
                href={`#${heading.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(heading.slug)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{ paddingLeft: `${heading.depth * 10}px` }}
              >
                <span className="mr-2">•</span>
                <span className="truncate">{heading.value}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
