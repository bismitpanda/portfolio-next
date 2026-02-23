import type { Metadata } from "next";
import {
  allFrontendProjects,
  allFullStackProjects,
  allSystemsProjects,
} from "@/lib/content";
import { ProjectsContent } from "./_components/projects-content";

export const metadata: Metadata = {
  title: "All Projects | Bismit Panda's Projects",
  description:
    "A showcase of my work, featuring web applications, design projects, and experiments.",
};

export default function Page() {
  return (
    <ProjectsContent
      frontend={allFrontendProjects}
      fullStack={allFullStackProjects}
      systems={allSystemsProjects}
    />
  );
}
