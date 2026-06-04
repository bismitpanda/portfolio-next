import { Document, Page } from "@react-pdf/renderer";
import { user } from "@/lib/constants";
import { AboutMeSection } from "./sections/about-me";
import { EducationSection } from "./sections/education";
import { ExperienceSection } from "./sections/experience";
import { HeaderSection } from "./sections/header";
import { HonorsSection } from "./sections/honors";
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
        <ExperienceSection experience={user.experience} />
        <TechnologiesSection technologies={user.technologies} />
        <ProjectsSection projects={user.projects} />
        <EducationSection education={user.education} />
        <HonorsSection
          achievements={user.achievements}
          certifications={user.certifications}
        />
      </Page>
    </Document>
  );
}
