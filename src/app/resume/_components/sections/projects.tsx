import { Link, Text, View } from "@react-pdf/renderer";
import type { Project } from "@/lib/content";
import { styles } from "../styles";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <View
      style={styles.section}
      // @ts-expect-error: Why the error?
      bookmark="Projects"
    >
      <Text style={styles.sectionTitle}>Projects</Text>
      {projects.map((project) => (
        <View key={project.slug} style={styles.entryContainer}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectTitle}>{project.title}</Text>
            {project.liveUrl && (
              <Link src={project.liveUrl} style={styles.projectUrl}>
                <Text>{project.liveUrl}</Text>
              </Link>
            )}
          </View>
          <View style={styles.toolsSection}>
            <Text style={styles.toolsLabel}>Technologies Used: </Text>
            <Text>{project.technologies.join(", ")}</Text>
          </View>
          <View style={styles.highlightsList}>
            {project.description
              .split(".")
              .slice(0, -1)
              .map((highlight, index) => (
                <View key={`${index}-${highlight}`} style={styles.highlight}>
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
