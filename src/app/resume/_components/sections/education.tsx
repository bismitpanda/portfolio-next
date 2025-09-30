import { Text, View } from "@react-pdf/renderer";
import { formatDate } from "date-fns";
import type { Education } from "@/lib/content";
import { styles } from "../styles";

export function EducationSection({ education }: { education: Education[] }) {
  return (
    <View
      style={styles.section}
      // @ts-expect-error: Why the error?
      bookmark="Education"
    >
      <Text style={styles.sectionTitle}>Education</Text>
      {education.map((edu, index) => (
        <View
          key={`${index}-${edu.institution}-${edu.title}`}
          style={styles.entryContainer}
        >
          <View style={styles.entryHeader}>
            <View style={styles.educationHeader}>
              <Text style={styles.entryTitle}>{edu.title}</Text>
              <Text style={styles.educationResults}>
                (
                {edu.results
                  .map((result) => `${result.name}: ${result.score}`)
                  .join(", ")}
                )
              </Text>
            </View>
            <Text style={styles.entryDate}>
              {formatDate(edu.startDate, "MMM yyyy")} -{" "}
              {edu.endDate ? formatDate(edu.endDate, "MMM yyyy") : "Present"}
            </Text>
          </View>
          <View style={styles.educationDetails}>
            <View style={styles.educationItem}>
              <Text>{edu.institution}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
