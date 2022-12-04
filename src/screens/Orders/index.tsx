import React from "react";
import { View, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import ActionButton from "../../components/ActionButton";
import Order from "../../components/Order";

export function OrdersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.buttonsContainer}>
          <View style={{ width: 160 }}>
            <ActionButton
              style={{
                height: 40,
              }}
            >
              Recebidas
            </ActionButton>
          </View>
          <View style={{ width: 160 }}>
            <ActionButton
              style={{
                height: 40,
              }}
              white
            >
              Aguardando
            </ActionButton>
          </View>
        </View>
        <ScrollView style={styles.ordersContainer}>
          <Order
            title="Realizada em 23/09/2022"
            order="Compra #FDS639820"
            status={5}
          />
          <Order
            title="Realizada em 22/07/2022"
            order="Compra  #AWS522122"
            status={5}
          />
        </ScrollView>
      </View>
    </View>
  );
}
