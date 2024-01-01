import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const sliderImages = [
  require("../../assets/slide1.png"),
  require("../../assets/slide3.png"),
  require("../../assets/slide2.png"),
  require("../../assets/slide4.png"),
  require("../../assets/slide5.png"),
];

export default function ImageSlider() {
  return (
    <View>
      <Carousel
        data={sliderImages}
        loop={true}
        autoplay={true}
        renderItem={ItemCard}
        hasParallaxImages={true}
        sliderWidth={wp(100)}
        firstItem={1}
        autoplayInterval={5000}
        itemWidth={wp(100) - 70}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};
