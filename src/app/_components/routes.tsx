import { Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { GithubDark, Linkedin, XDark } from "@/components/icons";
import { user } from "@/lib/constants";

type Route = {
  name: ReactNode;
  path: string;
  external?: boolean;
  type?: "icon";
  ariaLabel?: string;
};

export const footerRoutes: Route[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Snippets", path: "/snippets" },
  { name: "Blog", path: "/blog" },
  { name: "Categories", path: "/categories" },
  { name: "Resume", path: "/resume", external: true },
  { name: "VCard", path: "/vcard", external: true },
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
    ariaLabel: "GitHub",
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
    label: user.socials.linkedin.label,
    url: user.socials.linkedin.url,
  },
  {
    icon: ({ className }) => <GithubDark className={className} />,
    title: "GitHub",
    label: user.socials.github.label,
    url: user.socials.github.url,
  },
  {
    icon: ({ className }) => <XDark className={className} />,
    title: "X",
    label: user.socials.twitter.label,
    url: user.socials.twitter.url,
  },
  {
    icon: ({ className }) => <Mail className={className} />,
    title: "Email",
    label: user.socials.email.label,
    url: user.socials.email.url,
  },
  {
    icon: ({ className }) => <Phone className={className} />,
    title: "Phone",
    label: user.socials.phone.label,
    url: user.socials.phone.url,
  },
];
