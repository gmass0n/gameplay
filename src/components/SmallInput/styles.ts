import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    padding: 2,
    textAlign: "center",
  },
  content: {
    flex: 1,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    borderRadius: 8,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    textAlign: "center",
  },
});
