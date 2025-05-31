import { AboutSection } from "./_components/sections/about-section";
import { ContactSection } from "./_components/sections/contact-section";
import { ExperienceSection } from "./_components/sections/experience-section";
import { FeaturedProjectsSection } from "./_components/sections/featured-projects-section";
import { HeroSection } from "./_components/sections/hero-section";
import { RecentBlogsSection } from "./_components/sections/recent-blogs-section";
import { SkillsSection } from "./_components/sections/skills-section";

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <RecentBlogsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
