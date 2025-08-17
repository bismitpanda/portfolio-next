import { GithubDark } from "@/components/icons";
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

export const socialRoutes = {
  linkedIn: {
    label: "linkedin.com/in/bismit-panda-5432a824a",
    url: "https://www.linkedin.com/in/bismit-panda-5432a824a",
  },
  github: {
    label: "github.com/bismitpanda",
    url: "https://github.com/bismitpanda",
  },
  x: { label: "x.com/bismitpanda", url: "https://x.com/bismitpanda" },
  email: {
    label: "contact@bismitpanda.com",
    url: "mailto:contact@bismitpanda.com",
  },
};
