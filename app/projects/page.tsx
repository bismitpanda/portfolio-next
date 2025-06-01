import { Button } from "@/components/ui/button";
import { allGithubProjects, allHostedProjects } from "@/lib/content";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Projects</h1>
          <p className="body-lg text-muted-foreground">
            A showcase of my work, featuring web applications, design projects, and experiments.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="heading-lg mb-10 relative">Web Projects</h2>

          <div className="grid gap-16 md:gap-24">
            {allHostedProjects.map((project, index) => (
              <div key={project.slug} className="group">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <span className="text-8xl font-bold text-muted/30 group-hover:text-muted transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-y-1 transition-transform">
                      {project.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button asChild variant="outline" size="lg">
                      <Link href={`/projects/${project.slug}`}>View Project</Link>
                    </Button>
                  </div>
                  <div
                    className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500 block"
                    >
                      <Image
                        src={project.featuredImage}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="heading-lg mb-10 relative">Other Projects</h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
            These projects focus on computer science fundamentals and systems programming.
            They&apos;re available on GitHub for code review and educational purposes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allGithubProjects.map((project) => (
              <div
                key={project.slug}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="aspect-video bg-muted overflow-hidden transition-transform group-hover:scale-102 duration-300 block"
                    >
                      <Image
                        src={project.featuredImage}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
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
                  <div className="p-6 flex flex-row justify-between items-center">
                    <Button asChild variant="outline" className="gap-2">
                      <Link href={`/projects/${project.slug}`}>
                        View Project <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="gap-2">
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 text-muted-foreground" />
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
