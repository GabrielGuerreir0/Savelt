import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 62,
  },
  text: {
    color: colors.green[300],
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  logo: {
    width: 32,
    height: 32,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  linksContent: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
});
