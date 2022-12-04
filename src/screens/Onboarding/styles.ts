import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 122,
  },
  textContainer: {
    width: 310,
  },
  bgLogoContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    right: 70,
  },
  content: {
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  subtitle: {
    width: 290,
    fontSize: 14,

    lineHeight: 20,
    textAlign: "center",
    color: "#999999",
  },
});
