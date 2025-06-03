import { styles } from "../styles";
import type { Education } from "@/lib/content";
import { Text, View } from "@react-pdf/renderer";
import { formatDate } from "date-fns";

export function EducationSection({ education }: { education: Education[] }) {
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
