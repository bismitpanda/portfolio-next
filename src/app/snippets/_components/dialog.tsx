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
import { useState, type ReactNode } from "react";
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
                <Badge variant="outline" className="bg-muted/50 font-mono" key={code.language}>
                  {code.language}
                </Badge>
              ))}
            </div>
          </div>
          <p className="text-muted-foreground mt-2">{snippet.description}</p>
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
            <TabsContent key={code.language} value={code.language} className="relative">
              <div className="group max-w-[848px] max-h-[70vh] overflow-x-scroll overflow-y-scroll bg-[#212121] rounded-lg ">
                <div
                  className="font-mono text-sm whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: snippetCode.html }}
                />
                <Link href={`/snippets/${snippetCode.codeFile}`} target="_blank">
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
