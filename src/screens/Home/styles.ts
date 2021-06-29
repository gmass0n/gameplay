import { StyleSheet } from "react-native";
import { isIphoneX, getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: isIphoneX() ? getStatusBarHeight() + 26 : 26,
    marginBottom: 40,
  },
  content: {
    flex: 1,
    marginTop: 40,
  },
  matches: {
    marginTop: 12,
  },
});
