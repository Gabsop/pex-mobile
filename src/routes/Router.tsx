import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { useAuth } from "../contexts/Auth";
import { LoadingScreen } from "../screens/Loading";

export function Router() {
  const { authData, loading } = useAuth();

  return (
    <NavigationContainer>
      {loading ? <LoadingScreen /> : authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
