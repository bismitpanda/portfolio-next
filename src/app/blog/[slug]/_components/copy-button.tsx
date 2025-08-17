"use client";

import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CopyButton({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const handleCopy = () => {
    copyToClipboard(code).catch(() => toast.error("Could not copy"));
  };

  return (
    <Button
      className={cn("absolute top-0 right-0 z-20 cursor-pointer", className)}
      onClick={handleCopy}
      size="icon"
      variant="ghost"
    >
      {copiedText ? (
        <Check className="size-4 text-green-400" />
      ) : (
        <Copy className="size-4" />
      )}
    </Button>
  );
}
