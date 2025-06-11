import { Image } from "react-native";
import React from "react";
import image from "@/constants/image";
import { Dimensions } from "react-native";

const { width: Screen_Width, height: Screen_Height } = Dimensions.get("window");
console.log(Screen_Width);
console.log("Height:", Screen_Height);

const CustomLogoWhiteText = () => {
  return (
    <Image
      source={image.logoTextWhite}
      // className="w-[44%] h-6  "
      // style={{ width: Screen_Width * 0.44, height: 24, alignSelf: "center" }}
      className={`w-[45%] h-7 lg:w-[60%] lg:h-8 bg-sky-200.`}
      resizeMode="contain"
    />
  );
};

export default CustomLogoWhiteText;
