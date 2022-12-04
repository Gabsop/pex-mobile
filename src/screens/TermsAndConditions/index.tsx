import { LinearGradient } from "expo-linear-gradient";
import React, { useRef } from "react";
import { View, Text } from "react-native";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { styles } from "./styles";
import ScrollViewIndicator from "react-native-scroll-indicator";
import CircleButton from "../../components/CircleButton";

export function TermsAndConditionsScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "#FFFFFF"]}
        start={[0.5, -0.1]}
        end={[0.5, 0.5]}
        style={styles.gradient}
      />
      <View style={styles.termsContainer}>
        <Text style={styles.text}>Última atualização: Outubro/2022</Text>
        <Title>Termos de uso</Title>
        <View style={styles.scrollContainer}>
          <ScrollViewIndicator
            style={styles.scrollView}
            shouldIndicatorHide={false}
            flexibleIndicator={false}
            scrollIndicatorStyle={{
              backgroundColor: "#F09200",
              width: 3,
              zIndex: 2,
            }}
            indicatorHeight={104}
            scrollIndicatorContainerStyle={{
              backgroundColor: "#F2F2F2",
              width: 3,
              zIndex: 2,
            }}
          >
            <Paragraph title="1. Termos">
              Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris
              amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.
              Consequat, eleifend sit consequat amet. Ut hac vulputate tortor,
              tellus sed sapien ut convallis fringilla. Augue arcu sit odio
              proin cras purus, nisl. Tempor nunc phasellus tortor at interdum
              nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi
              non integer non vulputate.
            </Paragraph>
            <Paragraph title="2. Licença de Uso">
              Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris
              amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.
              Consequat, eleifend sit consequat amet. Ut hac vulputate tortor,
              tellus sed sapien ut convallis fringilla. Augue arcu sit odio
              proin cras purus, nisl. Tempor nunc phasellus tortor at interdum
              nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi
              non integer non vulputate. Lorem malesuada tempor imperdiet nulla
              nulla integer et. Tincidunt sit mauris fringilla nunc nibh erat
              quis auctor. Urna auctor molestie lectus sagittis fringilla
              tincidunt. Eget justo, odio sit vulputate velit cursus.
            </Paragraph>
            <Paragraph title="3. Do Aceite do Termo">
              Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris
              amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.
              Consequat, eleifend sit consequat amet. Ut hac vulputate tortor,
              tellus sed sapien ut convallis fringilla. Augue arcu sit odio
              proin cras purus, nisl. Tempor nunc phasellus tortor at interdum
              nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi
              non integer non vulputate.
            </Paragraph>
            <Paragraph title="4. Das Obrigações">
              Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris
              amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.
              Consequat, eleifend sit consequat amet. Ut hac vulputate tortor,
              tellus sed sapien ut convallis fringilla. Augue arcu sit odio
              proin cras purus, nisl. Tempor nunc phasellus tortor at interdum
              nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi
              non integer non vulputate. Lorem malesuada tempor imperdiet nulla
              nulla integer et. Tincidunt sit mauris fringilla nunc nibh erat
              quis auctor. Urna auctor molestie lectus sagittis fringilla
              tincidunt. Eget justo, odio sit vulputate velit cursus.
            </Paragraph>
          </ScrollViewIndicator>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CircleButton direction="down" />
      </View>
    </View>
  );
}
