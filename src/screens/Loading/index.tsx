import React from "react";
import { ActivityIndicator, View } from "react-native";
import { OnboardingBg } from "../../assets/svg/OnboardingBg";

import styles from "./styles";

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bgLogoContainer}>
        <OnboardingBg />
      </View>
      <View style={styles.content}>
        <ActivityIndicator size="large" color="#F09200" />
      </View>
    </View>
  );
}
