import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { InfoLogo } from "../assets/svg/InfoLogo";
import { UploadLogo } from "../assets/svg/UploadLogo";
import Header from "../components/Header";
import { FaceIdScreen } from "../screens/FaceId";
import { OnboardingScreen } from "../screens/Onboarding";
import { PersonalDataScreen } from "../screens/PersonalData";
import { SignInScreen } from "../screens/SignIn";
import { SignUpScreen } from "../screens/SignUp";
import { TermsAndConditionsScreen } from "../screens/TermsAndConditions";

const Stack = createNativeStackNavigator();

export type AuthStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  TermsAndConditions: undefined;
  PersonalData: undefined;
  FaceID: undefined;
};

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: "transparent",
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="onBoarding"
        component={OnboardingScreen}
        options={{
          navigationBarHidden: true,
          animation: "simple_push",
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ animation: "simple_push" }}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditionsScreen}
        options={{
          headerShown: true,
          animation: "slide_from_bottom",
          header: () => <Header backTo="SignUp" logo={<UploadLogo />} />,
        }}
      />
      <Stack.Screen
        name="PersonalData"
        component={PersonalDataScreen}
        options={{
          headerShown: true,
          header: () => (
            <Header
              backTo="SignUp"
              logo={<InfoLogo />}
              title="Dados Pessoais"
            />
          ),
        }}
      />

      <Stack.Screen
        name="FaceID"
        component={FaceIdScreen}
        options={{
          headerShown: true,
          header: () => <Header backTo="PersonalData" />,
        }}
      />
    </Stack.Navigator>
  );
}
