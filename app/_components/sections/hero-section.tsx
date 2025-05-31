"use client";

import { RotatingText } from "@/components/rotating-text";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const roles = [
  "Full Stack Developer",
  "Cyber Security Enthusiast",
  "Systems Engineer",
  "DevOps Engineer",
];

export function HeroSection() {
  return (
    <section className="container-custom section-spacing flex flex-col justify-between min-h-[90vh]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <p className="text-muted-foreground text-lg mb-2 font-medium">Hello, I&apos;m</p>
            <h1 className="heading-xl mb-4">Bismit Panda</h1>
            <RotatingText
              texts={roles}
              mainClassName="text-xl md:text-2xl text-muted-foreground font-mono"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          </div>
          <p className="body-lg text-muted-foreground max-w-md">
            I create beautiful, functional websites and applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
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
      </div>
      <div className="flex justify-center mt-16">
        <Link href="#about" className="animate-bounce">
          <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
        </Link>
      </div>
    </section>
  );
}
