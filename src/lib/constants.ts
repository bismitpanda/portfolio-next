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
import {
  allAchievementsByDate,
  allCertificationsByDate,
  allEducationsByDate,
  allExperiencesByDate,
  allResumeProjects,
} from "./content";

type Icon = (props: SVGProps<SVGSVGElement>) => JSX.Element;

type Skill = {
  label: string;
  icon: Icon;
  type: "language" | "framework" | "ui-library" | "database" | "cloud" | "tool";
  url: string;
};

export const skills: Skill[] = [
  {
    label: "Typescript",
    icon: Typescript,
    type: "language",
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "Rust",
    icon: RustDark,
    type: "language",
    url: "https://www.rust-lang.org/",
  },
  {
    label: "Python",
    icon: Python,
    type: "language",
    url: "https://www.python.org/",
  },
  {
    label: "C++",
    icon: CPlusplus,
    type: "language",
    url: "https://isocpp.org/",
  },
  {
    label: "Golang",
    icon: GolangDark,
    type: "language",
    url: "https://go.dev/",
  },
  {
    label: "Javascript",
    icon: Javascript,
    type: "language",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "React",
    icon: ReactDark,
    type: "framework",
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    icon: NextjsIconDark,
    type: "framework",
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    icon: Nodejs,
    type: "framework",
    url: "https://nodejs.org/en",
  },
  {
    label: "Shadcn UI",
    icon: ShadcnUiDark,
    type: "ui-library",
    url: "https://ui.shadcn.com/",
  },
  {
    label: "Tailwind CSS",
    icon: Tailwindcss,
    type: "ui-library",
    url: "https://tailwindcss.com/",
  },
  {
    label: "MongoDB",
    icon: Mongodb,
    type: "database",
    url: "https://www.mongodb.com/",
  },
  {
    label: "Postgres",
    icon: Postgresql,
    type: "database",
    url: "https://www.postgresql.org/",
  },
  {
    label: "GraphQL",
    icon: Graphql,
    type: "database",
    url: "https://graphql.org/",
  },
  {
    label: "AWS",
    icon: AwsDark,
    type: "cloud",
    url: "https://aws.amazon.com/",
  },
  {
    label: "Docker",
    icon: Docker,
    type: "tool",
    url: "https://www.docker.com/",
  },
  {
    label: "Kubernetes",
    icon: Kubernetes,
    type: "tool",
    url: "https://kubernetes.io/",
  },
  {
    label: "Better Auth",
    icon: BetterAuthDark,
    type: "tool",
    url: "https://www.better-auth.com/",
  },
];

export const user = {
  firstName: "Bismit",
  lastName: "Panda",
  username: "bismitpanda",
  location: "India",
  avatar: "images/photo.png",
  vcardPhoto: "images/vcard-photo.jpg",
  socials: {
    phone: {
      label: "+91 8280016000",
      url: "tel:+918280016000",
    },
    email: {
      label: "contact@bismitpanda.com",
      url: "mailto:contact@bismitpanda.com",
    },
    linkedin: {
      label: "linkedin.com/in/bismit-panda-5432a824a/",
      url: "https://www.linkedin.com/in/bismit-panda-5432a824a/",
    },
    github: {
      label: "github.com/bismitpanda",
      url: "https://github.com/bismitpanda",
    },
    twitter: {
      label: "x.com/bismitpanda",
      url: "https://x.com/bismitpanda",
    },
    website: {
      label: "bismitpanda.com",
      url: "https://bismitpanda.com",
    },
  },
  about:
    "Software engineer with 1.5+ years of professional experience shipping production web applications and AI-integrated systems. Built and deployed 10+ full-stack products across immigration, hiring, legal, and SaaS verticals as a sole developer. Co-Founder and CTO of an AI-powered cybersecurity startup. Strong systems background, writing Rust and Go for performance-critical work.",
  technologies: {
    languages: "TypeScript, Rust, Go, Python, C++, JavaScript",
    frontend: "React, Next.js, Tailwind CSS, Shadcn UI",
    backend: "Node.js, Hono, tRPC, GraphQL, Django",
    databases: "PostgreSQL, MongoDB, Redis, ClickHouse, Qdrant",
    infrastructure: "AWS, Docker, Kubernetes, Vercel",
    aiMl: "LLM integration, RAG pipelines, AI agents, web scraping",
  },
  projects: allResumeProjects,
  experience: allExperiencesByDate,
  education: allEducationsByDate,
  achievements: allAchievementsByDate,
  certifications: allCertificationsByDate,
};

export type User = typeof user;
