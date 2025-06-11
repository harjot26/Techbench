import { View, Text, Platform } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

const { width: Screen_Width, height: Screen_Height } = Dimensions.get("screen");

type props = {
  children?: React.ReactNode;
  className?: {};
};

const CustomAuthMainLayout = ({ children, className }: props) => {
  return (
    // <View
    //   className={`${className} ${
    //     Platform.OS === "ios" ? "sm:mt-[8%]" : "sm:mt-[6%]"
    //   } md:mt-[15%] flex-1 items-center  px-5 sm:gap-2`}
    // >
    <View
      className={`${className}  flex-1  justify-center items-center  px-5`}
      // style={{
      //   marginTop:
      //     Platform.OS === "ios" ? Screen_Height * 0.05 : Screen_Height * 0.03,
      // }}
    >
      {children}
    </View>
  );
};

export default CustomAuthMainLayout;
