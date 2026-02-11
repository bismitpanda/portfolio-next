"use client";

import { useCommandState } from "cmdk";
import type { LucideProps } from "lucide-react";
import {
  BriefcaseBusinessIcon,
  CornerDownLeftIcon,
  FileCode2Icon,
  RssIcon,
  SearchIcon,
} from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import type { CommandLinkItem } from "@/lib/command-menu-links";
import {
  BLOG_LINKS,
  MENU_LINKS,
  PROJECT_LINKS,
  SNIPPET_LINKS,
  SOCIAL_LINK_ITEMS,
} from "@/lib/command-menu-links";
import { cn } from "@/lib/utils";
import { Logo } from "./icons/logo";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Separator } from "./ui/separator";

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
          if (
            (e.target instanceof HTMLElement && e.target.isContentEditable) ||
            e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement ||
            e.target instanceof HTMLSelectElement
          ) {
            return;
          }

          e.preventDefault();
          setOpen((open) => !open);
        }
      },
      { signal },
    );

    return () => abortController.abort();
  }, []);

  const handleOpenLink = useCallback(
    (href: string, openInNewTab = false) => {
      setOpen(false);

      if (openInNewTab) {
        window.open(href, "_blank", "noopener");
      } else {
        router.push(href as Route);
      }
    },
    [router],
  );

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "tap-target h-9 select-none gap-2 rounded-full border-border bg-background px-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground",
          "shadow-xs",
        )}
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-4" />
        <span className="font-medium font-sans text-sm sm:hidden">Search</span>
        <CommandMenuKbd className="hidden font-mono tracking-wider sm:in-[.os-macos_&]:flex">
          ⌘K
        </CommandMenuKbd>
        <CommandMenuKbd className="hidden font-mono sm:not-[.os-macos_&]:flex">
          Ctrl K
        </CommandMenuKbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="min-h-80">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandLinkGroup
            heading="Menu"
            links={MENU_LINKS}
            onLinkSelect={handleOpenLink}
          />
          <CommandSeparator />
          <CommandLinkGroup
            heading="Projects"
            links={PROJECT_LINKS}
            fallbackIcon={BriefcaseBusinessIcon}
            onLinkSelect={handleOpenLink}
          />
          <CommandSeparator />
          <CommandLinkGroup
            heading="Blog Posts"
            links={BLOG_LINKS}
            fallbackIcon={RssIcon}
            onLinkSelect={handleOpenLink}
          />
          <CommandSeparator />
          <CommandLinkGroup
            heading="Code Snippets"
            links={SNIPPET_LINKS}
            fallbackIcon={FileCode2Icon}
            onLinkSelect={handleOpenLink}
          />
          <CommandSeparator />
          <CommandLinkGroup
            heading="Social Links"
            links={SOCIAL_LINK_ITEMS}
            onLinkSelect={handleOpenLink}
          />
          <CommandSeparator />
        </CommandList>
        <CommandMenuFooter />
      </CommandDialog>
    </>
  );
}

function CommandLinkGroup({
  heading,
  links,
  fallbackIcon,
  onLinkSelect,
}: {
  heading: string;
  links: CommandLinkItem[];
  fallbackIcon?: React.ComponentType<LucideProps>;
  onLinkSelect: (href: string, openInNewTab?: boolean) => void;
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const Icon = link?.icon ?? fallbackIcon ?? React.Fragment;

        return (
          <CommandItem
            key={link.href}
            keywords={link.keywords}
            onSelect={() => onLinkSelect(link.href, link.openInNewTab)}
            value={link.title}
          >
            {link?.iconImage ? (
              <Image
                className="rounded-sm"
                src={link.iconImage}
                alt={link.title}
                width={16}
                height={16}
                unoptimized
              />
            ) : (
              <Icon />
            )}
            <div className="flex flex-col">
              <span>{link.title}</span>
              {link.description && (
                <span className="line-clamp-1 text-ellipsis text-muted-foreground text-xs">
                  {link.description}
                </span>
              )}
            </div>
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}

type CommandMetaMap = Map<string, string>;

function buildCommandMetaMap() {
  const commandMetaMap: CommandMetaMap = new Map();

  commandMetaMap.set("Resume", "Download Resume");
  commandMetaMap.set("VCard", "Download VCard");

  SOCIAL_LINK_ITEMS.forEach((item) => {
    // biome-ignore lint/style/noNonNullAssertion: It is guaranteed that a social link will have a description
    commandMetaMap.set(item.title, item.description!);
  });

  BLOG_LINKS.forEach((item) => {
    commandMetaMap.set(item.title, "Read Blog Post");
  });

  PROJECT_LINKS.forEach((item) => {
    commandMetaMap.set(item.title, "View Project");
  });

  SNIPPET_LINKS.forEach((item) => {
    commandMetaMap.set(item.title, "View Snippet");
  });

  return commandMetaMap;
}

const COMMAND_META_MAP = buildCommandMetaMap();

function CommandMenuFooter() {
  const selectedCommandMessage = useCommandState(
    (state) => COMMAND_META_MAP.get(state.value) ?? "Go to Page",
  );

  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 border-t bg-background/80 px-4 font-medium text-xs backdrop-blur-sm">
        <Logo className="size-6 text-muted-foreground" aria-hidden />

        <div className="flex shrink-0 items-center gap-2">
          <span>{selectedCommandMessage}</span>
          <CommandMenuKbd>
            <CornerDownLeftIcon className="size-4" />
          </CommandMenuKbd>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4"
          />
          <span className="text-muted-foreground">Exit</span>
          <CommandMenuKbd>Esc</CommandMenuKbd>
        </div>
      </div>
    </>
  );
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none flex h-5 min-w-6 select-none items-center justify-center gap-1 rounded-sm bg-muted px-1 font-normal font-sans text-[13px] text-muted-foreground shadow-xs",
        className,
      )}
      {...props}
    />
  );
}
