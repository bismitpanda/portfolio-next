import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { AboutSection } from "./_components/sections/about";
import { FeaturedProjectsSection } from "./_components/sections/featured-projects";
import { GetInTouchSection } from "./_components/sections/get-in-touch";
import { HeroSection } from "./_components/sections/hero";
import { RecentBlogsSection } from "./_components/sections/recent-blogs";
import { SkillsMarquee } from "./_components/skills-marquee";

export const metadata: Metadata = {
  title: "Home | Bismit Panda",
  description: "Home",
};

export default function Page() {
  return (
    <div className="pt-20">
      <HeroSection />
      <SkillsMarquee />
      <div className="mt-16 flex justify-center">
        <Link
          className="animate-bounce"
          href="#about"
          aria-label="Scroll to about"
        >
          <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
        </Link>
      </div>
      <AboutSection />
      <FeaturedProjectsSection />
      <RecentBlogsSection />
      <GetInTouchSection />
    </div>
  );
}
