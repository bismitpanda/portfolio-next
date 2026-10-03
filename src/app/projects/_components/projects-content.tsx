"use client";

import { ExternalLink } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GithubDark } from "@/components/icons";
import { ItemReveal } from "@/components/motion/section-reveal";
import { ProjectAccentFrame } from "@/components/project-accent-frame";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["products", "client-work", "systems"] as const;
const HEADER_OFFSET = 80;

type ProjectsContentProps = {
  products: Project[];
  clientWork: Project[];
  systems: Project[];
};

export function ProjectsContent({
  products,
  clientWork,
  systems,
}: ProjectsContentProps) {
  const [activeId, setActiveId] = useState<string | null>(SECTION_IDS[0]);

  useEffect(() => {
    const visibility = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!SECTION_IDS.includes(id as (typeof SECTION_IDS)[number])) {
            continue;
          }
          visibility.set(
            id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }
        const visible = [...visibility.entries()]
          .filter(([, ratio]) => ratio > 0)
          .sort((a, b) => b[1] - a[1]);
        if (visible[0]) setActiveId(visible[0][0]);
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`,
        threshold: [0, 0.1, 0.5, 1],
      },
    );

    for (const id of SECTION_IDS) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="relative mx-auto mb-10 max-w-3xl text-center">
          <h1 className="heading-xl mb-6">Projects</h1>
          <p className="body-lg text-muted-foreground">
            A showcase across product platforms, client work, and systems
            programming.
          </p>
        </div>
        <nav
          className="sticky top-24 z-40 mx-auto mb-20 flex w-fit flex-wrap items-center justify-center gap-1 rounded-full border border-border bg-background/90 px-2 py-1.5 backdrop-blur-md"
          aria-label="Jump to section"
        >
          {[
            ["products", "Products"],
            ["client-work", "Client Work"],
            ["systems", "Systems"],
          ].map(([id, label]) => (
            <Link
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                activeId === id
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground",
              )}
              href={`#${id}` as Route}
              key={id}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mb-28" id="products">
          <h2 className="heading-lg mb-12">Products</h2>

          <div className="grid gap-24">
            {products.map((project, index) => (
              <ItemReveal key={project.slug} delay={index * 0.08}>
                <div className="group">
                  <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                      <span className="font-bold text-8xl text-muted-foreground/20 transition-colors group-hover:text-muted-foreground/50">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <h2 className="-mt-8 mb-6 font-bold text-4xl transition-transform group-hover:translate-y-1.5">
                        {project.title}
                      </h2>
                      <p className="mb-6 text-muted-foreground text-xl leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="mb-8 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            className="rounded-full border border-border bg-muted/80 px-3 py-1 text-muted-foreground text-sm"
                            key={tech}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="rounded-full border border-border bg-muted/80 px-3 py-1 text-muted-foreground text-sm">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>
                      <Button asChild size="lg">
                        <Link href={`/projects/${project.slug}`}>
                          View Project
                        </Link>
                      </Button>
                    </div>
                    <div
                      className={cn(
                        "rounded-lg",
                        index % 2 === 1 && "md:-order-1",
                      )}
                    >
                      <Link
                        className="block rounded-lg"
                        href={`/projects/${project.slug}`}
                      >
                        <ProjectAccentFrame
                          accent={project.accent}
                          className="aspect-video transition-transform duration-500 group-hover:scale-105"
                        >
                          {project.featuredImage ? (
                            <Image
                              alt={project.title}
                              className="h-full w-full object-cover"
                              height={600}
                              src={project.featuredImage}
                              width={800}
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center p-8 text-center text-muted-foreground">
                              {project.title}
                            </div>
                          )}
                        </ProjectAccentFrame>
                      </Link>
                    </div>
                  </div>
                </div>
              </ItemReveal>
            ))}
          </div>
        </div>

        <div className="mb-28" id="client-work">
          <h2 className="heading-lg mb-12">Client Work &amp; Landing Pages</h2>

          <div className="grid gap-10 md:grid-cols-2">
            {clientWork.map((project, index) => (
              <ItemReveal key={project.slug} delay={index * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative block rounded-2xl transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
                >
                  <ProjectAccentFrame
                    accent={project.accent}
                    className="aspect-4/3 rounded-2xl"
                  >
                    {project.featuredImage ? (
                      <Image
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        src={project.featuredImage}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center p-8 text-center text-muted-foreground">
                        {project.title}
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                      <div className="rounded-xl border border-white/15 bg-black/50 px-4 py-3 backdrop-blur-md transition-transform group-hover:-translate-y-px">
                        <h3 className="mb-1 font-semibold text-lg tracking-tight text-white">
                          {project.title}
                        </h3>
                        <p className="mb-2 text-white/80 text-sm leading-snug line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              className="rounded-md bg-white/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-white/90"
                              key={tech}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="rounded-md bg-white/15 px-2 py-0.5 font-mono text-[10px] text-white/70">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </ProjectAccentFrame>
                </Link>
              </ItemReveal>
            ))}
          </div>
        </div>

        <div id="systems">
          <h2 className="heading-lg mb-6">Systems &amp; CS Projects</h2>
          <p className="mb-12 max-w-2xl text-muted-foreground leading-relaxed">
            Fundamentals, systems programming, and low-level work. Available on
            GitHub for code review and learning.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((project, index) => (
              <ItemReveal key={project.slug} delay={index * 0.05}>
                <div className="group flex h-full flex-col rounded-xl border border-border bg-card transition-all duration-300 hover:border-border/80 hover:shadow-lg">
                  <Link
                    className="block rounded-xl"
                    href={`/projects/${project.slug}`}
                  >
                    <ProjectAccentFrame
                      accent={project.accent}
                      className="aspect-16/10 shrink-0 rounded-xl"
                    >
                      {project.featuredImage ? (
                        <Image
                          alt={project.title}
                          className="h-full w-full object-cover opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                          height={240}
                          src={project.featuredImage}
                          width={400}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center p-6 text-center text-muted-foreground">
                          {project.title}
                        </div>
                      )}
                    </ProjectAccentFrame>
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 font-semibold text-lg tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mb-4 flex-1 text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <p className="mb-4 font-mono text-xs text-muted-foreground">
                      {project.technologies.slice(0, 4).join(" · ")}
                      {project.technologies.length > 4 &&
                        ` · +${project.technologies.length - 4}`}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button asChild size="sm" className="gap-1.5">
                        <Link href={`/projects/${project.slug}`}>
                          Project <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                      {project.githubUrl && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="gap-1.5"
                        >
                          <Link
                            href={project.githubUrl as Route}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <GithubDark className="h-3.5 w-3.5 text-muted-foreground" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </ItemReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
