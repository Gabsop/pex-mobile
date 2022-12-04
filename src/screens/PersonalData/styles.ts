import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFFFF",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 32,
    paddingBottom: 50,
  },
  form: {
    marginTop: "10%",
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  picture: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  buttonsContainer: {
    marginTop: "70%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
});
