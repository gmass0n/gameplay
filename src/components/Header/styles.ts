import { StyleSheet } from "react-native";
import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 110,
    paddingTop: isIphoneX() ? getStatusBarHeight() + 6 : getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 20,
  },
});
