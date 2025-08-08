"use client";

import { RotatingText } from "../rotating-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            <p className="mb-2 font-medium text-lg text-muted-foreground">Hello, I&apos;m</p>
            <h1 className="heading-xl mb-4">Bismit Panda</h1>
            <RotatingText
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              initial={{ y: "100%" }}
              mainClassName="text-xl md:text-2xl text-muted-foreground font-mono"
              rotationInterval={5000}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              staggerDuration={0.025}
              staggerFrom={"last"}
              texts={roles}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </div>
          <p className="body-lg max-w-md text-muted-foreground">
            I create beautiful, functional websites and applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="px-8 text-lg" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild className="px-8 text-lg" size="lg" variant="outline">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
        <div className="z-50 aspect-square overflow-hidden rounded-2xl border border-border bg-muted size-full">
          <img alt="Bismit Panda" className="h-full w-full object-cover" src="/images/photo.png" />
        </div>
      </div>
    </section>
  );
}
