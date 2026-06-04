import { Text, View } from "@react-pdf/renderer";
import type { User } from "@/lib/constants";
import { styles } from "../styles";

const skillCategories: {
  label: string;
  key: keyof User["technologies"];
}[] = [
  { label: "Languages", key: "languages" },
  { label: "Frontend", key: "frontend" },
  { label: "Backend", key: "backend" },
  { label: "Databases", key: "databases" },
  { label: "Infrastructure", key: "infrastructure" },
  { label: "AI/ML", key: "aiMl" },
];

export function TechnologiesSection({
  technologies,
}: {
  technologies: User["technologies"];
}) {
  return (
    <View
      style={styles.section}
      // @ts-expect-error: Why the error?
      bookmark="Skills"
    >
      <Text style={styles.sectionTitle}>Skills</Text>
      {skillCategories.map(({ label, key }) => (
        <View key={key} style={styles.techRow}>
          <Text style={styles.techLabel}>{label}: </Text>
          <Text style={styles.techContent}>{technologies[key]}</Text>
        </View>
      ))}
    </View>
  );
}
