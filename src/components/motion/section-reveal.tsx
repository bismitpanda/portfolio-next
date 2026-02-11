"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentPropsWithoutRef } from "react";

const defaultTransition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
} as const;

const reducedTransition = {
  duration: 0.2,
} as const;

const defaultViewport = {
  once: true,
  margin: "-40px 0px -40px 0px",
  amount: 0.2,
} as const;

type SectionRevealProps = ComponentPropsWithoutRef<typeof motion.section> & {
  stagger?: boolean;
  staggerDelay?: number;
};

export function SectionReveal({
  children,
  stagger = false,
  staggerDelay = 0.06,
  ...props
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const reduce = Boolean(shouldReduceMotion);

  return (
    <motion.section
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={
        reduce
          ? reducedTransition
          : stagger
            ? {
                ...defaultTransition,
                delayChildren: 0.1,
                staggerChildren: staggerDelay,
              }
            : defaultTransition
      }
      {...props}
    >
      {children}
    </motion.section>
  );
}

type ItemRevealProps = ComponentPropsWithoutRef<typeof motion.div> & {
  delay?: number;
};

export function ItemReveal({ children, delay = 0, ...props }: ItemRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const reduce = Boolean(shouldReduceMotion);

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px 0px", amount: 0.1 }}
      transition={reduce ? reducedTransition : { ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
