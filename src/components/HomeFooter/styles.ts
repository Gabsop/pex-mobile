import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 100,
    backgroundColor: "#FFFFFF",
  },
  iconsContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 36,
    marginBottom: 30,
  },
  button: {
    // backgroundColor: "red",
    display: "flex",

    width: 60,
    height: 45,
    alignItems: "center",
  },
  text: {
    fontFamily: "Jakarta Semibold",
    fontSize: 12,
    lineHeight: 16,
    color: "#7B61FF",
  },
});
