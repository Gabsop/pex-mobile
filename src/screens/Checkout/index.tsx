import React from "react";
import { View, Image, Text } from "react-native";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import Rocket from "../../assets/images/Rocket.png";
import { styles } from "./styles";
import ActionButton from "../../components/ActionButton";
import { TrackLogo } from "../../assets/svg/TrackLogo";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../../routes/AppStack";

export function CheckoutScreen() {
  const { navigate } = useNavigation<StackNavigationProp<AppStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={Rocket} style={styles.image} resizeMode="stretch" />
        <View style={styles.textContainer}>
          <Title
            style={{
              fontSize: 24,
              fontFamily: "Jakarta Bold",
              textAlign: "left",
            }}
          >
            Obrigado pela sua compra
          </Title>
          <Subtitle>
            Você irá receber uma mensagem no email{" "}
            <Text style={{ fontFamily: "Jakarta Bold", color: "#000000" }}>
              maria@velty.com.br
            </Text>{" "}
            quando a sua compra for atualizada.
          </Subtitle>
        </View>
        <View style={styles.detailsContainer}>
          <Title
            style={{
              fontSize: 14,
              fontFamily: "Jakarta Bold",
              alignSelf: "flex-start",
            }}
          >
            Detalhes da compra
          </Title>
          <View style={styles.detail}>
            <Subtitle>Número da compra</Subtitle>
            <Subtitle
              style={{
                fontFamily: "Jakarta Semibold",
                color: "#000000",
              }}
            >
              #FDS639820
            </Subtitle>
          </View>
          <View style={styles.detail}>
            <Subtitle>Quantidade de itens</Subtitle>
            <Subtitle
              style={{ color: "#2ED573", fontFamily: "Jakarta Semibold" }}
            >
              321
            </Subtitle>
          </View>
        </View>
        <ActionButton
          style={{ position: "absolute", bottom: 45 }}
          logo={<TrackLogo />}
          onPress={() => navigate("Orders")}
        >
          Acompanhar Compra
        </ActionButton>
      </View>
    </View>
  );
}
