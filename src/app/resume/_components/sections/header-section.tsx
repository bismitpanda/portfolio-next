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
        <Link src={data.socials.email.url} style={[styles.contactItem, styles.link]}>
          <Text>{data.socials.email.label}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link src={data.socials.github.url} style={[styles.contactItem, styles.link]}>
          <Text>{data.socials.github.label}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link src={data.socials.linkedin.url} style={[styles.contactItem, styles.link]}>
          <Text>{data.socials.linkedin.label}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link src={data.socials.website.url} style={[styles.contactItem, styles.link]}>
          <Text>{data.socials.website.label}</Text>
        </Link>
      </View>
    </View>
  );
}
