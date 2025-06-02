"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="heading-xl mb-6">About Me</h1>
        <p className="body-lg text-muted-foreground">
          Full Stack Developer with a passion for creating beautiful, functional, and accessible web
          experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative">
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50"
            animate={{
              y: [10, -10],
              x: [5, 0, -10],
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-60 h-60 bg-muted rounded-full opacity-50 hidden md:block"
            animate={{
              y: [-10, 10],
              x: [0, 10, 0, -5],
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
          <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
            <Image
              src="/placeholder.png"
              alt="Bismit Panda"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-6 z-10">
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
            <Button asChild variant="outline" size="lg">
              <Link href="/snippets">View Snippets</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
