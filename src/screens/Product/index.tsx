import React, { useEffect, useRef, useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel-v4";
import {
  View,
  Dimensions,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { ProductImageCard } from "../../components/ProductImageCard";
import { Products } from "../../data/Products";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import ActionButton from "../../components/ActionButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../../routes/AppStack";
import ProductDetailsModal from "../../components/ProductDetailsModal";
import AddedToCartModal from "../../components/AddedToCartModal";

const { width: screenWidth } = Dimensions.get("window");

export function ProductScreen(props) {
  const { navigate } = useNavigation<StackNavigationProp<AppStackParamList>>();
  let { logoPressed } = props.route.params;

  const productIndex = props.route.params.index;
  const product = Products[productIndex];

  const carouselRef = useRef(null);
  const [index, setIndex] = React.useState(productIndex);
  const [ProductModalVisible, setProductModalVisible] = useState(false);
  const [CartModalVisible, setCartModalVisible] = useState(false);
  const images = product.images.map((image) => {
    return { source: image };
  });

  useEffect(() => {
    if (logoPressed) {
      setCartModalVisible(true);
    }
  }, [props.route.params]);

  return (
    <View style={styles.container}>
      <ProductDetailsModal
        modalVisible={ProductModalVisible}
        setModalVisible={setProductModalVisible}
        title={product.title}
        category={product.category}
        images={images}
        information={product.information}
        description={product.description}
        otherInformations={product.otherInformations}
        details={product.details}
      />
      <AddedToCartModal
        modalVisible={CartModalVisible}
        setModalVisible={setCartModalVisible}
      />

      <View style={styles.carouselContainer}>
        <Carousel
          vertical={false}
          ref={carouselRef}
          sliderWidth={screenWidth}
          itemWidth={311}
          data={images}
          onSnapToItem={(index) => setIndex(index)}
          renderItem={ProductImageCard}
          hasParallaxImages={true}
        />
        <View style={styles.pagination}>
          <Pagination
            dotsLength={images.length}
            activeDotIndex={index}
            carouselRef={carouselRef}
            inactiveDotOpacity={0.2}
            inactiveDotScale={1}
            animatedFriction={50}
            animatedDuration={300}
            dotStyle={{
              width: 5,
              height: 5,
              borderRadius: 5,
              backgroundColor: "#000000",
            }}
            dotContainerStyle={{
              marginHorizontal: 2,
              width: 5,
              height: 5,
            }}
            containerStyle={{
              position: "absolute",
              right: -5,
              top: -22,
            }}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Subtitle style={{ fontFamily: "Jakarta Semibold" }}>
          {product.category.toUpperCase()}
        </Subtitle>
        <Title numberOfLines={2} style={{ textAlign: "left" }}>
          {product.title.toUpperCase()}
        </Title>
      </View>
      <View style={styles.informationsContainer}>
        <TouchableOpacity
          style={{ alignItems: "flex-start" }}
          onPress={() => setProductModalVisible(!ProductModalVisible)}
        >
          <Title style={{ fontSize: 14 }}>Informações</Title>
          <Text style={styles.text}>{product.information}</Text>
        </TouchableOpacity>
      </View>
      <ActionButton
        style={{
          position: "absolute",
          bottom: 45,
          width: 330,
          right: 32,
          left: 32,
        }}
        onPress={() => navigate("Checkout")}
      >
        Comprar Agora
      </ActionButton>
    </View>
  );
}
