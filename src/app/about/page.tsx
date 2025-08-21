import type { Metadata } from "next";
import { AchievementsSection } from "./_components/sections/achievements";
import { CertificationsSection } from "./_components/sections/certifications";
import { EducationSection } from "./_components/sections/education";
import { ExperienceSection } from "./_components/sections/experience";
import { HeroSection } from "./_components/sections/hero";
import { SkillsSection } from "./_components/sections/skills";

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
