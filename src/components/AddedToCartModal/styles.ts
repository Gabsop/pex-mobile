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
    height: "80%",
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    paddingVertical: 24,
    paddingHorizontal: 35,
    alignItems: "center",
  },
  hideModal: {
    backgroundColor: "transparent",
    width: "100%",
    top: 0,
    position: "absolute",
    height: "20%",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 15,
    marginTop: "10%",
  },
  buttonsContainer: {
    marginTop: 70,
    width: "100%",
    height: 130,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
