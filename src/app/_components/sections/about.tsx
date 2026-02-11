"use client";

import Link from "next/link";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <SectionReveal className="container-custom section-spacing" id="about">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <h2 className="heading-lg mb-6">About</h2>
        </div>
        <div className="md:col-span-2">
          <p className="body-lg mb-6">
            I&apos;m a passionate developer with over 5 years of experience
            building web applications. I specialize in React, Next.js, and
            Node.js, creating responsive and accessible websites.
          </p>
          <p className="body-lg mb-6">
            When I&apos;m not coding, you can find me biking, reading, or
            experimenting with new technologies.
          </p>
          <p className="body-lg mb-10">
            I also regularly share code snippets and write blog posts about
            modern web technologies to help other developers level up their
            skills.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/about">Full Background</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">Read My Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
