import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  carouselContainer: {
    marginTop: 37,
  },
  pagination: {
    position: "absolute",
    bottom: 24,
    right: 56,
    height: 21,
    width: 56,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
  },
  textContainer: {
    width: "100%",
    height: 100,
    marginTop: 24,
    paddingHorizontal: 32,
  },
  informationsContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    minHeight: 200,
    width: "100%",
    paddingHorizontal: 32,
  },
  text: {
    fontFamily: "Jakarta",
    color: "#999999",
    maxHeight: 120,
  },
  button: {
    justifyContent: "space-between",
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
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
  hideModal: {
    backgroundColor: "transparent",
    width: "100%",
    top: 0,
    position: "absolute",
    height: "10%",
  },
  descriptionContainer: {
    alignItems: "flex-start",
    width: "100%",
    minHeight: 120,
    marginTop: 12,
  },
});
