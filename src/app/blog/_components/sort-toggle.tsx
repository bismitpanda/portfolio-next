"use client";

import { ArrowDownAZ, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export type SortBy = "date" | "title";

export function SortToggle({
  value,
  onToggle,
  className,
}: {
  value: SortBy;
  onToggle: () => void;
  className?: string;
}) {
  const isDate = value === "date";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "border-input bg-background relative flex h-10 px-3 overflow-hidden rounded-xl border transition-colors hover:border-neutral-400",
        className,
      )}
      aria-pressed={!isDate}
      aria-label={`Sort by ${isDate ? "date" : "title A–Z"}. Click to switch.`}
    >
      <span
        className="absolute inset-y-1 rounded-lg bg-white text-black transition-[left] duration-300 ease-out"
        style={{
          left: isDate ? "4px" : "calc(34% - 4px)",
          width: "calc(66%)",
        }}
        aria-hidden
      />

      <span className="relative z-10 flex items-center justify-center gap-1.5 py-2">
        <Calendar
          className={cn(
            "size-4 shrink-0",
            isDate ? "text-black" : "text-muted-foreground",
          )}
          aria-hidden
        />
      </span>

      <span className="relative z-10 flex items-center justify-center px-4 py-2 text-sm font-medium text-black">
        Sort
      </span>

      <span className="relative z-10 flex items-center justify-center py-2">
        <ArrowDownAZ
          className={cn(
            "size-4 shrink-0",
            isDate ? "text-muted-foreground" : "text-black",
          )}
          aria-hidden
        />
      </span>
    </button>
  );
}
