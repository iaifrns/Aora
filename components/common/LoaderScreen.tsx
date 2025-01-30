import React, { Component } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoaderScreen = () => {
  return (
    <SafeAreaView className="h-full w-full bg-primary">
        <View className="h-full w-full justify-center items-center">
            <Text className="text-white text-2xl">Loading...</Text>
        </View>
    </SafeAreaView>
  );
};

export default LoaderScreen;
