import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
} from "react-native";
import { SaleLogo } from "../../assets/svg/SaleLogo";
import styles from "./styles";

interface CategoriesButtonProps extends TouchableOpacityProps {
  text: string;
  sale?: boolean;
  selected?: boolean;
}

export default function CategoriesButton({
  text,
  sale = false,
  style,
  selected,
  ...rest
}: CategoriesButtonProps) {
  return (
    <View style={!selected ? styles.container : styles.selected}>
      <TouchableOpacity style={styles.button} {...rest}>
        <View style={styles.logoContainer}>
          {sale && <SaleLogo color={selected ? "#FFFFFF" : "#000000"} />}
        </View>
        <Text style={!selected ? styles.text : styles.textSelected}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
