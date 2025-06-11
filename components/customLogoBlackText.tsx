import { Image } from "react-native";
import React from "react";
import image from "@/constants/image";

const CustomLogoBlackText = () => {
  return (
    <Image
      source={image.logoTextBlack}
      className="w-[44%] h-6 lg:h-8 lg:w-[50%] rounded-sm"
    />
  );
};

export default CustomLogoBlackText;
