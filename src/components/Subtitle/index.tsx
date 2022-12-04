import React from "react";
import { TextProps, Text } from "react-native";
import styles from "./styles";

export default function Subtitle({ style, children, ...rest }: TextProps) {
  return (
    <Text style={[styles.subtitle, style]} {...rest}>
      {children}
    </Text>
  );
}
