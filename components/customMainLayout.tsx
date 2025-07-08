import { View, Text } from "react-native";
import React, { Children } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type prop = {
  children?: React.ReactNode;
  className?: {};
};
const CustomMainLayout = ({ children, className }: prop) => {
  return (
    <View className={` flex-1 bg-White-customWhite px-5 gap-4 ${className}`}>
      {children}
    </View>
  );
};

export default CustomMainLayout;
