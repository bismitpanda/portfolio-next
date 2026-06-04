"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="heading-xl mb-6">About Me</h1>
        <p className="body-lg text-muted-foreground">
          Software engineer shipping production full-stack and AI-integrated
          systems, from immigration and hiring platforms to cybersecurity
          products.
        </p>
      </div>

      <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
        <div className="relative aspect-square size-full overflow-hidden rounded-4xl border border-border bg-muted">
          <Image
            alt="Bismit Panda"
            className="size-full object-cover aspect-square"
            src="/images/photo.png"
            fill
            priority
            fetchPriority="high"
          />
        </div>
        <div className="space-y-6">
          <p className="body-lg">
            I build and ship production web applications end to end, mostly in
            Next.js and TypeScript, often with LLM and RAG integrations. As sole
            developer at OpenVenture (formerly Greencard Inc.), I&apos;ve
            delivered 10+ live products across immigration, hiring, admissions,
            and investment.
          </p>
          <p className="body-lg">
            As Co-Founder and CTO at AstraQ Cyber Defence, I architect security
            training and platform products including Athena CTF, Athena LMS,
            Phoebe, and Metis. I also write Rust and Go when performance
            matters.
          </p>
          <p className="body-lg">
            I graduated with a B.Tech in Computer Science and Engineering
            (Cybersecurity) from Rashtriya Raksha University and share what I
            learn through blog posts and snippets on this site.
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
