import React from "react";
import HomeHeader from "../components/HomeHeader";
import { HomeScreen } from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/Profile";
import HomeFooter from "../components/HomeFooter";
import Header from "../components/Header";
import { CartScreen } from "../screens/Cart";
import { BookmarkLogo } from "../assets/svg/BookmarkLogo";
import { ProductScreen } from "../screens/Product";
import { CheckoutScreen } from "../screens/Checkout";
import { OrdersScreen } from "../screens/Orders";

const Tab = createBottomTabNavigator();

export type AppStackParamList = {
  Home: undefined;
  Profile: undefined;
  Cart: undefined;
  Product: undefined;
  Checkout: undefined;
  Orders: undefined;
};

export function AppStack() {
  return (
    <Tab.Navigator tabBar={(props) => <HomeFooter {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <HomeHeader />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => <HomeHeader noIcons />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          header: () => <Header title="Carrinho" backTo="Home" />,
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          header: () => <Header backTo="Home" logo={<BookmarkLogo />} />,
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          header: () => <Header title="Compra" backTo="Home" />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          header: () => <Header title="Compras" backTo="Home" />,
        }}
      />
    </Tab.Navigator>
  );
}
