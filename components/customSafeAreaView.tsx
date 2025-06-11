import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type props = {
  children?: React.ReactNode;
};

const CustomSafeAreaView = ({ children }: props) => {
  return (
    <SafeAreaView
      className={`w-full flex-1 flex flex-col justify-start items-center bg-White-customWhite gap-4 mt-[2%] bg-cyan-300.`}
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
