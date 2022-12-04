import React from "react";
import { View, Text, ViewProps, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../routes/AuthStack";
import { AppStackParamList } from "../../routes/AppStack";
import { NavigationContext } from "@react-navigation/native";

interface HeaderProps extends ViewProps {
  logo?: JSX.Element;
  title?: string;
  backTo: keyof AuthStackParamList | keyof AppStackParamList;
}

export default function Header({
  logo,
  title,
  backTo,
  children,
  ...rest
}: HeaderProps) {
  const { navigate } =
    useNavigation<
      StackNavigationProp<AuthStackParamList | AppStackParamList>
    >();

  const navigation = React.useContext(NavigationContext);
  const { setParams } = navigation;

  return (
    <View style={styles.container} {...rest}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={20}
          color="black"
          onPress={() => navigate(backTo)}
        />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={() => setParams({ logoPressed: true })}
        >
          {logo}
        </TouchableOpacity>
      </View>
    </View>
  );
}
