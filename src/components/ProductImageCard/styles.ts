import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    width: 311,
    height: 334,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    flex: 1,
    borderRadius: 24,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
