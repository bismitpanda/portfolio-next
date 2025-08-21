"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextLoop } from "@/components/ui/text-loop";

const roles = [
  "Full Stack Developer",
  "Cyber Security Enthusiast",
  "Systems Engineer",
  "DevOps Engineer",
];

export function HeroSection() {
  return (
    <section className="container-custom section-spacing flex flex-col justify-between">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <p className="mb-2 font-medium text-lg text-muted-foreground">
              Hello, I&apos;m
            </p>
            <h1 className="heading-xl mb-4">Bismit Panda</h1>
            <TextLoop className="font-mono text-muted-foreground text-xl md:text-2xl">
              {roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </TextLoop>
          </div>
          <p className="body-lg max-w-md text-muted-foreground">
            I create beautiful, functional websites and applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="px-8 text-lg" size="lg">
              <Link href="/about">More About Me</Link>
            </Button>
            <Button
              asChild
              className="px-8 text-lg"
              size="lg"
              variant="outline"
            >
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
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
      </div>
    </section>
  );
}
