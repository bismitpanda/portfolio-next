"use client";

import { motion, useReducedMotion } from "motion/react";
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

const itemTransition = (reduce: boolean) =>
  reduce ? { duration: 0.2 } : { duration: 0.35, ease: "easeOut" as const };

const itemInitial = (reduce: boolean) =>
  reduce ? { opacity: 0 } : { opacity: 0, y: 10 };

const itemAnimate = (reduce: boolean) =>
  reduce ? { opacity: 1 } : { opacity: 1, y: 0 };

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const reduce = Boolean(shouldReduceMotion);

  return (
    <section className="container-custom section-spacing flex flex-col justify-between">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <motion.p
              className="mb-2 font-medium text-lg text-muted-foreground"
              initial={itemInitial(reduce)}
              animate={itemAnimate(reduce)}
              transition={{ ...itemTransition(reduce), delay: 0.05 }}
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              className="heading-xl mb-4"
              initial={itemInitial(reduce)}
              animate={itemAnimate(reduce)}
              transition={{ ...itemTransition(reduce), delay: 0.1 }}
            >
              Bismit Panda
            </motion.h1>
            <motion.div
              initial={itemInitial(reduce)}
              animate={itemAnimate(reduce)}
              transition={{ ...itemTransition(reduce), delay: 0.18 }}
            >
              <TextLoop className="font-mono text-muted-foreground text-xl md:text-2xl">
                {roles.map((role) => (
                  <span key={role}>{role}</span>
                ))}
              </TextLoop>
            </motion.div>
          </div>
          <motion.p
            className="body-lg max-w-md text-muted-foreground"
            initial={itemInitial(reduce)}
            animate={itemAnimate(reduce)}
            transition={{ ...itemTransition(reduce), delay: 0.26 }}
          >
            I create beautiful, functional websites and applications.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={itemInitial(reduce)}
            animate={itemAnimate(reduce)}
            transition={{ ...itemTransition(reduce), delay: 0.34 }}
          >
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
          </motion.div>
        </div>
        <motion.div
          className="relative aspect-square size-full overflow-hidden rounded-4xl border border-border bg-muted"
          initial={itemInitial(reduce)}
          animate={itemAnimate(reduce)}
          transition={{ ...itemTransition(reduce), delay: 0.2 }}
        >
          <Image
            alt="Bismit Panda"
            className="size-full object-cover aspect-square"
            src="/images/photo.png"
            fill
            priority
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}
