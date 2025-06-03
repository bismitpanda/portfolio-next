import { styles } from "../styles";
import type { ResumeData } from "@/lib/resume-data";
import { Link, Text, View } from "@react-pdf/renderer";

export function HeaderSection({ data }: { data: ResumeData["personalInfo"] }) {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>{data.name}</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.contactItem}>{data.location}</Text>
        <Text style={styles.separator}>|</Text>
        <Link src={`mailto:${data.email}`} style={[styles.contactItem, styles.link]}>
          <Text>{data.email}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link src={data.github} style={[styles.contactItem, styles.link]}>
          <Text>{data.github}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link src={data.linkedin} style={[styles.contactItem, styles.link]}>
          <Text>{data.linkedin}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link src={data.website} style={[styles.contactItem, styles.link]}>
          <Text>{data.website}</Text>
        </Link>
      </View>
    </View>
  );
}
