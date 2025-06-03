import { styles } from "../styles";
import type { ResumeData } from "@/lib/resume-data";
import { Text, View } from "@react-pdf/renderer";

export function TechnologiesSection({
  technologies,
}: {
  technologies: ResumeData["technologies"];
}) {
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
