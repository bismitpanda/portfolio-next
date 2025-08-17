import { Document, Page } from "@react-pdf/renderer";
import { user } from "@/lib/constants";
import { AboutMeSection } from "./sections/about-me-section";
import { AchievementsSection } from "./sections/achievements-section";
import { CertificationsSection } from "./sections/certifications-section";
import { EducationSection } from "./sections/education-section";
import { ExperienceSection } from "./sections/experience-section";
import { HeaderSection } from "./sections/header-section";
import { ProjectsSection } from "./sections/projects-section";
import { TechnologiesSection } from "./sections/technologies-section";
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
