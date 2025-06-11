import { View, Text, Image } from "react-native";
import React from "react";
import CustomLogoBlackText from "@/components/customLogoBlackText";
import image from "@/constants/image";
import { getPlatformSemi } from "@/utils/platForm";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

type props = {
  children?: React.ReactNode;
};
const Header = ({ children }: props) => {
  const { width } = useWindowDimensions();
  const fontSize = width >= 430 ? 10 : 8;

  return (
    <View
      className={`w-full flex flex-row bg-pink-300. items-center justify-between px-5`}
    >
      <CustomLogoBlackText />

      <View className={`flex flex-row items-center gap-2 bg-lime-200.`}>
        <Image
          source={image.userImage1}
          className="w-6 h-6 rounded-full lg:w-8 lg:h-8"
          resizeMode="cover"
        />
        <View className={`flex flex-col`}>
          <Text
            className={`${getPlatformSemi(
              "semibold"
            )} text-Grey-thirdGrey text-sm lg:text-lg `}
          >
            Jacob Jones
          </Text>
          <Text
            className={`font-light text-Grey-thirdGrey`}
            style={{
              fontSize,
            }}
          >
            ID: C#000003
          </Text>
        </View>
        <Ionicons name="notifications-outline" size={width >= 430 ? 20 : 16} />
      </View>
    </View>
  );
};

export default Header;
