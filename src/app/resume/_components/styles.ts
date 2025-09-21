import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
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
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "medium",
    marginBottom: 20,
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
    marginHorizontal: 5,
  },
  separator: {
    marginHorizontal: 5,
    color: "#000000",
  },
  link: {
    color: "#000000",
    textDecoration: "none",
  },
  section: {
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
    paddingBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    borderBottomStyle: "solid",
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 8,
    textAlign: "justify",
  },
  entryContainer: {
    marginBottom: 12,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
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
    marginBottom: 4,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
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
    marginBottom: 8,
  },
  highlight: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 4,
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
    marginTop: 4,
    fontSize: 10,
    fontStyle: "italic",
  },
  toolsLabel: {
    fontWeight: "bold",
  },
  techSection: {
    marginBottom: 8,
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
    marginBottom: 8,
  },
  educationDetails: {
    marginLeft: 10,
    marginTop: 4,
  },
  educationItem: {
    fontSize: 10,
    marginBottom: 2,
    flexDirection: "column",
  },
  educationLabel: {
    fontWeight: "bold",
    marginRight: 5,
  },
  techBreakdown: {
    marginLeft: 10,
    marginTop: 8,
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
    marginRight: 5,
  },
  achievementHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  achievementTitle: {
    fontSize: 10,
    fontWeight: "bold",
    flex: 1,
  },
  achievementOrg: {
    fontSize: 10,
    fontStyle: "italic",
    marginBottom: 4,
  },
  achievementDate: {
    fontSize: 10,
    textAlign: "right",
    minWidth: 80,
  },
  smallSpacing: {
    marginBottom: 4,
  },
  mediumSpacing: {
    marginBottom: 8,
  },
  largeSpacing: {
    marginBottom: 12,
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
