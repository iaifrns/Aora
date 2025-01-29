import { images } from "@/constants";
import React from "react";
import { Image } from "react-native";

const LogoComponent = () => {
  return (
    <Image
      source={images.logo}
      className="w-[130px] h-[84px]"
      resizeMode="contain"
    />
  );
};

export default LogoComponent;
