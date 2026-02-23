"use client";

import { ExternalLink } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GithubDark } from "@/components/icons";
import { ItemReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["frontend", "full-stack", "systems"] as const;
const HEADER_OFFSET = 80;

type ProjectsContentProps = {
  frontend: Project[];
  fullStack: Project[];
  systems: Project[];
};

export function ProjectsContent({
  frontend,
  fullStack,
  systems,
}: ProjectsContentProps) {
  const [activeId, setActiveId] = useState<string | null>(SECTION_IDS[0]);

  useEffect(() => {
    const visibility = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!SECTION_IDS.includes(id as (typeof SECTION_IDS)[number])) continue;
          visibility.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        const visible = [...visibility.entries()]
          .filter(([, r]) => r > 0)
          .sort((a, b) => b[1] - a[1]);
        if (visible[0]) setActiveId(visible[0][0]);
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`,
        threshold: [0, 0.1, 0.5, 1],
      },
    );
    const a = document.getElementById("frontend");
    const b = document.getElementById("full-stack");
    const c = document.getElementById("systems");
    if (a) observer.observe(a);
    if (b) observer.observe(b);
    if (c) observer.observe(c);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="relative mx-auto mb-10 max-w-3xl text-center">
          <h1 className="heading-xl mb-6">Projects</h1>
          <p className="body-lg text-muted-foreground">
            A showcase across frontend design, full-stack products, and systems
            programming.
          </p>
        </div>
        <nav
          className="sticky top-24 z-40 mx-auto mb-20 flex w-fit flex-wrap items-center justify-center gap-1 rounded-full border border-border bg-background/90 px-2 py-1.5 backdrop-blur-md"
          aria-label="Jump to section"
        >
            <Link
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                activeId === "frontend"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground",
              )}
              href="#frontend"
            >
              Frontend
            </Link>
            <Link
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                activeId === "full-stack"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground",
              )}
              href="#full-stack"
            >
              Full-Stack
            </Link>
            <Link
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                activeId === "systems"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground",
              )}
              href="#systems"
            >
              Systems
            </Link>
        </nav>

        <div className="mb-28" id="frontend">
          <h2 className="heading-lg mb-12">Frontend &amp; Landing Pages</h2>

          <div className="grid gap-10 md:grid-cols-2">
            {frontend.map((project, index) => (
              <ItemReveal key={project.slug} delay={index * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative block aspect-4/3 overflow-hidden rounded-2xl bg-muted transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
                >
                  <Image
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                    src={project.featuredImage}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
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
                </Link>
              </ItemReveal>
            ))}
          </div>
        </div>

        <div className="mb-28" id="full-stack">
          <h2 className="heading-lg mb-12">Full-Stack Applications</h2>

          <div className="grid gap-20 md:gap-28">
            {fullStack.map((project, index) => (
              <ItemReveal key={project.slug} delay={index * 0.1}>
                <div className="group">
                  <div
                    className={cn(
                      "grid items-center gap-14 md:grid-cols-2",
                      index % 2 === 1 && "md:grid-flow-dense",
                    )}
                  >
                    <div className="relative pl-6 md:pl-8">
                      <span
                        className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-transparent via-border to-transparent"
                        aria-hidden
                      />
                      <span className="font-mono text-6xl font-bold text-muted-foreground/25 transition-colors group-hover:text-muted-foreground/45">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <h2 className="-mt-4 mb-5 font-serif text-3xl font-bold tracking-tight md:text-4xl">
                        {project.title}
                      </h2>
                      <p className="mb-6 text-muted-foreground text-lg leading-relaxed line-clamp-3">
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
                          View Live App
                        </Link>
                      </Button>
                    </div>
                    <div
                      className={cn(
                        "overflow-hidden rounded-2xl",
                        index % 2 === 1 && "md:-order-1",
                      )}
                    >
                      <Link
                        className="block overflow-hidden rounded-2xl bg-muted shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]"
                        href={`/projects/${project.slug}`}
                      >
                        <div className="aspect-video overflow-hidden">
                          <Image
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            height={600}
                            src={project.featuredImage}
                            width={800}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
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
                <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-border/80 hover:shadow-lg">
                  <Link
                    className="relative block aspect-16/10 shrink-0 overflow-hidden bg-muted"
                    href={`/projects/${project.slug}`}
                  >
                    <Image
                      alt={project.title}
                      className="h-full w-full object-cover opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                      height={240}
                      src={project.featuredImage}
                      width={400}
                    />
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
