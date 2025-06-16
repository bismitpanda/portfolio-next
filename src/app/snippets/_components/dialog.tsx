"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Snippet } from "@/lib/content";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Check, Copy, Download } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { toast } from "sonner";

interface CodeSnippetDialogProps {
  snippet: Snippet;
  children: React.ReactNode;
}

export function CodeSnippetDialog({ snippet, children }: CodeSnippetDialogProps) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard(snippet.code).catch(() => toast.error("Could not copy"));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-4xl sm:max-w-none">
        <DialogHeader>
          <div className="flex items-center space-x-8">
            <DialogTitle className="text-2xl">{snippet.name}</DialogTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-muted/50 font-mono">
                {snippet.language}
              </Badge>
            </div>
          </div>
          <p className="text-muted-foreground mt-2">{snippet.description}</p>
        </DialogHeader>
        <div className="relative mt-4 group">
          <div
            className="bg-muted/50 rounded-lg overflow-x-scroll overflow-y-scroll max-w-[848px] max-h-[70vh] font-mono text-sm whitespace-pre"
            dangerouslySetInnerHTML={{ __html: snippet.html }}
          />
          <Link href={`/snippets/${snippet.codeFile}`} target="_blank">
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-12 h-8 w-0 p-0 opacity-0 group-hover:w-8 group-hover:opacity-100 transition-all cursor-pointer"
              aria-label="Download code"
            >
              <Download className="h-4 w-4" />
              <span className="sr-only">Download code</span>
            </Button>
          </Link>
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 h-8 w-8 p-0 cursor-pointer"
            onClick={handleCopy}
          >
            {copiedText ? <Check className="size-4" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only">Copy code</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
