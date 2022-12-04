import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";

interface FormInputProps extends TextInputProps {
  logo?: JSX.Element;
}

export default function FormInput({ style, logo, ...rest }: FormInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="sentences"
        placeholderTextColor="#B8B5C3"
        style={[styles.input, style]}
        {...rest}
      />
      <View style={styles.logoContainer}>{logo}</View>
    </View>
  );
}
