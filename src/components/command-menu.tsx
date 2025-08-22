"use client";

import { useCommandState } from "cmdk";
import type { LucideProps } from "lucide-react";
import {
  BriefcaseBusinessIcon,
  CircleUserIcon,
  CornerDownLeftIcon,
  FileCode2Icon,
  HomeIcon,
  ListIcon,
  MailIcon,
  RssIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GithubDark, Linkedin, XDark } from "@/components/icons";
import type { Blog, Project, Snippet } from "@/lib/content";
import {
  allProjectsByDate,
  allPublishedBlogsByDate,
  allSnippetsByDate,
} from "@/lib/content";
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

type CommandLinkItem = {
  title: string;
  href: string;
  icon?: React.ComponentType<LucideProps>;
  iconImage?: string;
  keywords?: string[];
  openInNewTab?: boolean;
  description?: string;
};

const MENU_LINKS: CommandLinkItem[] = [
  {
    title: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    title: "About",
    href: "/about",
    icon: UserIcon,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Snippets",
    href: "/snippets",
    icon: FileCode2Icon,
  },
  {
    title: "Categories",
    href: "/categories",
    icon: ListIcon,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: RssIcon,
  },
  {
    title: "Resume",
    href: "/resume",
    icon: CircleUserIcon,
    openInNewTab: true,
  },
  {
    title: "VCard",
    href: "/vcard",
    icon: CircleUserIcon,
    openInNewTab: true,
  },
];

const SOCIAL_LINK_ITEMS: CommandLinkItem[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/bismit-panda-5432a824a",
    icon: Linkedin,
    openInNewTab: true,
    description: "Connect on LinkedIn",
  },
  {
    title: "GitHub",
    href: "https://github.com/bismitpanda",
    icon: GithubDark,
    openInNewTab: true,
    description: "View projects on GitHub",
  },
  {
    title: "X (Twitter)",
    href: "https://x.com/bismitpanda",
    icon: XDark,
    openInNewTab: true,
    description: "Follow on X",
  },
  {
    title: "Email",
    href: "mailto:contact@bismitpanda.com",
    icon: MailIcon,
    openInNewTab: true,
    description: "Send an email",
  },
];

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
        router.push(href);
      }
    },
    [router],
  );

  const { blogLinks, projectLinks, snippetLinks } = useMemo(
    () => ({
      blogLinks: allPublishedBlogsByDate.map(blogToCommandLinkItem),
      projectLinks: allProjectsByDate.map(projectToCommandLinkItem),
      snippetLinks: allSnippetsByDate.map(snippetToCommandLinkItem),
    }),
    [],
  );

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "h-9 select-none gap-2 rounded-full border-border bg-background px-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground",
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
            links={projectLinks}
            fallbackIcon={BriefcaseBusinessIcon}
            onLinkSelect={handleOpenLink}
          />
          <CommandSeparator />
          <CommandLinkGroup
            heading="Blog Posts"
            links={blogLinks}
            fallbackIcon={RssIcon}
            onLinkSelect={handleOpenLink}
          />
          <CommandSeparator />
          <CommandLinkGroup
            heading="Code Snippets"
            links={snippetLinks}
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

type CommandKind = "resume" | "vcard" | "page" | "link";

type CommandMetaMap = Map<
  string,
  {
    commandKind: CommandKind;
  }
>;

function buildCommandMetaMap() {
  const commandMetaMap: CommandMetaMap = new Map();

  commandMetaMap.set("Resume", {
    commandKind: "resume",
  });

  commandMetaMap.set("VCard", {
    commandKind: "vcard",
  });

  SOCIAL_LINK_ITEMS.forEach((item) => {
    commandMetaMap.set(item.title, {
      commandKind: "link",
    });
  });

  return commandMetaMap;
}

const COMMAND_META_MAP = buildCommandMetaMap();

const ENTER_ACTION_LABELS: Record<CommandKind, string> = {
  resume: "Download Resume",
  vcard: "Download VCard",
  page: "Go to Page",
  link: "Open Link",
};

function CommandMenuFooter() {
  const selectedCommandKind = useCommandState(
    (state) => COMMAND_META_MAP.get(state.value)?.commandKind ?? "page",
  );

  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 border-t bg-background/80 px-4 font-medium text-xs backdrop-blur-sm">
        <Logo className="size-6 text-muted-foreground" aria-hidden />

        <div className="flex shrink-0 items-center gap-2">
          <span>{ENTER_ACTION_LABELS[selectedCommandKind]}</span>
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

function blogToCommandLinkItem(blog: Blog): CommandLinkItem {
  return {
    title: blog.title,
    href: `/blog/${blog.slug}`,
    keywords: ["blog", "post", "article"],
    description: blog.excerpt,
  };
}

function projectToCommandLinkItem(project: Project): CommandLinkItem {
  return {
    title: project.title,
    href: `/projects/${project.slug}`,
    keywords: ["project", "work", "portfolio"],
    description: project.description,
  };
}

function snippetToCommandLinkItem(snippet: Snippet): CommandLinkItem {
  return {
    title: snippet.name,
    href: `/snippets/${snippet.slug}`,
    keywords: ["snippet", "code", "pattern"],
    description: snippet.description,
  };
}
