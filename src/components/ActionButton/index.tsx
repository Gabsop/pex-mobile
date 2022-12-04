import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
  StyleProp,
  TextStyle,
} from "react-native";

import styles from "./styles";

interface ActionButtonProps extends TouchableOpacityProps {
  textStyle?: StyleProp<TextStyle>;
  logo?: JSX.Element;
  white?: boolean;
}
export default function ActionButton({
  logo,
  style,
  children,
  textStyle,
  white,
  ...rest
}: ActionButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        white
          ? {
              backgroundColor: "#FFFFFF",
              borderWidth: 1.5,
              borderColor: "#F1F0F3",
            }
          : {},
      ]}
      {...rest}
    >
      <View style={styles.logoContainer}>{logo}</View>
      <Text style={[styles.text, textStyle, white ? { color: "#000000" } : {}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
