import { icons } from "@/constants";
import React from "react";
import { Image, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text className="text-3xl text-center border"> textInComponent </Text>
      <Image source={icons.home} className="w-7 h-7" resizeMode="contain" tintColor={'rgba(0,0,0)'}  />
    </View>
  );
};

export default HomeScreen;
