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
            I ship production software across product engineering, AI systems,
            cybersecurity, and infrastructure. As Co-Founder and CTO of AstraQ
            Cyber Defence, I work on live platforms including CTF hosting, an
            LMS, an AI mail client, and document intelligence tooling.
          </p>
          <p className="body-lg mb-6">
            Before and alongside that, I&apos;ve delivered 10+ full-stack
            products for OpenVenture and Green Card Inc.—immigration, hiring,
            admissions, PR, and financing portals—often as the sole developer on
            each codebase.
          </p>
          <p className="body-lg mb-10">
            I reach for Rust and Go when performance and systems constraints
            matter, and I write about the work on this site.
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
