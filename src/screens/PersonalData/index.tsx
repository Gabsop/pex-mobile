import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { CalendarLogo } from "../../assets/svg/CalendarLogo";
import { InfoLogo } from "../../assets/svg/InfoLogo";
import { MailLogo } from "../../assets/svg/MailLogo";
import { PhoneLogo } from "../../assets/svg/PhoneLogo";
import { Photo } from "../../assets/svg/Photo";
import ActionButton from "../../components/ActionButton";
import FormInput from "../../components/FormInput";
import TextLink from "../../components/TextLink";
import { AuthStackParamList } from "../../routes/AuthStack";

import { styles } from "./styles";

export function PersonalDataScreen() {
  const { navigate } = useNavigation<StackNavigationProp<AuthStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.picture}>
          <Photo style={{ marginBottom: 16 }} />
          <TextLink to="/FaceID">Enviar foto</TextLink>
        </View>
        <View style={styles.form}>
          <FormInput logo={<MailLogo />} placeholder="Nome Completo" />
          <FormInput logo={<CalendarLogo />} placeholder="Data de Nascimento" />
          <FormInput logo={<PhoneLogo />} placeholder="+55 | Telefone" />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={{ width: 150 }}>
            <ActionButton white onPress={() => navigate("SignIn")}>
              Pular
            </ActionButton>
          </View>
          <View style={{ width: 150 }}>
            <ActionButton onPress={() => navigate("FaceID")}>
              Cadastrar
            </ActionButton>
          </View>
        </View>
      </View>
    </View>
  );
}
