import type { Metadata } from "next";
import { AboutSection } from "./_components/sections/about";
import { FeaturedProjectsSection } from "./_components/sections/featured-projects";
import { GetInTouchSection } from "./_components/sections/get-in-touch";
import { HeroSection } from "./_components/sections/hero";
import { RecentBlogsSection } from "./_components/sections/recent-blogs";
import { ScrollToAbout } from "./_components/sections/scroll-to-about";
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
      <ScrollToAbout />
      <AboutSection />
      <FeaturedProjectsSection />
      <RecentBlogsSection />
      <GetInTouchSection />
    </div>
  );
}
