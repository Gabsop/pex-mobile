import React, { useCallback } from "react";
import { Router } from "./src/routes/Router";
import { useFonts } from "expo-font";
import { AuthProvider } from "./src/contexts/Auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jakarta: require("./src/assets/fonts/PlusJakartaSans-VariableFont.ttf"),
    "Jakarta Semibold": require("./src/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "Jakarta Bold": require("./src/assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Grandis Medium": require("./src/assets/fonts/GrandisExtended-MediumItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
