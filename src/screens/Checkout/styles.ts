import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: "#FFFFFF",
  },
  content: {
    height: "100%",
    paddingBottom: 160,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    height: 100,
    justifyContent: "space-between",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 15,
    marginTop: "10%",
  },
  detailsContainer: {
    marginTop: 24,
    width: "100%",
    height: 110,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#F1F0F3",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  detail: {
    height: 30,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
