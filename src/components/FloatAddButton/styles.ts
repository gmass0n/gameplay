import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 24,
    bottom: 24,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 56 / 2,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
