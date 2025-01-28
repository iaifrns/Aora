import { IconType } from "@/types/icon";
import React from "react";
import { Image, Text, View } from "react-native";

export const IconDisplay: React.FC<IconType> = ({
  icon,
  color,
}) => {
  return (
    <View style={{alignItems: "center", gap: 2, justifyContent: "center", width: 100}}>
        <Image source={icon} style={{width: 24, height: 24}} tintColor={color} resizeMode="contain" />
        {/* <Text style={{fontSize: 10, fontFamily: focused ? 'Poppins-SemiBold' : 'Poppins-Regular', color: color}}>{name}</Text> */}
    </View>
  );
};
