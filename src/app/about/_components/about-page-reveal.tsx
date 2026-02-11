"use client";

import { Children } from "react";
import { ItemReveal } from "@/components/motion/section-reveal";

const SECTION_KEYS = [
  "about-hero",
  "about-skills",
  "about-experience",
  "about-education",
  "about-achievements",
  "about-certifications",
  "about-cta",
] as const;

export function AboutPageReveal({ children }: { children: React.ReactNode }) {
  return (
    <>
      {Children.map(children, (child, index) => (
        <ItemReveal
          key={SECTION_KEYS[index] ?? `section-${index}`}
          delay={index * 0.06}
        >
          {child}
        </ItemReveal>
      ))}
    </>
  );
}
