import { AboutSection } from "./_components/sections/about-section";
import { FeaturedProjectsSection } from "./_components/sections/featured-projects-section";
import { GetInTouchSection } from "./_components/sections/get-in-touch-section";
import { HeroSection } from "./_components/sections/hero-section";
import { RecentBlogsSection } from "./_components/sections/recent-blogs-section";
import { SkillsMarquee } from "./_components/skills-marquee";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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
        <Link className="animate-bounce" href="#about">
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
