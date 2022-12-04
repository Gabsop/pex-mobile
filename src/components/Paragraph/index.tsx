import React from "react";
import { Text, View, ViewProps } from "react-native";
import { styles } from "./styles";

interface ParagraphProps extends ViewProps {
  title: string;
}

export default function Paragraph({
  title,
  children,
  ...rest
}: ParagraphProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
