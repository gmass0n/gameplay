import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: theme.colors.overlay,
    width: "100%",
    flex: 1,
  },
  container: {
    width: "100%",
  },
  bar: {
    width: 45,
    height: 3,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: "center",
    marginTop: 15,
  },
});
