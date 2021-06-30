import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  filled: {
    width: "100%",
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    alignItems: "center",
    flexDirection: "row",
  },
  outlined: {
    width: "100%",
    height: 56,
    backgroundColor: "transparent",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
  },
  loadingContainer: {
    width: "100%",
  },
  iconWrapper: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: theme.colors.line,
  },
  icon: {
    width: 24,
    height: 18,
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    fontFamily: theme.fonts.text500,
  },
});
