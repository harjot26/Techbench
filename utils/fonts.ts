import { useFonts as useGoogleFonts } from "expo-font";
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import {
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light_Italic,
  Poppins_400Regular_Italic,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

const useAppFonts = () => {
  const [loaded, error] = useGoogleFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
    "Satoshi Variable": require("../assets/fonts/Satoshi Variable.ttf"),
  });
  return [loaded, error] as const;
};

export default useAppFonts;
