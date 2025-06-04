"use client";

import type { Blog } from "@/lib/content";
import Link from "next/link";

export function TableOfContents({ headings }: { headings: Blog["headings"] }) {
  return (
    <div className="my-8 w-full border rounded-lg">
      <div className="text-xl font-medium p-4 border-b bg-muted rounded-t-lg">
        Table of Contents
      </div>
      <div className="max-h-[300px] overflow-y-auto pr-2">
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.slug} className="mb-1">
              <Link
                href={`#${heading.slug}`}
                className="text-lg hover:text-primary transition-colors py-1 flex items-center truncate text-muted-foreground"
                style={{ paddingLeft: `${heading.depth * 10}px` }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.slug)?.scrollIntoView({ behavior: "smooth" });
                }}
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
