import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: 140,
    paddingTop: StatusBar.currentHeight,
    zIndex: 100,
    backgroundColor: "#FAFAFA",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 36,
    marginBottom: 30,
  },
  smallLogosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 72,
    height: 24,
  },
});
