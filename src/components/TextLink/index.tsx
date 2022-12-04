import styles from "./styles";

import React from "react";
import { View, Text, StyleProp, TextStyle } from "react-native";
import { Link } from "@react-navigation/native";

interface TextLinkProps {
  to: string;
  children: string;
  style?: StyleProp<TextStyle>;
}

export default function TextLink({ to, style, children }: TextLinkProps) {
  return (
    <View style={style}>
      <Link to={to}>
        <Text style={styles.text}>{children}</Text>
      </Link>
    </View>
  );
}
