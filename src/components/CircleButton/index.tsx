import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

interface CircleButtonProps extends TouchableOpacityProps {
  direction?: "right" | "left" | "down" | "up";
}

export default function CircleButton({
  direction = "right",
  style,
  ...rest
}: CircleButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <AntDesign name={`arrow${direction}`} size={20} color="white" />
    </TouchableOpacity>
  );
}
