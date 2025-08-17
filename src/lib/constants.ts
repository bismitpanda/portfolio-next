import type { JSX, SVGProps } from "react";
import {
  AwsDark,
  BetterAuthDark,
  CPlusplus,
  Docker,
  GolangDark,
  Graphql,
  Javascript,
  Kubernetes,
  Mongodb,
  NextjsIconDark,
  Nodejs,
  Postgresql,
  Python,
  ReactDark,
  RustDark,
  ShadcnUiDark,
  Tailwindcss,
  Typescript,
} from "@/components/icons";

type Icon = (props: SVGProps<SVGSVGElement>) => JSX.Element;

type Skill = {
  label: string;
  icon: Icon;
  type: string;
  url: string;
};

export const skills: Skill[] = [
  {
    label: "Typescript",
    icon: Typescript,
    type: "Language",
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "Rust",
    icon: RustDark,
    type: "Language",
    url: "https://www.rust-lang.org/",
  },
  {
    label: "Python",
    icon: Python,
    type: "Language",
    url: "https://www.python.org/",
  },
  {
    label: "C++",
    icon: CPlusplus,
    type: "Language",
    url: "https://isocpp.org/",
  },
  {
    label: "Go",
    icon: GolangDark,
    type: "Language",
    url: "https://go.dev/",
  },
  {
    label: "Javascript",
    icon: Javascript,
    type: "Language",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "React",
    icon: ReactDark,
    type: "Framework",
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    icon: NextjsIconDark,
    type: "Framework",
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    icon: Nodejs,
    type: "Framework",
    url: "https://nodejs.org/en",
  },
  {
    label: "Shadcn UI",
    icon: ShadcnUiDark,
    type: "UI Library",
    url: "https://ui.shadcn.com/",
  },
  {
    label: "Tailwind CSS",
    icon: Tailwindcss,
    type: "UI Library",
    url: "https://tailwindcss.com/",
  },
  {
    label: "MongoDB",
    icon: Mongodb,
    type: "Database",
    url: "https://www.mongodb.com/",
  },
  {
    label: "Postgres",
    icon: Postgresql,
    type: "Database",
    url: "https://www.postgresql.org/",
  },
  {
    label: "GraphQL",
    icon: Graphql,
    type: "Database",
    url: "https://graphql.org/",
  },
  {
    label: "AWS",
    icon: AwsDark,
    type: "Cloud",
    url: "https://aws.amazon.com/",
  },
  {
    label: "Docker",
    icon: Docker,
    type: "Tool",
    url: "https://www.docker.com/",
  },
  {
    label: "Kubernetes",
    icon: Kubernetes,
    type: "Tool",
    url: "https://kubernetes.io/",
  },
  {
    label: "Better Auth",
    icon: BetterAuthDark,
    type: "Tool",
    url: "https://www.better-auth.com/",
  },
];
