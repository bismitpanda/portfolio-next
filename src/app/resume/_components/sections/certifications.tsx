import { Text, View } from "@react-pdf/renderer";
import { addMonths, formatDate } from "date-fns";
import type { Certification } from "@/lib/content";
import { styles } from "../styles";

export function CertificationsSection({
  certifications,
}: {
  certifications: Certification[];
}) {
  return (
    <View
      style={styles.section}
      // @ts-expect-error: Why the error?
      bookmark="Certifications"
    >
      <Text style={styles.sectionTitle}>Certifications</Text>
      {certifications.map((cert, index) => (
        <View
          key={`${index}-${cert.title}-${cert.provider}`}
          style={styles.entryContainer}
        >
          <View style={styles.achievementHeader}>
            <Text style={styles.achievementTitle}>
              {cert.title}, Certification by {cert.provider}
            </Text>
            <Text style={styles.achievementDate}>
              {formatDate(cert.date, "MMM yyyy")}
              {cert.validity &&
                ` - ${formatDate(addMonths(cert.date, cert.validity), "MMM yyyy")}`}
            </Text>
          </View>
          <View style={styles.highlightsList}>
            {cert.description.map((highlight, index) => (
              <View key={`${index}-${highlight}`} style={styles.highlight}>
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
