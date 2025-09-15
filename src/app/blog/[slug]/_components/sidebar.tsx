"use client";

import type { Blog } from "@/lib/content";
import { AuthorSection } from "./author-section";
import { DesktopTableOfContents } from "./toc";

export function BlogSidebar({ headings }: { headings: Blog["headings"] }) {
  return (
    <div className="hidden md:block sticky top-24 h-fit space-y-4">
      <DesktopTableOfContents headings={headings} />
      <AuthorSection />
    </div>
  );
}
