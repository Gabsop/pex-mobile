import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { AuthStackParamList } from "../../routes/AuthStack";
import { PexLogo } from "../../assets/svg/PexLogo";
import { OnboardingBg } from "../../assets/svg/OnboardingBg";

import styles from "./styles";
import CircleButton from "../../components/CircleButton";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

export function OnboardingScreen() {
  const { navigate } = useNavigation<StackNavigationProp<AuthStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.bgLogoContainer}>
        <OnboardingBg />
      </View>
      <View style={styles.content}>
        <PexLogo style={styles.logoContainer} />
        <View style={styles.textContainer}>
          <Title style={{ marginBottom: 16 }}>Bem vindo a PEX</Title>
          <Subtitle
            style={{
              textAlign: "center",
            }}
          >
            Economize tempo e dinheiro em todas as etapas da sua obra. Na
            reforma ou construção nós iremos te auxiliar em tudo.
          </Subtitle>
        </View>
        <CircleButton
          style={{ position: "absolute", bottom: 0, right: 0 }}
          onPress={() => navigate("SignIn")}
        />
      </View>
    </View>
  );
}
