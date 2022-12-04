import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Image } from "react-native";
import ActionButton from "../../components/ActionButton";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import { AuthStackParamList } from "../../routes/AuthStack";
import FaceID from "../../assets/images/FaceID.png";

import { styles } from "./styles";
import { FaceIDLogo } from "../../assets/svg/FaceIDLogo";

export function FaceIdScreen() {
  const { navigate } = useNavigation<StackNavigationProp<AuthStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Title style={{ fontSize: 18, fontFamily: "Jakarta Bold" }}>
            Acesse com seu Face ID
          </Title>
          <Subtitle>
            Habilite o Face ID para acessar de forma mais fácil e ágil a sua
            conta da PEX com toda segurança
          </Subtitle>
        </View>
        <Image source={FaceID} style={styles.image} resizeMode="stretch" />
        <ActionButton
          logo={<FaceIDLogo />}
          style={{ width: 311 }}
          onPress={() => navigate("SignIn")}
        >
          Habilitar FaceID
        </ActionButton>
      </View>
    </View>
  );
}
