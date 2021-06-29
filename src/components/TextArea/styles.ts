import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 96,
    borderRadius: 8,
    padding: 2,
  },
  content: {
    flex: 1,
    borderRadius: 8,
  },
  textarea: {
    flex: 1,
    borderRadius: 8,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
});
