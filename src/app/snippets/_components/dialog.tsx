"use client";

import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Check, Copy, Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
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

interface CodeSnippetDialogProps {
  snippet: Snippet;
  open: boolean;
}

export function CodeSnippetDialog({ snippet, open }: CodeSnippetDialogProps) {
  const [isOpen, setIsOpen] = useState(open);
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  // biome-ignore lint/style/noNonNullAssertion: It is guaranteed that a snippet will have at least one code
  const [snippetCode, setSnippetCode] = useState(snippet.codes[0]!);

  const handleCopy = () => {
    copyToClipboard(snippetCode.code).catch(() =>
      toast.error("Could not copy"),
    );
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          // biome-ignore lint/style/noNonNullAssertion: It is guaranteed that a snippet will have at least one code
          setSnippetCode(snippet.codes[0]!);
        }
      }}
    >
      <DialogTrigger asChild>
        <div className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg">
          <div className="grow p-6">
            <div className="mb-2 flex items-center space-x-4 font-bold text-xl transition-colors group-hover:text-primary">
              <span>{snippet.name}</span>
              <div className="flex flex-row items-center justify-center gap-2">
                {snippet.codes.slice(0, 2).map((code) => (
                  <Badge
                    className="bg-muted/50 font-mono"
                    key={code.language}
                    variant="outline"
                  >
                    {code.language}
                  </Badge>
                ))}
                {snippet.codes.length > 2 && (
                  <Badge className="bg-muted/50 font-mono" variant="outline">
                    +{snippet.codes.length - 2}
                  </Badge>
                )}
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              {snippet.description}
            </p>
          </div>
          <div className="px-6 pb-6">
            <Button className="w-full">View Snippet</Button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-sm sm:w-xl md:w-2xl lg:w-4xl sm:max-w-none">
        <DialogHeader>
          <div className="flex items-center space-x-8">
            <DialogTitle className="text-2xl">{snippet.name}</DialogTitle>
            <div className="flex items-center gap-2">
              {snippet.codes.map((code) => (
                <Badge
                  className="bg-muted/50 font-mono"
                  key={code.language}
                  variant="outline"
                >
                  {code.language}
                </Badge>
              ))}
            </div>
          </div>
          <p className="mt-2 text-muted-foreground text-left">
            {snippet.description}
          </p>
        </DialogHeader>
        <Tabs
          className="mt-4"
          // biome-ignore lint/style/noNonNullAssertion: It is guaranteed that a snippet will have at least one code
          defaultValue={snippet.codes[0]!.language}
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
            <TabsContent
              className="relative"
              key={code.language}
              value={code.language}
            >
              <div className="group max-h-[70vh] shrink max-w-[300px] sm:max-w-[528px] md:max-w-[624px] lg:max-w-[848px] overflow-x-scroll overflow-y-scroll min-w-0 w-fit rounded-lg bg-[#0b0e14]">
                <div
                  className="whitespace-pre-wrap font-mono text-sm"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: html is generated from code block
                  dangerouslySetInnerHTML={{ __html: snippetCode.html }}
                />
                <Link
                  href={`/snippets/${snippet.slug}/${snippetCode.codeFile}`}
                  target="_blank"
                >
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
                  {copiedText ? (
                    <Check className="size-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {copiedText ? "Copied" : "Copy code"}
                  </span>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
