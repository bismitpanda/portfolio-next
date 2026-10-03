import type { Metadata } from "next";
import {
  allClientProjects,
  allProductProjects,
  allSystemsProjects,
} from "@/lib/content";
import { ProjectsContent } from "./_components/projects-content";

export const metadata: Metadata = {
  title: "Selected Work | Bismit Panda",
  description:
    "Products, client platforms, and systems work built by Bismit Panda across cybersecurity, AI, immigration, and developer tooling.",
};

export default function Page() {
  return (
    <ProjectsContent
      products={allProductProjects}
      clientWork={allClientProjects}
      systems={allSystemsProjects}
    />
  );
}
