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
  allFeaturedProjects,
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
  location: "Gandhinagar, Gujarat",
  avatar: "images/photo.png",
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
    "I am Bismit Panda, a pre-final year B.Tech Computer Science student with a specialization in Cyber Security at Rashtriya Raksha University. Skilled in Java, Python, C++, C, Rust, Golang, and web technologies, I have made projects in image manipulation, management systems, and interactive games.",
  technologies: {
    languages: skills
      .filter((skill) => skill.type === "language")
      .map((skill) => skill.label)
      .join(", "),
    softwareAndFrameworks: skills
      .filter((skill) => skill.type !== "language")
      .map((skill) => skill.label)
      .join(", "),
  },
  projects: allFeaturedProjects,
  experience: allExperiencesByDate,
  education: allEducationsByDate,
  achievements: allAchievementsByDate,
  certifications: allCertificationsByDate,
};

export type User = typeof user;
