import React from "react";
import { View, Text } from "react-native";
import Title from "../Title";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { ProductProps } from "../../types/product";
import Modal from "react-native-modal";

interface ProductDetailsModalProps extends ProductProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductDetailsModal({
  modalVisible,
  setModalVisible,
  description,
  details,
  otherInformations,
}: ProductDetailsModalProps) {
  return (
    <Modal
      style={styles.modal}
      isVisible={modalVisible}
      onBackButtonPress={() => setModalVisible(false)}
      onBackdropPress={() => setModalVisible(false)}
      useNativeDriverForBackdrop
    >
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <AntDesign
            name="arrowleft"
            size={20}
            color="black"
            onPress={() => setModalVisible(false)}
          />
          <Title numberOfLines={2} style={{ fontSize: 14 }}>
            Detalhes do Produto
          </Title>
          <AntDesign name="arrowleft" size={20} color="transparent" />
        </View>
        <View
          style={[
            styles.descriptionContainer,
            { borderBottomWidth: 1, borderBottomColor: "#F1F0F3" },
          ]}
        >
          <Title style={{ fontSize: 14 }}>Descrição</Title>
          <Text style={styles.text}>{description}</Text>
        </View>
        <View
          style={[
            styles.descriptionContainer,
            {
              borderBottomWidth: 1,
              borderBottomColor: "#F1F0F3",
              height: 200,
            },
          ]}
        >
          <Title style={{ fontSize: 14 }}>Detalhes</Title>
          <View
            style={{
              justifyContent: "flex-start",
            }}
          >
            {details.map((detail, index) => (
              <View
                style={{ flexDirection: "row", marginVertical: 2 }}
                key={index}
              >
                <Text style={[styles.text, { width: 12 }]}>{`\u2022`}</Text>
                <Text style={styles.text}>{detail}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Title style={{ fontSize: 14 }}>Outras informações</Title>
          <View
            style={{
              justifyContent: "flex-start",
            }}
          >
            {otherInformations.map((information, index) => (
              <View style={{ flexDirection: "row" }} key={index}>
                <Text style={styles.text}>{information}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
}
