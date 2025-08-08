"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="heading-xl mb-6">About Me</h1>
        <p className="body-lg text-muted-foreground">
          Full Stack Developer with a passion for creating beautiful, functional, and accessible web
          experiences.
        </p>
      </div>

      <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
        <div className="z-50 aspect-square overflow-hidden rounded-2xl border border-border bg-muted size-full">
          <img alt="Bismit Panda" className="h-full w-full object-cover" src="/images/photo.png" />
        </div>
        <div className="z-10 space-y-6">
          <p className="body-lg">
            I&apos;m a passionate developer with over 5 years of experience building web
            applications. I specialize in React, Next.js, and Node.js, creating responsive and
            accessible websites.
          </p>
          <p className="body-lg">
            When I&apos;m not coding, you can find me hiking, reading, or experimenting with new
            technologies. I believe in clean, minimal design that puts the focus on content and user
            experience.
          </p>
          <p className="body-lg">
            I also regularly share code snippets and write blog posts about modern web technologies
            to help other developers level up their skills.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/blog">Read My Blog</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/snippets">View Snippets</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
