import { icons } from "@/constants";
import { FormComponentType } from "@/types/formComponent";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
const InputComponent: React.FC<FormComponentType> = ({
  title,
  value,
  onChange,
  placeholder,
  keyboardType,
  isPassword = false,
}) => {
  const [isHidden, setIsHidden] = React.useState(true);

  const handleIsHidden = () => setIsHidden(!isHidden);

  return (
    <View>
      <Text className="text-lg text-white font-pmedium"> {title}: </Text>
      <View className="w-full h-14 p-2 bg-black-100 border-2 border-black-200 flex-row items-center justify-between rounded-lg">
        <TextInput
          className="h-full text-white w-[80%]"
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && isHidden}
        />
        {isPassword && (
          <TouchableOpacity onPress={handleIsHidden}>
            {isHidden ? (
              <Image
                source={icons.eyeHide}
                className="w-[24px] h-[24px]"
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.eye}
                className="w-[24px] h-[24px]"
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputComponent;
