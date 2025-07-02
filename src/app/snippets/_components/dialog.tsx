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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Snippet } from "@/lib/content";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Check, Copy, Download } from "lucide-react";
import Link from "next/link";
import { type ReactNode, useState } from "react";
import { toast } from "sonner";

interface CodeSnippetDialogProps {
  snippet: Snippet;
  children: ReactNode;
}

export function CodeSnippetDialog({ snippet, children }: CodeSnippetDialogProps) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [snippetCode, setSnippetCode] = useState(snippet.codes[0]);

  const handleCopy = () => {
    copyToClipboard(snippetCode.code).catch(() => toast.error("Could not copy"));
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setSnippetCode(snippet.codes[0]);
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-4xl sm:max-w-none">
        <DialogHeader>
          <div className="flex items-center space-x-8">
            <DialogTitle className="text-2xl">{snippet.name}</DialogTitle>
            <div className="flex items-center gap-2">
              {snippet.codes.map((code) => (
                <Badge className="bg-muted/50 font-mono" key={code.language} variant="outline">
                  {code.language}
                </Badge>
              ))}
            </div>
          </div>
          <p className="mt-2 text-muted-foreground">{snippet.description}</p>
        </DialogHeader>
        <Tabs
          className="mt-4"
          defaultValue={snippet.codes[0].language}
          onValueChange={(value) => {
            const code = snippet.codes.find((code) => code.language === value);
            if (code) {
              setSnippetCode(code);
            }
          }}
        >
          <TabsList>
            {snippet.codes.map((code) => (
              <TabsTrigger key={code.language} value={code.language}>
                {code.language}
              </TabsTrigger>
            ))}
          </TabsList>
          {snippet.codes.map((code) => (
            <TabsContent className="relative" key={code.language} value={code.language}>
              <div className="group max-h-[70vh] max-w-[848px] overflow-x-scroll overflow-y-scroll rounded-lg bg-[#121212] ">
                <div
                  className="whitespace-pre-wrap font-mono text-sm"
                  dangerouslySetInnerHTML={{ __html: snippetCode.html }}
                />
                <Link href={`/snippets/${snippetCode.codeFile}`} target="_blank">
                  <Button
                    aria-label="Download code"
                    className="absolute top-2 right-12 h-8 w-0 cursor-pointer p-0 opacity-0 transition-all group-hover:w-8 group-hover:opacity-100"
                    size="sm"
                    variant="ghost"
                  >
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download code</span>
                  </Button>
                </Link>
                <Button
                  className="absolute top-2 right-2 h-8 w-8 cursor-pointer p-0"
                  onClick={handleCopy}
                  size="sm"
                  variant="ghost"
                >
                  {copiedText ? <Check className="size-4" /> : <Copy className="h-4 w-4" />}
                  <span className="sr-only">{copiedText ? "Copied" : "Copy code"}</span>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
