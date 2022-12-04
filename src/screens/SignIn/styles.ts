import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 24,
    marginTop: StatusBar.currentHeight,
  },
  textContainer: {
    display: "flex",
    width: 311,
    height: 79,
    alignItems: "flex-start",
  },
  signInForm: {
    display: "flex",
    justifyContent: "space-between",
    height: 128,
    marginTop: 32,
    marginBottom: 24,
  },
  footer: {
    display: "flex",
    marginTop: 70,
    width: 311,
  },
  account: {
    marginTop: 24,
    gap: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Jakarta",
    color: "#999999",
    fontSize: 14,
    marginRight: 3,
  },
});
