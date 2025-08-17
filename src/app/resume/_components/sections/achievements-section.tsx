import { Text, View } from "@react-pdf/renderer";
import { formatDate } from "date-fns";
import type { Achievement } from "@/lib/content";
import { styles } from "../styles";

export function AchievementsSection({
  achievements,
}: {
  achievements: Achievement[];
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Achievements</Text>
      {achievements.map((achievement, index) => (
        <View key={index} style={styles.entryContainer}>
          <View style={styles.achievementHeader}>
            <Text style={styles.achievementTitle}>{achievement.title}</Text>
            <Text style={styles.achievementDate}>
              {formatDate(achievement.date, "MMM yyyy")}
            </Text>
          </View>
          {achievement.organization && (
            <Text style={styles.achievementOrg}>
              {achievement.organization}
            </Text>
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
