import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GithubDark } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { allProjectsByDate } from "@/lib/content";
import { ProjectCarousel } from "./_components/project-carousel";

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = allProjectsByDate.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Bismit Panda's Projects",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: `${project.title} | Bismit Panda's Projects`,
    description: project.description,
    keywords: project.technologies && [
      ...project.technologies,
      "projects",
      "bismit panda",
      "bismit",
    ],
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://bismit.com/projects/${project.slug}`,
      images: [project.featuredImage],
    },
  };
}

export async function generateStaticParams() {
  return allProjectsByDate.map((project) => ({ slug: project.slug }));
}

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = allProjectsByDate.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        <div className="mb-10">
          <Button asChild className="group" variant="ghost">
            <Link className="flex items-center gap-2" href="/projects">
              <ArrowLeft className="group-hover:-translate-x-1 h-4 w-4 transition-transform" />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>

        <div className="mx-auto mb-12 max-w-3xl">
          <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mb-8 text-muted-foreground text-xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-6">
            {project.liveUrl && (
              <Button asChild className="gap-2" size="lg">
                <Link
                  href={project.liveUrl as Route}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>View Live Site</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild className="gap-2" size="lg" variant="outline">
                <Link
                  href={project.githubUrl as Route}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GithubDark className="h-4 w-4" />
                  <span>View Code</span>
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="mb-16">
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              alt={project.title}
              className="h-full w-full object-cover"
              height={800}
              src={project.featuredImage}
              blurDataURL={project.blurredFeaturedImage}
              width={1600}
              priority
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="mb-16 grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="mb-6 font-bold text-2xl">Project Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-muted-foreground text-sm uppercase">
                  Client
                </h3>
                <p className="text-lg">{project.client}</p>
              </div>
              <div>
                <h3 className="text-muted-foreground text-sm uppercase">
                  Year
                </h3>
                <p className="text-lg">{project.year}</p>
              </div>
              <div>
                <h3 className="text-muted-foreground text-sm uppercase">
                  Role
                </h3>
                <p className="text-lg">{project.role}</p>
              </div>
              <div>
                <h3 className="text-muted-foreground text-sm uppercase">
                  Technologies
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
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
          </div>

          <div className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 font-bold text-2xl">The Challenge</h2>
                <p className="text-lg text-muted-foreground">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2 className="mb-4 font-bold text-2xl">The Solution</h2>
                <p className="text-lg text-muted-foreground">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>

        {project.gallery.length > 0 && (
          <ProjectCarousel gallery={project.gallery} />
        )}
      </article>
    </div>
  );
}
