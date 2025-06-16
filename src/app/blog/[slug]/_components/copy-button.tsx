"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

export function CopyButton({ code, className }: { code: string; className?: string }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const handleCopy = () => {
    copyToClipboard(code).catch(() => toast.error("Could not copy"));
  };

  return (
    <Button
      className={cn("absolute right-0 cursor-pointer top-0 z-20", className)}
      variant="ghost"
      size="icon"
      onClick={handleCopy}
    >
      {copiedText ? <Check className="size-4 text-green-400" /> : <Copy className="size-4" />}
    </Button>
  );
}
