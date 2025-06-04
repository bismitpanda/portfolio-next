import { ProjectCarousel } from "./_components/project-carousel";
import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { allProjectsByDate } from "@/lib/content";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjectsByDate.find((project) => project.slug === slug);

  return {
    title: `${project?.title} | Bismit Panda's Projects`,
    description: project?.description,
  };
}

export async function generateStaticParams() {
  return allProjectsByDate.map((project) => ({ slug: project.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjectsByDate.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-6">
            {project.liveUrl && (
              <Button asChild size="lg" className="gap-2">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <span>View Live Site</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="h-4 w-4" />
                  <span>View Code</span>
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="mb-16">
          <div className="aspect-video rounded-lg overflow-hidden">
            <Image
              src={project.featuredImage}
              alt={project.title}
              width={1600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Project Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Client</h3>
                <p className="text-lg">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Year</h3>
                <p className="text-lg">{project.year}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Role</h3>
                <p className="text-lg">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Technologies</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
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
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-lg text-muted-foreground">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>

        {project.gallery.length > 0 && (
          <ProjectCarousel gallery={project.gallery} title={project.title} />
        )}
      </article>
    </div>
  );
}
