import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: getBottomSpace() + 24,
  },
  titleWrapper: {
    alignItems: "baseline",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 24,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
    fontSize: 24,
  },
  titleBold: {
    fontFamily: theme.fonts.title700,
  },
  titlePrimary: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.title700,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
