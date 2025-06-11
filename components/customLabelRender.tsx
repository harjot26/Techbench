import { View, Text } from "react-native";
import React from "react";
import { getPlatformSimple } from "@/utils/platForm";

const CustomLabelRender = ({
  label,
  color,
}: {
  label: string;
  color: string;
}) => {
  return (
    <View className={`w-fit flex flex-row items-center bg-pink-200.`}>
      <View
        style={{
          width: 8,
          height: 8,
          backgroundColor: color,
          borderRadius: 1,
          marginRight: 4,
        }}
      ></View>
      <Text
        className={`text-sm ${getPlatformSimple} lg:text-xl text-Black-customBlack`}
      >
        {label}
      </Text>
    </View>
  );
};

export default CustomLabelRender;
