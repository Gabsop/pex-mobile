import React from "react";
import { View, Pressable, Image } from "react-native";
import Title from "../Title";
import Rocket from "../../assets/images/Rocket.png";
import { styles } from "./styles";
import Subtitle from "../Subtitle";
import ActionButton from "../ActionButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../../routes/AppStack";
import Modal from "react-native-modal";

interface AddedToCartModal {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddedToCartModal({
  modalVisible,
  setModalVisible,
}: AddedToCartModal) {
  const { navigate } = useNavigation<StackNavigationProp<AppStackParamList>>();

  return (
    <Modal
      style={styles.modal}
      isVisible={modalVisible}
      onBackButtonPress={() => setModalVisible(false)}
      onBackdropPress={() => setModalVisible(false)}
      useNativeDriverForBackdrop
    >
      <Pressable
        style={styles.hideModal}
        onPress={() => setModalVisible(false)}
      />
      <View style={styles.modalView}>
        <Image
          source={Rocket}
          style={[styles.image, { marginBottom: 40 }]}
          resizeMode="stretch"
        />
        <Title>Adicionado ao Carrinho</Title>
        <Subtitle style={{ textAlign: "center" }}>
          Clique no botão de finalizar para solicitar sua cotação ou continue
          navegando pela PEX
        </Subtitle>
        <View style={styles.buttonsContainer}>
          <ActionButton onPress={() => navigate("Home")} white>
            Continuar comprando
          </ActionButton>
          <ActionButton>Finalizar cotação</ActionButton>
        </View>
      </View>
    </Modal>
  );
}
