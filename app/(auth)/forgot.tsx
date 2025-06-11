import { View, Text } from "react-native";
import React, { useState } from "react";
import CustomLinearGradient from "@/components/customLinearGradient";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTitleText from "@/components/customTitleText";
import CustomLogoWhiteText from "@/components/customLogoWhiteText";
import { CustomInputField, Icons } from "@/components/customInputField";
import CustomButton from "@/components/customButton";
import { router } from "expo-router";
import CustomAuthMainLayout from "@/components/customAuthMainLayout";
import CustomAuthCards from "@/components/customAuthcards";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView
      className={`bg-primary flex-1`}
      edges={["top", "right", "left"]}
    >
      <CustomLinearGradient>
        <CustomAuthMainLayout className={``}>
          <View className={`relative rounded-xl w-full min-h-fit h-fit `}>
            <View
              className={` absolute -top-52  w-full h-fit flex justify-center items-center gap-4`}
            >
              <CustomLogoWhiteText />
              <CustomTitleText
                title="Forgot Password"
                text="Please enter you email to reset the password"
              />
            </View>

            <CustomAuthCards className={``}>
              <View
                className={`w-full  px-3 flex-row border rounded-md border-Grey-customGrey h-14`}
              >
                <Icons
                  name="mail"
                  family="feather"
                  size={18}
                  className={` w-[15%] text-center self-center py-3`}
                />
                <CustomInputField
                  placeholder="example@example"
                  value={email}
                  onChangeText={(txt: string) => setEmail(txt)}
                  className={` border-white flex-1`}
                />
              </View>
              <CustomButton
                text="Send"
                handlePress={() => router.push("/(auth)/otpScreen")}
              />
            </CustomAuthCards>
          </View>
        </CustomAuthMainLayout>
      </CustomLinearGradient>
    </SafeAreaView>
  );
};

export default ForgotPassword;
