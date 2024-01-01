import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider";
import Excerise from "../components/Excerise";

export default function HomeScreen() {
  return (
    <ScrollView>
      <SafeAreaView className="flex-1 p-3">
        <StatusBar style="auto" />

        {/* Top section */}
        <View className="flex items-start flex-row justify-between gap-2 mb-6">
          <Text
            className="font-bold uppercase tracking-widest"
            style={{ fontSize: hp(6) }}
          >
            Ready to <Text className="text-rose-600">workout</Text>
          </Text>

          <View className="flex flex-row items-center gap-4">
            <Ionicons name="notifications" size={hp(5)} color="gray" />
            <Image
              source={require("../../assets/avatar.png")}
              style={{ height: hp(6), width: hp(6) }}
              className="rounded-full"
            />
          </View>
        </View>

        {/* Slider section */}
        <View>
          <ImageSlider />
        </View>

        {/* Exercise */}
        <View>
          <Excerise />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
