import React from "react";
import { TextProps, Text } from "react-native";
import styles from "./styles";

export default function Title({ style, children, ...rest }: TextProps) {
  return (
    <Text style={[styles.title, style]} {...rest}>
      {children}
    </Text>
  );
}
