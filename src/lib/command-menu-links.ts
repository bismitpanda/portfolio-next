import type { LucideProps } from "lucide-react";
import {
  BriefcaseBusinessIcon,
  CircleUserIcon,
  FileCode2Icon,
  HomeIcon,
  ListIcon,
  MailIcon,
  RssIcon,
  UserIcon,
} from "lucide-react";
import { GithubDark, Linkedin, XDark } from "@/components/icons";
import {
  allProjectsByDate,
  allPublishedBlogsByDate,
  allSnippetsByDate,
} from "@/lib/content";

export type CommandLinkItem = {
  title: string;
  href: string;
  icon?: React.ComponentType<LucideProps>;
  iconImage?: string;
  keywords?: string[];
  openInNewTab?: boolean;
  description?: string;
};

export const MENU_LINKS: CommandLinkItem[] = [
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

export const SOCIAL_LINK_ITEMS: CommandLinkItem[] = [
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

export const BLOG_LINKS = allPublishedBlogsByDate.map((blog) => ({
  title: blog.title,
  href: `/blog/${blog.slug}`,
  keywords: ["blog", "post", "article"],
  description: blog.excerpt,
}));

export const PROJECT_LINKS = allProjectsByDate.map((project) => ({
  title: project.title,
  href: `/projects/${project.slug}`,
  keywords: ["project", "work", "portfolio"],
  description: project.description,
}));

export const SNIPPET_LINKS = allSnippetsByDate.map((snippet) => ({
  title: snippet.name,
  href: `/snippets/${snippet.slug}`,
  keywords: ["snippet", "code", "pattern"],
  description: snippet.description,
}));
