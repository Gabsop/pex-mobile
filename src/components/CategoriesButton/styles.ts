import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    borderRadius: 52,
    borderWidth: 1.5,
    marginHorizontal: 4,
    borderColor: "#F1F0F3",
    backgroundColor: "#FAFAFA",
  },
  selected: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    borderRadius: 52,
    borderWidth: 1.5,
    marginHorizontal: 4,
    borderColor: "#7B61FF",
    backgroundColor: "#7B61FF",
  },
  logoContainer: {
    paddingTop: 4,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 36,
    marginHorizontal: 13,
  },
  text: {
    fontFamily: "Jakarta Semibold",
    fontSize: 12,
    lineHeight: 16,
  },
  textSelected: {
    fontFamily: "Jakarta Semibold",
    fontSize: 12,
    lineHeight: 16,
    color: "#FFFFFF",
  },
});
