import { icons } from "@/constants";
import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

const SearchBarComponent = () => {
  return (
    <View className="flex-row justify-between items-center border-2 border-gray-500 rounded-lg p-3" style={{backgroundColor: "#1E1E2D"}}>
      <TextInput className="w-[80%] text-white font-pregular" placeholder="Search a video topic" />
      <TouchableOpacity>
        <Image source={icons.search} style={{width: 24, height: 24}} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBarComponent;
