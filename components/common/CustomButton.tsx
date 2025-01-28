import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton: React.FC<ButtonType> = ({
  title,
  customStyle,
  customTextStyle,
  isLoading = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-lg p-2 ${customStyle} ${
        isLoading && "opacity-50"
      }`}
      //disabled={isLoading}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text className={`text-primary text-center text-lg font-psemibold ${customTextStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
