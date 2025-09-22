"use client";

import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Check, ChevronDown, ChevronRight, Copy, Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Snippet } from "@/lib/content";

export function SnippetCode({
  snippet,
  slug,
}: {
  snippet: Snippet["codes"][number];
  slug: string;
}) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative mb-8" id={`${snippet.language}-code`}>
      <div
        className={`flex items-center justify-between bg-muted/50 px-4 py-3 ${
          isOpen ? "rounded-t-lg border border-b-0" : "rounded-lg border"
        }`}
      >
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 px-2"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls={`${snippet.language}-code-body`}
          >
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
            <span className="sr-only">{isOpen ? "Collapse" : "Expand"}</span>
          </Button>
          <Badge
            variant="outline"
            className="bg-background text-sm px-2 py-1 font-mono"
          >
            {snippet.language}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="gap-2">
            <Link
              href={`/snippets/${slug}/${snippet.language}`}
              target="_blank"
            >
              Raw
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2"
            onClick={() => copyToClipboard(snippet.content)}
            aria-label={copiedText ? "Copied" : "Copy code"}
          >
            {copiedText ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link
              href={`/snippets/${slug}/${snippet.language}?download`}
              target="_blank"
            >
              <Download className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {isOpen ? (
        <div
          id={`${snippet.language}-code-body`}
          className="bg-[#0b0e14] border rounded-b-lg overflow-hidden"
        >
          <pre className="overflow-x-auto text-sm leading-relaxed">
            {/** biome-ignore lint/security/noDangerouslySetInnerHtml: It is safe to set inner html */}
            <code dangerouslySetInnerHTML={{ __html: snippet.html }} />
          </pre>
        </div>
      ) : null}
    </div>
  );
}
