import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    /*     paddingHorizontal: 24, */
    borderWidth: 1,
    paddingVertical: 12,
    /*     borderColor: colors.green[300], */
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[400],
  },
});
