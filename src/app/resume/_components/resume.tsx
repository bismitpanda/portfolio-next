import { styles } from "./styles";
import type { Certification, Education, Experience, Project } from "@/lib/content";
import { resumeData, type ResumeData } from "@/lib/resume-data";
import { Document, Page, Text, View, Link } from "@react-pdf/renderer";
import { addMonths, formatDate } from "date-fns";

function HeaderSection({ data }: { data: ResumeData["personalInfo"] }) {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>{data.name}</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.contactItem}>{data.location}</Text>
        <Text style={styles.separator}>|</Text>
        <Link src={`mailto:${data.email}`} style={[styles.contactItem, styles.link]}>
          <Text>{data.email}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link src={`tel:${data.phone}`} style={[styles.contactItem, styles.link]}>
          <Text>{data.phone}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link src={data.linkedin} style={[styles.contactItem, styles.link]}>
          <Text>{data.linkedin}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link src={data.website} style={[styles.contactItem, styles.link]}>
          <Text>{data.website}</Text>
        </Link>
      </View>
    </View>
  );
}

function AboutMeSection({ content }: { content: string }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.paragraph}>{content}</Text>
    </View>
  );
}

function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Projects</Text>
      {projects.map((project, index) => (
        <View key={index} style={styles.entryContainer}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectTitle}>{project.title}</Text>
            {project.liveUrl && (
              <Link src={project.liveUrl} style={styles.projectUrl}>
                <Text>{project.liveUrl}</Text>
              </Link>
            )}
          </View>
          <View style={styles.highlightsList}>
            {project.description
              .split(".")
              .slice(0, -1)
              .map((highlight, highlightIndex) => (
                <View key={highlightIndex} style={styles.highlight}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.highlightText}>{highlight.trim()}.</Text>
                </View>
              ))}
          </View>
          <View style={styles.toolsSection}>
            <Text style={styles.toolsLabel}>Technologies Used: </Text>
            <Text>{project.technologies.join(", ")}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

function ExperienceSection({ experience }: { experience: Experience[] }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Experience</Text>
      {experience.map((exp, index) => (
        <View key={index} style={styles.entryContainer}>
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>
              {exp.title}, {exp.company}
            </Text>
            <Text style={styles.entryDate}>
              {formatDate(exp.startDate, "MMM yyyy")} -{" "}
              {exp.endDate ? formatDate(exp.endDate, "MMM yyyy") : "Present"}
            </Text>
          </View>
          <Text style={styles.paragraph}>{exp.description}</Text>
          <View style={styles.highlightsList}>
            {exp.highlights.map((highlight, highlightIndex) => (
              <View key={highlightIndex} style={styles.highlight}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.highlightText}>{highlight.trim()}.</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

function TechnologiesSection({ technologies }: { technologies: ResumeData["technologies"] }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Technologies</Text>
      <View style={styles.techRow}>
        <Text style={styles.techLabel}>Languages: </Text>
        <Text style={styles.techContent}>{technologies.languages}</Text>
      </View>
      <View style={styles.techRow}>
        <Text style={styles.techLabel}>Software and Frameworks: </Text>
        <Text style={styles.techContent}>{technologies.softwareAndFrameworks}</Text>
      </View>
    </View>
  );
}

function EducationSection({ education }: { education: Education[] }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Education</Text>
      {education.map((edu, index) => (
        <View key={index} style={styles.entryContainer}>
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>
              {edu.institution}, {edu.title}
            </Text>
            <Text style={styles.entryDate}>
              {formatDate(edu.startDate, "MMM yyyy")} -{" "}
              {edu.endDate ? formatDate(edu.endDate, "MMM yyyy") : "Present"}
            </Text>
          </View>
          <View style={styles.educationDetails}>
            <View style={styles.educationItem}>
              <Text>{edu.description}</Text>
            </View>
            {edu.achievements && (
              <View style={styles.educationItem}>
                <Text style={styles.educationLabel}>Achievements: </Text>
                <View style={styles.highlightsList}>
                  {edu.achievements.map((highlight, highlightIndex) => (
                    <View key={highlightIndex} style={styles.highlight}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.highlightText}>{highlight}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );
}

function AchievementsSection({ achievements }: { achievements: ResumeData["achievements"] }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Achievements</Text>
      {achievements.map((achievement, index) => (
        <View key={index} style={styles.entryContainer}>
          <View style={styles.achievementHeader}>
            <Text style={styles.achievementTitle}>{achievement.title}</Text>
            <Text style={styles.achievementDate}>{formatDate(achievement.date, "MMM yyyy")}</Text>
          </View>
          {achievement.organization && (
            <Text style={styles.achievementOrg}>{achievement.organization}</Text>
          )}
          <View style={styles.highlightsList}>
            {achievement.description.map((highlight, highlightIndex) => (
              <View key={highlightIndex} style={styles.highlight}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.highlightText}>{highlight}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

function CertificationsSection({ certifications }: { certifications: Certification[] }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Certifications</Text>
      {certifications.map((cert, index) => (
        <View key={index} style={styles.entryContainer}>
          <View style={styles.achievementHeader}>
            <Text style={styles.achievementTitle}>
              {cert.title}, Certification by {cert.provider}
            </Text>
            <Text style={styles.achievementDate}>
              {formatDate(cert.date, "MMM yyyy")}
              {cert.validity && ` - ${formatDate(addMonths(cert.date, cert.validity), "MMM yyyy")}`}
            </Text>
          </View>
          <View style={styles.highlightsList}>
            {cert.description.map((highlight, highlightIndex) => (
              <View key={highlightIndex} style={styles.highlight}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.highlightText}>{highlight}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

export function Resume() {
  return (
    <Document>
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
