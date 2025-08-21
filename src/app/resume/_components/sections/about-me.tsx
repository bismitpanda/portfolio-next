import { Text, View } from "@react-pdf/renderer";
import { styles } from "../styles";

export function AboutMeSection({ content }: { content: string }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.paragraph}>{content}</Text>
    </View>
  );
}
