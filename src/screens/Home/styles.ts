import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FAFAFA",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  categoriesContainer: {
    height: 60,
  },
  scrollView: {
    display: "flex",
    marginLeft: 32,
    flexDirection: "row",
  },
  productsContainer: {
    marginTop: 17,
    display: "flex",
    alignItems: "flex-start",
    paddingLeft: 32,
    height: 330,
    width: "100%",
  },
  brandsContainer: {
    marginLeft: 5,
    marginTop: 10,
    width: "100%",
  },
  bannersContainer: {
    marginTop: 30,
    width: "100%",
  },
});
