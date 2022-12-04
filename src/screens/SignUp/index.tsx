import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import FormInput from "../../components/FormInput";
import TextLink from "../../components/TextLink";
import SignUp from "../../assets/images/SignUp.png";

import { styles } from "./styles";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import { MailLogo } from "../../assets/svg/MailLogo";
import { PadlockLogo } from "../../assets/svg/PadlockLogo";
import ActionButton from "../../components/ActionButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../routes/AuthStack";

export function SignUpScreen() {
  const { navigate } = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  function handleNextStep() {
    if (email && password) {
      if (checked) {
        navigate("PersonalData");
        return;
      }
      alert("Aceite os termos de serviço e política de privacidade.");
      return;
    }
    alert("Preencha todos os campos.");
  }

  return (
    <View style={styles.container}>
      <Image source={SignUp} style={styles.image} resizeMode="stretch" />
      <View style={styles.textContainer}>
        <Title style={{ fontSize: 18, fontFamily: "Jakarta Bold" }}>
          Crie sua conta na PEX
        </Title>
        <Subtitle>
          Informe o seus dados para criar sua conta na PEX e economize muito na
          sua obra
        </Subtitle>
      </View>
      <View style={styles.signInForm}>
        <FormInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => handleNextStep()}
          logo={<MailLogo />}
        />
        <FormInput
          secureTextEntry
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={() => handleNextStep()}
          logo={<PadlockLogo />}
        />
      </View>
      <View>
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={16}
            innerIconStyle={{
              borderWidth: 1.5,
              borderRadius: 6,
              borderColor: "#F1F0F3",
            }}
            onPress={(isChecked: boolean) => setChecked(isChecked)}
          />
          <View style={styles.checkboxText}>
            <Text style={styles.text}>Li e aceito os</Text>
            <TextLink to="/TermsAndConditions">Termos de serviço</TextLink>
            <Text style={styles.text}> e política</Text>
            <Text style={styles.text}>de privacidade</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ActionButton onPress={() => handleNextStep()}>Continuar</ActionButton>
        <View style={styles.account}>
          <Text style={styles.text}>Já possui uma conta?</Text>
          <TextLink to="/SignIn">Acessar</TextLink>
        </View>
      </View>
    </View>
  );
}
