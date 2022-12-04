import React from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";
import Title from "../Title";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

interface ProfileButtonProps extends ViewProps {
  logo: JSX.Element;
}

export default function ProfileButton({
  style,
  logo,
  children,
  ...rest
}: ProfileButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      <View style={styles.logoContainer}>{logo}</View>
      <View style={styles.button}>
        <Title
          style={{
            fontSize: 14,
            lineHeight: 18,
          }}
        >
          {children}
        </Title>
      </View>
      <Entypo name="chevron-small-right" size={30} color="#999999" />
    </TouchableOpacity>
  );
}
