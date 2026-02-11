"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function ScrollToAbout() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-16 flex justify-center">
      <Link
        href="#about"
        aria-label="Scroll to about"
        className="tap-target inline-block rounded-full transition-transform duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <motion.span
          className="inline-flex text-muted-foreground"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 6, 0],
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }
          }
        >
          <ArrowRight className="h-10 w-10 rotate-90" />
        </motion.span>
      </Link>
    </div>
  );
}
