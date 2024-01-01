import React from "react";
import { Text, View, Image, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center  justify-end">
      <StatusBar style="auto" />
      <Image
        source={require("../../assets/welcome.png")}
        className="w-full h-full absolute"
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end items-center pb-32"
      >
        <View className="flex items-center justify-center gap-8">
          <Animated.View entering={FadeInDown.delay(200).springify()}>
            <Text
              className="text-white font-bold"
              style={{ fontSize: hp(4.5) }}
            >
              Best Workouts For You
            </Text>
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(300).springify()}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              className="bg-rose-600 py-3 px-12 rounded-full border-2 border-white"
            >
              <Text
                className="text-white  font-bold"
                style={{ fontSize: hp(3) }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </LinearGradient>
    </View>
  );
}
