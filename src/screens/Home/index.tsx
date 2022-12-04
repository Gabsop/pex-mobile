import React from "react";
import { View, ScrollView, Image } from "react-native";

import BannerCarousel from "../../components/BannerCarousel";
import CategoriesButton from "../../components/CategoriesButton";

import Title from "../../components/Title";
import { styles } from "./styles";
import ProductCard from "../../components/ProductCard";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Images, Banners, Categories } from "./data";
import { Products } from "../../data/Products";

export function HomeScreen({ navigation }: BottomTabBarProps) {
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <BannerCarousel />
        <Title style={{ fontSize: 14, marginTop: 10 }}>Categorias</Title>
        <View style={styles.categoriesContainer}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
            style={styles.scrollView}
            horizontal={true}
          >
            {Categories.map((category) => (
              <CategoriesButton
                key={category.index}
                text={category.text}
                sale={category.sale}
                selected={category.index === selectedCategory}
                onPress={() => setSelectedCategory(category.index)}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.productsContainer}>
          <Title style={{ fontSize: 14 }}>Produtos Populares</Title>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Products.map((product, index) => (
              <ProductCard
                key={index}
                index={index}
                title={product.title}
                category={product.category}
                source={product.images[0]}
                navigation={navigation}
              />
            ))}
          </ScrollView>
          <View style={styles.brandsContainer}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ display: "flex", alignItems: "center" }}
              horizontal
            >
              {Images.map((image, index) => (
                <Image
                  key={index}
                  source={image.source}
                  style={{
                    marginRight: 30,
                    marginBottom: 10,
                    width: image.width,
                    height: image.height,
                  }}
                  resizeMode="stretch"
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.bannersContainer}>
          {Banners.map((banner, index) => (
            <Image
              key={index}
              source={banner.source}
              style={{
                width: "100%",
                height: 146,
                marginBottom: index != Banners.length ? 2 : 0,
              }}
              resizeMode="stretch"
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
