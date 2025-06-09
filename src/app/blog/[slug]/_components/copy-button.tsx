"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function CopyButton({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => toast.error("Could not copy"));
  };

  return (
    <Button
      className={cn("absolute right-0 cursor-pointer top-0 z-20", className)}
      variant="ghost"
      size="icon"
      onClick={handleCopy}
    >
      {copied ? <Check className="size-4 text-green-400" /> : <Copy className="size-4" />}
    </Button>
  );
}
