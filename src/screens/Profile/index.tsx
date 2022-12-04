import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import Title from "../../components/Title";
import { styles } from "./styles";
import ProfilePicture from "../../assets/images/Profile/ProfilePicture.png";
import Subtitle from "../../components/Subtitle";
import { Entypo } from "@expo/vector-icons";
import ProfileButton from "../../components/ProfileButton";
import { SignOutLogo } from "../../assets/svg/SignOutLogo";
import { useAuth } from "../../contexts/Auth";
import { Buttons } from "./data";

export default function ProfileScreen() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={ProfilePicture} style={{ width: 58, height: 58 }} />
        <TouchableOpacity style={styles.button}>
          <View style={styles.textContainer}>
            <Title style={{ fontSize: 14, lineHeight: 18 }}>Olá, Maria</Title>
            <Subtitle style={{ fontSize: 14, lineHeight: 18 }}>
              maria@velty.com.br
            </Subtitle>
          </View>
          <Entypo name="chevron-small-right" size={30} color="#999999" />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.main,
          {
            alignItems: "flex-start",
            marginTop: 40,
            flexDirection: "column",
          },
        ]}
      >
        <Title
          style={{
            fontSize: 14,
            lineHeight: 18,
          }}
        >
          Sua Conta PEX
        </Title>
        <View style={styles.profileButtonsContainer}>
          {Buttons.map((button, index) => (
            <ProfileButton
              key={index}
              logo={button.logo}
              style={
                index != Buttons.length
                  ? { borderBottomWidth: 1, borderBottomColor: "#F1F0F3" }
                  : {}
              }
            >
              {button.title}
            </ProfileButton>
          ))}
        </View>
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => signOut()}
        >
          <SignOutLogo />
          <Text style={styles.signOutText}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
