import { StyleSheet, Dimensions } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 42,
    height: 1,
    backgroundColor: theme.colors.secondary40,
    marginVertical: 10,
    alignSelf: "center",
  },
});
