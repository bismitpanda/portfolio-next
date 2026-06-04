import { Text, View } from "@react-pdf/renderer";
import { styles } from "../styles";

export function AboutMeSection({ content }: { content: string }) {
  return (
    <View
      style={styles.section}
      // @ts-expect-error: Why the error?
      bookmark="Summary"
    >
      <Text style={styles.sectionTitle}>Summary</Text>
      <Text style={styles.paragraph}>{content}</Text>
    </View>
  );
}
