import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    display: "flex",
    height: 200,
    width: "100%",
  },
  title: {
    zIndex: 1,
    fontFamily: "Grandis Medium",
    color: "#FFFFFF",
    width: 215,
    height: 56,
    fontSize: 24,
    left: 32,
    lineHeight: 30,
    top: 48,
    position: "absolute",
  },
  subTitle: {
    zIndex: 1,
    fontFamily: "Jakarta Semibold",
    color: "#FFFFFF",
    width: 100,
    height: 25,
    fontSize: 14,
    left: 32,
    lineHeight: 18,
    top: 128,
    position: "absolute",
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
    paddingBottom: 7,
  },
});
