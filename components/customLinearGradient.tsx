import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/colors";

type linear = {
  children?: React.ReactNode;
};
const CustomLinearGradient = ({ children }: linear) => {
  return (
    <LinearGradient
      colors={[
        colors.primary,
        colors.primary,
        colors.White.lightWhite,
        colors.White.lightWhite,
      ]}
      locations={[0, 0.5, 0.5, 1]}
      style={{
        flex: 1,
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default CustomLinearGradient;
