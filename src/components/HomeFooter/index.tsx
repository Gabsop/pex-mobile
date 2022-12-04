import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { CartLogo } from "../../assets/svg/CartLogo";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SquaresLogo } from "../../assets/svg/SquaresLogo";
import { BookmarkLogo } from "../../assets/svg/BookmarkLogo";
import { ProfileLogo } from "../../assets/svg/ProfileLogo";

export default function HomeFooter(props: BottomTabBarProps) {
  const { navigation } = props;
  const index = props.state.index;
  const routeName = props.state.routeNames[index];
  const routesWithNoFooter = ["Cart", "Product", "Checkout", "Orders"];

  return (
    <View
      style={[
        styles.container,
        routesWithNoFooter.includes(routeName) ? { display: "none" } : {},
      ]}
    >
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <CartLogo color={index === 0 ? "#7B61FF" : ""} />
          <Text style={styles.text}>{index === 0 ? "Comprar" : ""}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <SquaresLogo />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <BookmarkLogo />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <ProfileLogo color={index === 1 ? "#7B61FF" : ""} />
          <Text style={styles.text}>{index === 1 ? "Perfil" : ""}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
