"use client";

import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import type { Blog } from "@/lib/content";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  headings: Blog["headings"];
  className?: string;
}

export function MobileTableOfContents({ headings }: TableOfContentsProps) {
  return (
    <div className="my-8 w-full rounded-lg border md:hidden">
      <div className="rounded-t-lg border-b bg-muted p-4 font-medium text-xl">
        Table of Contents
      </div>
      <div className="max-h-[320px] overflow-y-auto pr-2">
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
                <span className="truncate text-base font-medium">
                  {heading.value}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function DesktopTableOfContents({ headings }: TableOfContentsProps) {
  const activeId = useIntersectionObserver(headings);

  return (
    <div className="overflow-y-auto border border-border rounded-lg bg-card p-4">
      <p className="text-xl font-bold mb-2">On this page</p>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li className="mb-1" key={heading.slug}>
            <Link
              className={cn(
                "flex items-center truncate py-1 text-lg transition-colors hover:text-primary",
                activeId === heading.slug
                  ? "text-primary font-semibold"
                  : "text-muted-foreground",
              )}
              href={`#${heading.slug}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(heading.slug)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ paddingLeft: `${(heading.depth - 1) * 10}px` }}
            >
              <span className="mr-2">•</span>
              <span
                className={cn(
                  "truncate text-base font-medium",
                  activeId === heading.slug && "underline",
                )}
              >
                {heading.value}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
