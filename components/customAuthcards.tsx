import { View, Text } from "react-native";
import React from "react";

type prop = {
  children?: React.ReactNode;
  className?: {};
};

const CustomAuthCards = ({ children, className }: prop) => {
  return (
    <View
      className={`${className} w-full h-fit justify-center bg-White-customWhite bg-cyan-300. rounded-xl px-5 py-4 sm:gap-4 lg:gap-5`}
    >
      {children}
    </View>
  );
};

export default CustomAuthCards;
