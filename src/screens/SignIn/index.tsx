import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import FormInput from "../../components/FormInput";
import TextLink from "../../components/TextLink";
import SignIn from "../../assets/images/SignIn.png";

import { styles } from "./styles";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import { MailLogo } from "../../assets/svg/MailLogo";
import { PadlockLogo } from "../../assets/svg/PadlockLogo";
import ActionButton from "../../components/ActionButton";
import { useAuth } from "../../contexts/Auth";

export function SignInScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (!email || !password) {
      alert("Preencha todos os campos.");
      return;
    }
    signIn(email, password);
  }

  return (
    <View style={styles.container}>
      <Image source={SignIn} style={styles.image} resizeMode="stretch" />
      <View style={styles.textContainer}>
        <Title>Bem vindo a PEX!</Title>
        <Subtitle>
          Informe os seus dados para ter acesso a um mundo de economia para sua
          obra
        </Subtitle>
      </View>
      <View style={styles.signInForm}>
        <FormInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          logo={<MailLogo />}
        />
        <FormInput
          secureTextEntry
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          logo={<PadlockLogo />}
          onSubmitEditing={() => handleSignIn()}
        />
      </View>
      <TextLink to="/onBoarding">Esqueci minha senha</TextLink>
      <View style={styles.footer}>
        <ActionButton onPress={() => handleSignIn()}>Acessar</ActionButton>
        <View style={styles.account}>
          <Text style={styles.text}>Não possui uma conta?</Text>
          <TextLink to="/SignUp">Criar conta</TextLink>
        </View>
      </View>
    </View>
  );
}
