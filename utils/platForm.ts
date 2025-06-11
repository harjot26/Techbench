import { Platform } from "react-native";

// const getPlatformSimple = () => {
//   if (Platform.OS === "ios") {
//     ("font-satoshi");
//   } else {
//     ("font-poppinsRegular");
//   }
// };

const getPlatformSimple =
  Platform.OS === "ios" ? "font-satoshi font-normal" : "font-poppinsRegular";

const getPlatForm = (weight = "medium") => {
  if (Platform.OS === "ios") {
    return weight === "bold"
      ? "font-satoshi font-bold"
      : "font-satoshi font-medium";
  } else {
    return weight === "bold" ? "font-poppinsBold" : "font-poppinsMedium";
  }
};

const getPlatformSemi = (weight = "semibold") => {
  if (Platform.OS === "ios") {
    return weight === "extrabold"
      ? "font-satoshi font-extrabold"
      : "font-satoshi font-semibold";
  } else {
    return weight === "extrabold"
      ? "font-poppinsExtraBold"
      : "font-poppinsSemiBold";
  }
};

export { getPlatformSimple, getPlatForm, getPlatformSemi };
