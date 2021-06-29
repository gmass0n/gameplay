import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginBottom: 12,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 30,
  },
  select: {
    flexDirection: "row",
    width: "100%",
    height: 68,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    paddingRight: 24,
    overflow: "hidden",
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  field: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  },
  characterLimit: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },
  footer: {
    paddingHorizontal: 24,
    marginVertical: 30,
  },
});
