import { Text, View } from "@react-pdf/renderer";
import { addMonths, formatDate } from "date-fns";
import type { Achievement, Certification } from "@/lib/content";
import { styles } from "../styles";

export function HonorsSection({
  achievements,
  certifications,
}: {
  achievements: Achievement[];
  certifications: Certification[];
}) {
  return (
    <View
      style={styles.section}
      // @ts-expect-error: Why the error?
      bookmark="Achievements & Certifications"
    >
      <Text style={styles.sectionTitle}>Achievements & Certifications</Text>
      <View style={styles.highlightsList}>
        {achievements.map((achievement) => (
          <View key={achievement.title} style={styles.highlight}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.highlightText}>{achievement.title}</Text>
          </View>
        ))}
        {certifications.map((cert) => (
          <View key={cert.title} style={styles.highlight}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.highlightText}>
              {cert.title}, {cert.provider}
              {cert.validity
                ? ` | ${formatDate(cert.date, "yyyy")}–${formatDate(addMonths(cert.date, cert.validity), "yyyy")}`
                : ` | ${formatDate(cert.date, "yyyy")}`}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
