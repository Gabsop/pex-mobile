import React from "react";
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  View,
  Text,
} from "react-native";
import styles from "./styles";

interface BannerProps extends ImageProps {
  index?: number;
  item: {
    source: ImageSourcePropType;
    title?: string;
    subTitle?: string;
  };
}

export default function Banner({ item, index, style }: BannerProps) {
  return (
    <View key={index}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subTitle}</Text>
      <Image
        style={[styles.container, style]}
        source={item.source}
        resizeMode="stretch"
      />
    </View>
  );
}
