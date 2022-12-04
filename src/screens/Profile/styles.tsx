import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 32,
  },
  main: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    height: 58,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    paddingLeft: 16,
    height: "70%",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  profileButtonsContainer: {
    width: "100%",
    marginTop: 20,
  },
  signOutButton: {
    marginTop: 30,
    height: 30,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  signOutText: {
    color: "#EA5B5B",
    marginLeft: 10,
  },
});
