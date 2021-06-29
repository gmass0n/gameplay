import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 108,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 104,
    height: 116,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 15,
  },
  checkbox: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 13,
    height: 13,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  },
});
