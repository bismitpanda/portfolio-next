import { Button } from "@/components/ui/button";
import { allFeaturedProjects } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

export function FeaturedProjectsSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
        <h2 className="heading-lg">Featured Projects</h2>
        <Link
          href="/projects"
          className="link-underline text-lg text-muted-foreground mt-4 md:mt-0"
        >
          View All Projects
        </Link>
      </div>

      <div className="grid gap-24">
        {allFeaturedProjects.map((project, index) => (
          <div key={project.slug} className="group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-8xl font-bold text-muted/30 group-hover:text-muted transition-colors">
                  0{index + 1}
                </span>
                <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-y-1 transition-transform">
                  {project.title}
                </h3>
                <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/projects/${project.slug}`}>View Project</Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    width={480}
                    height={270}
                    className="w-full h-full object-cover"
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
