import React from "react";
import { View, Text } from "react-native";
import { ParallaxImage } from "react-native-snap-carousel-v4";
import { styles } from "./styles";

export function ProductImageCard({ item, index }, parallaxProps) {
  return (
    <View style={styles.item} key={index}>
      <ParallaxImage
        source={item.source}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0}
        fadeDuration={0}
        {...parallaxProps}
      />
    </View>
  );
}
