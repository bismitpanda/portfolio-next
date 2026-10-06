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
          I build security, AI, and web products, usually from the
          infrastructure up to the interface.
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
            I&apos;m Co-Founder and CTO at AstraQ Cyber Defence. I designed
            Athena, our Kubernetes-based CTF platform, and lead engineering on
            Morpheus, Phoebe, Athena LMS, and Metis Mail. Most of that is Rust,
            Go, and TypeScript.
          </p>
          <p className="body-lg">
            I&apos;m also the sole developer at OpenVenture (formerly Greencard
            Inc.). I&apos;ve shipped 10+ live Next.js products there for
            immigration, hiring, admissions, and investment, several with LLM
            and RAG features.
          </p>
          <p className="body-lg">
            I have a B.Tech in Computer Science and Engineering (Cybersecurity)
            from Rashtriya Raksha University. Longer write-ups go on the blog,
            and short pieces of code I reuse go under snippets.
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
