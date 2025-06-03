import { styles } from "../styles";
import type { Experience } from "@/lib/content";
import { Text, View } from "@react-pdf/renderer";
import { formatDate } from "date-fns";

export function ExperienceSection({ experience }: { experience: Experience[] }) {
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
