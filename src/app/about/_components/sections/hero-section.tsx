"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
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
        <div className="relative">
          <motion.div
            animate={{
              y: [10, -10],
              x: [5, 0, -10],
              transition: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
            className="-top-10 -left-10 absolute h-40 w-40 rounded-full bg-muted opacity-50"
          />
          <motion.div
            animate={{
              y: [-10, 10],
              x: [0, 10, 0, -5],
              transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
            className="-bottom-20 -right-20 absolute hidden h-60 w-60 rounded-full bg-muted opacity-50 md:block"
          />
          <div className="relative z-10 aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              alt="Bismit Panda"
              className="h-full w-full object-cover"
              height={600}
              src="/placeholder.png"
              width={600}
            />
          </div>
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
