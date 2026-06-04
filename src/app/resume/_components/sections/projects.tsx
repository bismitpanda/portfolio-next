import { Text, View } from "@react-pdf/renderer";
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
        <View key={project.slug} style={styles.projectEntry}>
          <Text style={styles.projectLine}>
            <Text style={styles.projectTitleInline}>{project.title}</Text>
            {": "}
            {project.resumeSummary}
          </Text>
        </View>
      ))}
    </View>
  );
}
