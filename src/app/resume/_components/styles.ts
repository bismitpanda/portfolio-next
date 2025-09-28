import { Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
  family: "Cambria",
  src: "assets/fonts/Cambria.ttf",
  fontStyle: "normal",
  fontWeight: "normal",
});

Font.register({
  family: "Cambria",
  src: "assets/fonts/Cambria Bold 700.ttf",
  fontStyle: "normal",
  fontWeight: "bold",
});

Font.register({
  family: "Cambria",
  src: "assets/fonts/Cambria Italic 400.ttf",
  fontStyle: "italic",
  fontWeight: "normal",
});

Font.register({
  family: "Cambria",
  src: "assets/fonts/Cambria Bold Italic 700.ttf",
  fontStyle: "italic",
  fontWeight: "bold",
});

export const styles = StyleSheet.create({
  page: {
    fontFamily: "Cambria",
    fontSize: 10,
    lineHeight: 1.5,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#ffffff",
  },
  header: {
    textAlign: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 16,
    color: "#000000",
  },
  contactInfo: {
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  contactItem: {
    marginHorizontal: 4,
  },
  separator: {
    marginHorizontal: 4,
    color: "#000000",
  },
  link: {
    color: "#000000",
    textDecoration: "none",
  },
  section: {
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
    paddingBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    borderBottomStyle: "solid",
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 6,
    textAlign: "justify",
  },
  entryContainer: {
    marginBottom: 6,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  entryTitle: {
    fontSize: 10,
    fontWeight: "bold",
    flex: 1,
  },
  entryDate: {
    fontSize: 10,
    textAlign: "right",
    minWidth: 100,
  },
  entrySubtitle: {
    fontSize: 10,
    fontStyle: "italic",
    marginBottom: 2,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: "bold",
    flex: 1,
  },
  projectUrl: {
    fontSize: 10,
    color: "#000000",
    textDecoration: "none",
    textAlign: "right",
    minWidth: 120,
  },
  highlightsList: {
    marginLeft: 10,
    marginBottom: 6,
  },
  highlight: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 2,
    flexDirection: "row",
    textAlign: "justify",
  },
  bullet: {
    width: 8,
    fontSize: 10,
    marginRight: 6,
  },
  highlightText: {
    flex: 1,
  },
  toolsSection: {
    marginTop: 2,
    fontSize: 10,
    fontStyle: "italic",
  },
  toolsLabel: {
    fontWeight: "bold",
  },
  techSection: {
    marginBottom: 6,
  },
  techLabel: {
    fontSize: 10,
    fontWeight: "bold",
    marginRight: 5,
  },
  techContent: {
    fontSize: 10,
    flex: 1,
  },
  techRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  educationDetails: {
    marginLeft: 10,
    marginTop: 2,
  },
  educationItem: {
    fontSize: 10,
    marginBottom: 1,
    flexDirection: "column",
  },
  educationResults: {
    fontStyle: "italic",
    flex: 1,
  },
  educationLabel: {
    fontWeight: "bold",
  },
  educationHeader: {
    flexDirection: "row",
    flex: 1,
  },
  techBreakdown: {
    marginLeft: 10,
    marginTop: 6,
  },
  techBreakdownTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 4,
  },
  techCategory: {
    fontSize: 10,
    marginBottom: 2,
    flexDirection: "row",
  },
  techCategoryLabel: {
    fontWeight: "bold",
    marginRight: 4,
  },
  achievementHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  achievementTitle: {
    fontSize: 10,
    fontWeight: "bold",
    flex: 1,
  },
  achievementOrg: {
    fontSize: 10,
    fontStyle: "italic",
    marginBottom: 2,
  },
  achievementDate: {
    fontSize: 10,
    textAlign: "right",
    minWidth: 80,
  },
  smallSpacing: {
    marginBottom: 2,
  },
  mediumSpacing: {
    marginBottom: 6,
  },
  largeSpacing: {
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  rightAlign: {
    textAlign: "right",
  },
  centerAlign: {
    textAlign: "center",
  },
  justifyAlign: {
    textAlign: "justify",
  },
});
