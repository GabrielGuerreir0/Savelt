import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    backgroundColor: colors.orange[300],
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.orange[900],
    fontSize: 16,
    fontWeight: "600",
  },
});
