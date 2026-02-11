"use client";

import { Check, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type TagWithCount = { name: string; slug: string; count: number };

export function FilterCommand({
  tags,
  selectedSlugs,
  onToggleTag,
  open,
  onOpenChange,
}: {
  tags: TagWithCount[];
  selectedSlugs: string[];
  onToggleTag: (slug: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "gap-2 rounded-xl transition-colors",
            selectedSlugs.length > 0 &&
              "bg-white! text-black! border-black! hover:bg-white/90! hover:text-black!",
          )}
        >
          <Tag className="size-4" />
          <span>Tags</span>
          {selectedSlugs.length > 0 && (
            <span className="font-mono text-xs opacity-80">
              {selectedSlugs.length}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="start">
        <Command className="rounded-md border-0">
          <CommandInput placeholder="Search tags..." />
          <CommandList>
            <CommandEmpty>No tag found.</CommandEmpty>
            <CommandGroup heading="Filter by tag">
              {tags.map((tag) => {
                const selected = selectedSlugs.includes(tag.slug);
                return (
                  <CommandItem
                    key={tag.slug}
                    value={tag.name}
                    onSelect={() => onToggleTag(tag.slug)}
                    className="gap-2"
                  >
                    <span
                      className={cn(
                        "flex size-4 items-center justify-center rounded border",
                        selected
                          ? "border-black bg-black text-white"
                          : "border-input",
                      )}
                    >
                      {selected ? <Check className="size-2.5" /> : null}
                    </span>
                    <span className="flex-1">{tag.name}</span>
                    <span className="font-mono text-muted-foreground text-xs">
                      {tag.count}
                    </span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
