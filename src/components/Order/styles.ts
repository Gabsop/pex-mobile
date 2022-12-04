import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  order: {
    width: "100%",
    height: 160,
    borderWidth: 1.5,
    borderColor: "#F1F0F3",
    borderRadius: 12,
    marginTop: 24,
  },
  orderHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    borderBottomWidth: 1.5,
    borderBottomColor: "#F1F0F3",
    paddingHorizontal: 16,
  },
  orderHeaderTextContainer: {
    height: 50,
  },
  orderSteps: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  stepTextContainer: {
    // backgroundColor: "blue",
    width: "100%",
    justifyContent: "flex-start",
    marginLeft: 35,
    flexDirection: "row",
    marginBottom: 11,
  },
  stepText: {
    fontFamily: "Jakarta Bold",
    fontSize: 11,
    color: "#999999",
  },
});
