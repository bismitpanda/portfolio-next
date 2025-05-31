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
import { Check, Copy } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";

interface CodeSnippetDialogProps {
  snippet: Snippet;
  children: React.ReactNode;
}

export function CodeSnippetDialog({ snippet, children }: CodeSnippetDialogProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(snippet.code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => toast.error("Could not copy"));
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
        <div className="relative mt-4">
          <div
            className="bg-muted/50 rounded-lg overflow-x-scroll overflow-y-scroll max-w-[848px] max-h-[70vh] font-mono text-sm whitespace-pre"
            dangerouslySetInnerHTML={{ __html: snippet.html }}
          />
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 h-8 w-8 p-0"
            onClick={copyToClipboard}
          >
            {copied ? <Check className="size-4" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only">Copy code</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
