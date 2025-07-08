import { View, Text, TextInput } from "react-native";
import React, { forwardRef } from "react";
import { inputFieldType } from "@/types/type";
import { colors } from "@/constants/colors";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

//* Initializing the short name for the icons for our use:
type Family =
  | "antDesign"
  | "entypo"
  | "evil"
  | "feather"
  | "fa"
  | "fa5"
  | "fa6"
  | "fontisto"
  | "foundation"
  | "ion"
  | "materialCommunity"
  | "material"
  | "octi"
  | "simpleLine"
  | "Zocial";

//* initializing the type for the properties of icons
type props = {
  name: string;
  family?: Family;
  size?: number;
  color?: string;
  style?: object;
  className?: string;

  /** any touchable / view props you want to forward */
  [key: string]: any;
};

//* Map the short family code to actual component
const familyMap: Record<Family, any> = {
  antDesign: AntDesign,
  entypo: Entypo,
  evil: EvilIcons,
  feather: Feather,
  fa: FontAwesome,
  fa5: FontAwesome5,
  fa6: FontAwesome6,
  fontisto: Fontisto,
  foundation: Foundation,
  ion: Ionicons,
  materialCommunity: MaterialCommunityIcons,
  material: MaterialIcons,
  octi: Octicons,
  simpleLine: SimpleLineIcons,
  Zocial: Zocial,
};

const Icons = ({ family = "feather", size, color, ...props }: props) => {
  const IconSet = familyMap[family] ?? Feather;

  return (
    <IconSet size={size ?? 24} color={color ?? colors.primary} {...props} />
  );
};

const CustomInputField = forwardRef<TextInput, inputFieldType>((props, ref) => {
  const {
    placeholder,
    value,
    onChangeText,
    className,
    classNameText,
    styleSheet,
    styleSheetText,
    secureTextEntry,
    ...rest
  } = props;

  return (
    <TextInput
      ref={ref}
      placeholder={placeholder}
      placeholderTextColor={colors.Grey.customGrey}
      value={value}
      onChangeText={onChangeText}
      style={[styleSheet, { paddingVertical: 0 }]}
      secureTextEntry={secureTextEntry}
      className={twMerge(
        clsx(
          `border border-Grey-customGrey w-full h-full bg-White-customWhite rounded-md text-Black-thirdBlack text-base leading-5 py-3 px-2`,
          className
        )
      )}
      {...rest}
    />
  );
});

export { Icons, CustomInputField };
