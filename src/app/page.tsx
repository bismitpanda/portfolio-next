import { AboutSection } from "./_components/sections/about-section";
import { FeaturedProjectsSection } from "./_components/sections/featured-projects-section";
import { GetInTouchSection } from "./_components/sections/get-in-touch-section";
import { HeroSection } from "./_components/sections/hero-section";
import { RecentBlogsSection } from "./_components/sections/recent-blogs-section";

export default function Page() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <RecentBlogsSection />
      <GetInTouchSection />
    </div>
  );
}
