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
            I&apos;m Co-Founder and CTO of AstraQ Cyber Defence. I designed
            Athena, our CTF platform, which ran Athena CTF 2026 for 1,200+
            players. I also lead work on Morpheus for malware analysis, Phoebe
            for search over company data, Athena LMS, and the Metis mail client.
          </p>
          <p className="body-lg mb-6">
            Separately, I&apos;m the only developer at OpenVenture (formerly
            Greencard Inc.), where I&apos;ve shipped 10+ production apps for
            immigration, hiring, admissions, PR, and EB-5 financing.
          </p>
          <p className="body-lg mb-10">
            Most of my backend work is in Rust and Go. I write about some of it
            here.
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
