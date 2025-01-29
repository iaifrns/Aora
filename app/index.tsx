import CustomButton from "@/components/common/CustomButton";
import LogoComponent from "@/components/common/LogoComponent";
import { images } from "@/constants";
import { Colors } from "@/constants/Colors";
import { ResponseStatus } from "@/enum/ResponseStatus";
import useFirebaseConnection from "@/hooks/useFirebaseConnection";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboading = () => {
  const { message, isConnected } = useFirebaseConnection();

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full items-center px-4 gap-6">
          <LogoComponent />
          <Image
            source={images.cards}
            className="w-[300px] h-[250px]"
            resizeMode="contain"
          />
          <View className="w-full">
            <Text className="text-3xl text-center font-bold text-white">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute w-[120px] h-[15px] right-3 -bottom-2"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm text-gray-100 text-center">
            Where creativivty meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            onPress={() => router.push("/sign-in")}
            customStyle="w-full"
            isLoading={!isConnected}
          />
          <Text
            className={`${
              isConnected == ResponseStatus.SUCCESS
                ? "text-green-400"
                : isConnected == ResponseStatus.ERROR
                ? "text-red-500"
                : "text-white"
            }`}
          >
            {message}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const options = {
  headerShown: false,
};
export default Onboading;
