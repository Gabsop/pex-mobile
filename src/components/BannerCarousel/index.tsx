import React from "react";
import { ScrollView, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel-v4";
import Banner from "../Banner";
import styles from "./styles";
import CarouselItems from "./data";

export default function BannerCarousel() {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(1);

  return (
    <ScrollView style={styles.container}>
      <Carousel
        vertical
        layout={"stack"}
        data={CarouselItems}
        ref={isCarousel}
        renderItem={Banner}
        onSnapToItem={(index) => setIndex(index)}
        sliderHeight={200}
        itemHeight={300}
      />
      <View style={styles.pagination}>
        <Pagination
          vertical
          dotsLength={CarouselItems.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 5,
            height: 5,
            borderRadius: 5,
            marginVertical: 3,
            backgroundColor: "#FFFFFF",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
          tappableDots={true}
        />
      </View>
    </ScrollView>
  );
}
