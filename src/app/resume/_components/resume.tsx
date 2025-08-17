import { Document, Page } from "@react-pdf/renderer";
import { resumeData } from "@/lib/resume-data";
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
        <HeaderSection data={resumeData.personalInfo} />
        <AboutMeSection content={resumeData.aboutMe} />
        <ProjectsSection projects={resumeData.projects} />
        <ExperienceSection experience={resumeData.experience} />
        <TechnologiesSection technologies={resumeData.technologies} />
        <EducationSection education={resumeData.education} />
        <AchievementsSection achievements={resumeData.achievements} />
        <CertificationsSection certifications={resumeData.certifications} />
      </Page>
    </Document>
  );
}
