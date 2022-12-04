import React from "react";
import { View, Image } from "react-native";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import EmptyCart from "../../assets/images/EmptyCart.png";

import { styles } from "./styles";

export function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={EmptyCart} style={styles.image} resizeMode="stretch" />
        <View style={styles.textContainer}>
          <Title style={{ fontSize: 18, fontFamily: "Jakarta Bold" }}>
            Carrinho vazio
          </Title>
          <Subtitle style={{ textAlign: "center" }}>
            O seu carrinho está vazio, navegue pela PEX para encontrar o que
            você precisa
          </Subtitle>
        </View>
      </View>
    </View>
  );
}
