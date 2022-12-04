import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  text: {
    fontFamily: "Jakarta",
    color: "#999999",
    fontSize: 14,
  },
  termsContainer: {
    padding: 32,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
  },
  scrollView: {
    marginTop: 25,
  },
  scrollContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  gradient: {
    zIndex: 2,
    width: "100%",
    height: 150,
    bottom: 0,
    flex: 1,
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    top: "85%",
    right: screenWidth / 2 - 30,
    zIndex: 3,
  },
});
