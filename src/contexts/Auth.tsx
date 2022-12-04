import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { authService } from "../services/authService";

export interface AuthData {
  token: string;
  email: string;
  name: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage() {
    await AsyncStorage.getItem("@authData").then((data) => {
      if (data) {
        setAuthData(JSON.parse(data) as AuthData);
      }
      setLoading(false);
    });
  }

  async function signIn(email: string, password: string) {
    //Chamar API de autenticação
    try {
      const auth = await authService.signIn(email, password);
      AsyncStorage.setItem("@authData", JSON.stringify(auth));
      setAuthData(auth);
      return auth;
    } catch (error) {
      Alert.alert(error.message, "Verifique os dados e tente novamente");
    }
  }

  async function signOut() {
    AsyncStorage.removeItem("@authData");
    setAuthData(undefined);
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
