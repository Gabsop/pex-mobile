import {
  BottomTabBarProps,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs";
import { NavigationHelpers, ParamListBase } from "@react-navigation/native";
import React from "react";
import {
  ImageSourcePropType,
  View,
  ViewProps,
  Image,
  Text,
} from "react-native";
import ActionButton from "../ActionButton";
import Title from "../Title";
import { styles } from "./styles";

interface ProductCardProps extends ViewProps {
  source: ImageSourcePropType;
  category: string;
  title: string;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  index: number;
}

export default function ProductCard({
  source,
  category,
  title,
  style,
  navigation,
  index,
  ...rest
}: ProductCardProps) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <Image style={[styles.image]} source={source} resizeMode="stretch" />
      <Text
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginLeft: 8,
          marginTop: 10,
          fontFamily: "Jakarta Semibold",
          color: "#999999",
          fontSize: 10,
          lineHeight: 10,
        }}
      >
        {category}
      </Text>
      <Title
        numberOfLines={2}
        style={{
          marginTop: 8,
          height: 34,
          lineHeight: 16,
          textAlign: "left",
          width: 112,
          fontSize: 12,
        }}
      >
        {title}
      </Title>
      <ActionButton
        style={{
          width: 125,
          height: 25,
          marginTop: 5,
        }}
        textStyle={{
          fontSize: 8,
          lineHeight: 10,
        }}
        onPress={() => navigation.navigate("Product", { index })}
      >
        Comprar
      </ActionButton>
    </View>
  );
}
