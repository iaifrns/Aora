import { images } from "@/constants";
import { EmptyListComponentType } from "@/types/emptyListComponentType";
import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyListComponent: React.FC<EmptyListComponentType> = ({
  title,
  subTitle,
  buttonText,
}) => {
  return (
    <View className="items-center justify-center w-full px-4 gap-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[200px]"
        resizeMode="contain"
      />
      <Text className="text-xl text-center font-psemibold text-white">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subTitle}</Text>
      <CustomButton title={buttonText} onPress={() => router.push("/create")} customStyle="w-full" />
    </View>
  );
};

export default EmptyListComponent;
