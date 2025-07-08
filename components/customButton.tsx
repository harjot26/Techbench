import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { buttonType } from "@/types/type";
import { getPlatForm } from "@/utils/platForm";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

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
      className={twMerge(
        clsx(
          ` w-full h-14 rounded-md flex justify-center items-center bg-buttonColor border border-buttonColor `,
          className
        )
      )}
      style={[styleSheet, {}]}
    >
      <Text
        // className={` ${getPlatForm(
        //   "medium"
        // )} text-sm lg:text-lg text-White-customWhite ${classNameText}`}
        // style={[styleSheetText, {}]}

        className={twMerge(
          clsx(
            ` ${getPlatForm(
              "medium"
            )} text-sm lg:text-lg text-White-customWhite`,
            classNameText
          )
        )}
        style={[styleSheetText, {}]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
