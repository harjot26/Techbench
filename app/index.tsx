import { colors } from "@/constants/colors";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import CustomSafeAreaView from "@/components/customSafeAreaView";
import CustomLayoutBox from "@/components/customAuthcards";
import CustomTitleText from "@/components/customTitleText";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      className={`flex-1 bg-primary`}
      edges={["top", "left", "right"]}
    >
      <LinearGradient
        colors={[
          colors.primary,
          colors.primary,
          colors.White.customWhite,
          colors.White.customWhite,
        ]}
        locations={[0, 0.5, 0.5, 1]}
        style={{
          flex: 1,
        }}
      >
        {/* <StatusBar style="light" backgroundColor={colors.primary} /> */}
        <Link href={"/(auth)/login"} className={`text-white`}>
          Login
        </Link>

        <CustomTitleText
          title="Sign into our account to use"
          text="This will be a nice experience for your life in a development way!"
        />
      </LinearGradient>
    </SafeAreaView>
  );
}
