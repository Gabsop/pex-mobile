import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import Title from "../Title";
import Subtitle from "../Subtitle";
import { ProgressDeliverBar } from "../../assets/svg/ProgressDeliverBar";

interface OrderProps {
  title: string;
  order: string;
  status: 1 | 2 | 3 | 4 | 5;
}

export default function Order({ title, order, status }: OrderProps) {
  return (
    <View style={styles.order}>
      <View style={styles.orderHeader}>
        <View style={styles.orderHeaderTextContainer}>
          <Subtitle style={{ fontFamily: "Jakarta Semibold" }}>
            {order}
          </Subtitle>
          <Title
            style={{
              fontFamily: "Jakarta Bold",
              textAlign: "left",
              fontSize: 15,
            }}
          >
            {title}
          </Title>
        </View>
        <Entypo name="chevron-small-right" size={30} color="#999999" />
      </View>
      <View style={styles.orderSteps}>
        <View style={styles.stepTextContainer}>
          <Text
            style={[
              styles.stepText,
              { marginHorizontal: 5 },
              status === 1 ? { color: "#000000" } : {},
            ]}
          >
            Realizada
          </Text>
          <Text
            style={[
              styles.stepText,
              { marginHorizontal: 5 },
              status === 2 ? { color: "#000000" } : {},
            ]}
          >
            Distribuindo
          </Text>
          <Text
            style={[
              styles.stepText,
              { marginHorizontal: 2 },
              status === 3 ? { color: "#000000" } : {},
            ]}
          >
            Cotando
          </Text>
          <Text
            style={[
              styles.stepText,
              { marginHorizontal: 13 },
              status === 4 ? { color: "#000000" } : {},
            ]}
          >
            Cotada
          </Text>
          <Text
            style={[
              styles.stepText,
              { marginHorizontal: 1 },
              status === 5 ? { color: "#000000" } : {},
            ]}
          >
            Finalizada
          </Text>
        </View>
        <View>
          <ProgressDeliverBar />
        </View>
      </View>
    </View>
  );
}
