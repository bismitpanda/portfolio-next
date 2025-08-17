import { GithubDark, Linkedin, XDark } from "@/components/icons";
import { Mail } from "lucide-react";
import type { ReactNode } from "react";

type Route = {
  name: ReactNode;
  path: string;
  external?: boolean;
  type?: "icon";
};

export const footerRoutes: Route[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Snippets", path: "/snippets" },
  { name: "Blog", path: "/blog" },
  { name: "Resume", path: "/resume", external: true },
];

export const navigationRoutes: Route[] = [
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Resume", path: "/resume", external: true },
  {
    name: <GithubDark className="size-4" />,
    path: "https://github.com/bismitpanda",
    external: true,
    type: "icon",
  },
];

type SocialRoute = {
  icon: ({ className }: { className: string }) => ReactNode;
  title: string;
  label: string;
  url: string;
};

export const socialRoutes: SocialRoute[] = [
  {
    icon: ({ className }) => <Linkedin className={className} />,
    title: "LinkedIn",
    label: "linkedin.com/in/bismit-panda-5432a824a",
    url: "https://www.linkedin.com/in/bismit-panda-5432a824a",
  },
  {
    icon: ({ className }) => <GithubDark className={className} />,
    title: "GitHub",
    label: "github.com/bismitpanda",
    url: "https://github.com/bismitpanda",
  },
  {
    icon: ({ className }) => <XDark className={className} />,
    title: "X",
    label: "x.com/bismitpanda",
    url: "https://x.com/bismitpanda",
  },
  {
    icon: ({ className }) => <Mail className={className} />,
    title: "Email",
    label: "contact@bismitpanda.com",
    url: "mailto:contact@bismitpanda.com",
  },
];
