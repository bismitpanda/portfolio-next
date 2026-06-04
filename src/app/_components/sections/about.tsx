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
            Software engineer with 1.5+ years of professional experience
            shipping production web applications and AI-integrated systems.
            I&apos;ve built and deployed 10+ full-stack products across
            immigration, hiring, legal, and SaaS as a sole developer.
          </p>
          <p className="body-lg mb-6">
            I&apos;m Co-Founder and CTO of AstraQ Cyber Defence, an AI-powered
            cybersecurity startup, and I reach for Rust and Go for
            performance-critical work.
          </p>
          <p className="body-lg mb-10">
            I write about modern web development on this site and share code
            snippets from the systems I build.
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
