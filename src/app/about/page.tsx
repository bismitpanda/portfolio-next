import type { Metadata } from "next";
import { AchievementsSection } from "./_components/sections/achievements-section";
import { CertificationsSection } from "./_components/sections/certifications-section";
import { EducationSection } from "./_components/sections/education-section";
import { ExperienceSection } from "./_components/sections/experience-section";
import { HeroSection } from "./_components/sections/hero-section";
import { SkillsSection } from "./_components/sections/skills-section";

export const metadata: Metadata = {
  title: "About | Bismit Panda",
  description: "About Bismit Panda",
};

export default function Page() {
  return (
    <div className="pt-20">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <CertificationsSection />
    </div>
  );
}
