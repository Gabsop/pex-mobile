import React from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { styles } from "./styles";
import { useAuth } from "../../contexts/Auth";
import { PexLogoSmall } from "../../assets/svg/PexLogoSmall";
import { BellLogo } from "../../assets/svg/BellLogo";
import { CartLogo } from "../../assets/svg/CartLogo";
import { useNavigation } from "@react-navigation/native";
import { AppStackParamList } from "../../routes/AppStack";
import { StackNavigationProp } from "@react-navigation/stack";

interface HomeHeaderProps extends ViewProps {
  title?: string;
  noIcons?: boolean;
}

export default function HomeHeader({ noIcons, ...rest }: HomeHeaderProps) {
  const { navigate } = useNavigation<StackNavigationProp<AppStackParamList>>();

  return (
    <View style={styles.container} {...rest}>
      <View style={styles.header}>
        <PexLogoSmall />
        {noIcons ?? (
          <View style={styles.smallLogosContainer}>
            <TouchableOpacity onPress={() => navigate("Cart")}>
              <CartLogo />
            </TouchableOpacity>

            <TouchableOpacity>
              <BellLogo />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
