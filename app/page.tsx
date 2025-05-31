import { AboutSection } from "./_components/sections/about-section";
import { ContactSection } from "./_components/sections/contact-section";
import { FeaturedProjectsSection } from "./_components/sections/featured-projects-section";
import { HeroSection } from "./_components/sections/hero-section";
import { RecentArticlesSection } from "./_components/sections/recent-articles-section";
import { SkillsSection } from "./_components/sections/skills-section";

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <RecentArticlesSection />
      <ContactSection />
    </div>
  );
}
