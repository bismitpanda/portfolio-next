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
    "Co-Founder & CTO of AstraQ Cyber Defence, building security and AI platforms end to end, from Rust and Go infrastructure to the product on top. Architected Athena, a Kubernetes-native CTF platform that has hosted 1,200+ players across 650+ teams, and Morpheus, an AI-driven malware analysis platform. Sole developer of 10+ production applications at OpenVenture. Most of my work lives in private organization repositories; architecture walkthroughs on request.",
  technologies: {
    languages: "Rust, Go, TypeScript, Python, C++, Kotlin",
    frontend: "React, Next.js, TanStack Start, Tailwind CSS, Tauri",
    backend: "Axum, Tokio, gRPC/Protobuf, Hono, oRPC, Better Auth",
    databases: "PostgreSQL, Redis, ClickHouse, Milvus, Qdrant, MongoDB",
    infrastructure:
      "Kubernetes (EKS, GKE), Helm, Envoy Gateway, AWS (ECS Fargate, Lambda), Docker, Xen",
    aiMl: "Agentic tool loops, RAG and hybrid search, voice pipelines (VAD/STT/TTS), MCP",
  },
  projects: allResumeProjects,
  experience: allExperiencesByDate,
  education: allEducationsByDate,
  achievements: allAchievementsByDate,
  certifications: allCertificationsByDate,
};

export type User = typeof user;
