import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 0,
    margin: 0,
  },
  modalView: {
    backgroundColor: "#FFFFFF",
    lineHeight: 20,
    width: "100%",
    height: "90%",
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    paddingVertical: 24,
    paddingHorizontal: 32,
    alignItems: "center",
  },
  modalHeader: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionContainer: {
    alignItems: "flex-start",
    width: "100%",
    minHeight: 120,
    marginTop: 12,
  },
  text: {
    fontFamily: "Jakarta",
    color: "#999999",
    maxHeight: 120,
  },
});
