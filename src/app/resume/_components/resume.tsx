import { Document, Page } from "@react-pdf/renderer";
import { user } from "@/lib/constants";
import { AboutMeSection } from "./sections/about-me";
import { AchievementsSection } from "./sections/achievements";
import { CertificationsSection } from "./sections/certifications";
import { EducationSection } from "./sections/education";
import { ExperienceSection } from "./sections/experience";
import { HeaderSection } from "./sections/header";
import { ProjectsSection } from "./sections/projects";
import { TechnologiesSection } from "./sections/technologies";
import { styles } from "./styles";

export function Resume() {
  return (
    <Document
      author="Bismit Panda"
      subject="Resume"
      title="Bismit Panda's Resume"
    >
      <Page size="LETTER" style={styles.page}>
        <HeaderSection data={user} />
        <AboutMeSection content={user.about} />
        <ProjectsSection projects={user.projects} />
        <ExperienceSection experience={user.experience} />
        <TechnologiesSection technologies={user.technologies} />
        <EducationSection education={user.education} />
        <AchievementsSection achievements={user.achievements} />
        <CertificationsSection certifications={user.certifications} />
      </Page>
    </Document>
  );
}
