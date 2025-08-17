import { Link, Text, View } from "@react-pdf/renderer";
import type { User } from "@/lib/constants";
import { styles } from "../styles";

export function HeaderSection({ data }: { data: User }) {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>
        {data.firstName} {data.lastName}
      </Text>
      <View style={styles.contactInfo}>
        <Text style={styles.contactItem}>{data.location}</Text>
        <Text style={styles.separator}>|</Text>
        <Link
          src={data.socials.email.url}
          style={[styles.contactItem, styles.link]}
        >
          <Text>{data.socials.email.label}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link
          src={data.socials.phone.url}
          style={[styles.contactItem, styles.link]}
        >
          <Text>{data.socials.phone.label}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link
          src={data.socials.github.url}
          style={[styles.contactItem, styles.link]}
        >
          <Text>{data.socials.github.label}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link
          src={data.socials.linkedin.url}
          style={[styles.contactItem, styles.link]}
        >
          <Text>{data.socials.linkedin.label}</Text>
        </Link>
        <Text style={styles.separator}>|</Text>
        <Link
          src={data.socials.website.url}
          style={[styles.contactItem, styles.link]}
        >
          <Text>{data.socials.website.label}</Text>
        </Link>
      </View>
    </View>
  );
}
