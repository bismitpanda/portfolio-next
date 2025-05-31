import { Article } from "@/components/article";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { allProjectsByDate, allPublishedBlogsByDate } from "@/content";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing flex flex-col justify-between min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-lg mb-2 font-medium">Hello, I&apos;m</p>
              <h1 className="heading-xl mb-4">Bismit Panda</h1>
              <h2 className="heading-md text-muted-foreground">Full Stack Developer</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
              I create beautiful, functional websites and applications with a focus on typography
              and user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-muted rounded-full opacity-50 hidden md:block"></div>
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
              <Image
                src="/placeholder.png"
                alt="Bismit Panda"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Link href="#about" className="animate-bounce">
            <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
          </Link>
        </div>
      </section>

      <section id="about" className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6">About</h2>
          </div>
          <div className="md:col-span-2">
            <p className="body-lg mb-6">
              I&apos;m a passionate developer with over 5 years of experience building web
              applications. I specialize in React, Next.js, and Node.js, creating responsive and
              accessible websites.
            </p>
            <p className="body-lg mb-6">
              When I&apos;m not coding, you can find me hiking, reading, or experimenting with new
              technologies. I believe in clean, minimal design that puts the focus on content and
              user experience.
            </p>
            <p className="body-lg mb-10">
              I also regularly share code snippets and write blog posts about modern web
              technologies to help other developers level up their skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read My Blog</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/snippets">View Snippets</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
          {allProjectsByDate.slice(0, 3).map((project, index) => (
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

      <section className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6">Skills</h2>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-y-8 gap-x-16">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "GraphQL",
                "MongoDB",
                "AWS",
              ].map((skill, index) => (
                <div key={skill} className="border-b border-border pb-2 group">
                  <div className="flex items-baseline">
                    <span className="text-sm text-muted-foreground mr-4 group-hover:text-foreground transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-2xl group-hover:translate-x-2 transition-transform">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg">Recent Articles</h2>
          <Link href="/blog" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Articles
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPublishedBlogsByDate.slice(0, 3).map((post) => (
            <Article key={post.slug} blog={post} />
          ))}
        </div>
      </section>

      <section id="contact" className="container-custom section-spacing">
        <h2 className="heading-lg mb-16 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl leading-relaxed mb-10">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-6">
              <Link
                href="mailto:contact@bismitpanda.com"
                className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
              >
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">contact@bismitpanda.com</span>
              </Link>
              <Link
                href="https://linkedin.com/in/bismit-panda-5432a824a"
                className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">linkedin.com/in/bismit-panda-5432a824a</span>
              </Link>
              <Link
                href="https://github.com/bismitpanda"
                className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">github.com/bismitpanda</span>
              </Link>
              <Link
                href="https://x.com/bismitpanda"
                className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
              >
                <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">x.com/bismitpanda</span>
              </Link>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
