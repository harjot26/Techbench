import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { buttonType } from "@/types/type";
import { getPlatForm } from "@/utils/platForm";

const CustomButton = ({
  text,
  className,
  classNameText,
  styleSheet,
  styleSheetText,
  handlePress,
}: buttonType) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${className} w-full h-14 rounded-md flex justify-center items-center bg-buttonColor border border-buttonColor`}
      style={[styleSheet, {}]}
    >
      <Text
        className={`${classNameText} ${getPlatForm(
          "medium"
        )} text-sm lg:text-lg text-White-customWhite`}
        style={[styleSheetText, {}]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
