"use client";

import type { Route } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/motion/section-reveal";
import { socialRoutes } from "../routes";

export function GetInTouchSection() {
  return (
    <SectionReveal className="container-custom section-spacing" id="contact">
      <h2 className="heading-lg mb-16">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto max-w-2xl">
          <p className="mb-10 text-2xl leading-relaxed">
            If you&apos;re hiring or want to talk about something on this site,
            message me on any of these.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6">
          {socialRoutes.map(({ title, url, icon: Icon, label }) => (
            <Link
              aria-label={title}
              className="group flex items-center gap-4 text-muted-foreground text-xl transition-[color,transform] duration-200 hover:text-foreground active:scale-[0.98]"
              href={url as Route}
              rel="nofollow noopener noreferrer"
              target="_blank"
              key={title}
            >
              <Icon className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
              <span className="link-underline">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
