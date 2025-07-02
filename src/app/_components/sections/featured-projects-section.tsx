import { Button } from "@/components/ui/button";
import { allFeaturedProjects } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

export function FeaturedProjectsSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="mb-16 flex flex-col items-baseline justify-between md:flex-row">
        <h2 className="heading-lg">Featured Projects</h2>
        <Link
          className="link-underline mt-4 text-lg text-muted-foreground md:mt-0"
          href="/projects"
        >
          View All Projects
        </Link>
      </div>

      <div className="grid gap-24">
        {allFeaturedProjects.map((project, index) => (
          <div className="group" key={project.slug}>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <span className="font-bold text-8xl text-muted/30 transition-colors group-hover:text-muted">
                  0{index + 1}
                </span>
                <h3 className="-mt-8 mb-6 font-bold text-4xl transition-transform group-hover:translate-y-1">
                  {project.title}
                </h3>
                <p className="mb-8 text-muted-foreground text-xl">{project.description}</p>
                <Button asChild size="lg" variant="outline">
                  <Link href={`/projects/${project.slug}`}>View Project</Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted transition-transform duration-500 group-hover:scale-105">
                  <Image
                    alt={project.title}
                    className="h-full w-full object-cover"
                    height={270}
                    src={project.featuredImage}
                    width={480}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
