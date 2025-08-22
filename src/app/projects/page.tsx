import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GithubDark } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { allGithubProjects, allHostedProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "All Projects | Bismit Panda's Projects",
  description:
    "A showcase of my work, featuring web applications, design projects, and experiments.",
};

export default function Page() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="heading-xl mb-6">Projects</h1>
          <p className="body-lg text-muted-foreground">
            A showcase of my work, featuring web applications, design projects,
            and experiments.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="heading-lg mb-10">Web Projects</h2>

          <div className="grid gap-16 md:gap-24">
            {allHostedProjects.map((project, index) => (
              <div className="group" key={project.slug}>
                <div
                  className={`grid items-center gap-12 md:grid-cols-2 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div>
                    <span className="font-bold text-8xl text-muted-foreground/20 transition-colors group-hover:text-muted-foreground/50">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="-mt-8 mb-6 font-bold text-4xl transition-transform group-hover:translate-y-1.5">
                      {project.title}
                    </h2>
                    <p className="mb-6 text-muted-foreground text-xl">
                      {project.description}
                    </p>
                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          className="rounded-full bg-muted px-3 py-1 text-muted-foreground text-sm"
                          key={tech}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button asChild size="lg">
                      <Link href={`/projects/${project.slug}`}>
                        View Project
                      </Link>
                    </Button>
                  </div>
                  <div
                    className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:-order-1" : ""}`}
                  >
                    <Link
                      className="block aspect-video overflow-hidden rounded-lg bg-muted transition-transform duration-500 group-hover:scale-105"
                      href={`/projects/${project.slug}`}
                    >
                      <Image
                        alt={project.title}
                        className="h-full w-full object-cover"
                        height={600}
                        src={project.featuredImage}
                        width={800}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="heading-lg mb-10">Other Projects</h2>

          <p className="mb-10 max-w-3xl text-muted-foreground text-xl">
            These projects focus on computer science fundamentals and systems
            programming. They&apos;re available on GitHub for code review and
            educational purposes.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allGithubProjects.map((project) => (
              <div
                className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
                key={project.slug}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <Link
                      className="block aspect-video overflow-hidden bg-muted transition-transform duration-300 group-hover:scale-102"
                      href={`/projects/${project.slug}`}
                    >
                      <Image
                        alt={project.title}
                        className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                        height={600}
                        src={project.featuredImage}
                        width={800}
                      />
                    </Link>
                    <div className="p-6">
                      <h3 className="mb-3 font-bold text-2xl transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="mb-6 text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            className="rounded-full bg-muted px-3 py-1 text-muted-foreground text-sm"
                            key={tech}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between p-6">
                    <Button asChild className="gap-2">
                      <Link href={`/projects/${project.slug}`}>
                        View Project <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild className="gap-2" variant="outline">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <GithubDark className="h-4 w-4 text-muted-foreground" />
                          <span>View on GitHub</span>
                        </Link>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
