import { View, Text } from "react-native";
import React from "react";
import { getPlatForm } from "@/utils/platForm";
import { titleTextType } from "@/types/type";
import { Dimensions } from "react-native";

const { width: Screen_Width } = Dimensions.get("window");

const CustomTitleText = ({ title, text }: titleTextType) => {
  return (
    <View
      className={`  bg-sky-400. flex justify-center items-center sm:gap-4 py-2`}
      style={{ width: Screen_Width * 0.7 }}
    >
      <Text
        className={`${getPlatForm(
          "bold"
        )} sm:text-3xl lg:text-4xl text-White-semiWhite text-center`}
      >
        {title}
      </Text>
      <Text
        className={`${getPlatForm(
          "medium"
        )} sm:text-xs lg:text-base text-White-semiWhite text-center`}
      >
        {text}
      </Text>
    </View>
  );
};

export default CustomTitleText;
