import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomLinearGradient from "@/components/customLinearGradient";
import CustomLogoWhiteText from "@/components/customLogoWhiteText";
import CustomTitleText from "@/components/customTitleText";
import { CustomInputField, Icons } from "@/components/customInputField";
import CustomButton from "@/components/customButton";
import { Link, router } from "expo-router";
import { getPlatForm } from "@/utils/platForm";
import CustomAuthMainLayout from "@/components/customAuthMainLayout";
import CustomAuthCards from "@/components/customAuthcards";

const OtpScreen = () => {
  return (
    <SafeAreaView
      className={"flex-1 bg-primary"}
      edges={["top", "left", "right"]}
    >
      <CustomLinearGradient>
        <CustomAuthMainLayout className={``}>
          <View className={`relative w-full min-h-fit h-fit rounded-xl`}>
            <View
              className={"w-full absolute -top-56 h-fit items-center gap-4"}
            >
              <CustomLogoWhiteText />
              <CustomTitleText
                title="Check your email"
                text="we sent a reset link to sarah.jansen@gmail.com..com enter 5 digit code that mentioned in the email"
              />
            </View>

            <CustomAuthCards className={``}>
              <View className={` flex justify-evenly flex-row w-full`}>
                <View className={"w-[15%] rounded-2xl h-12"}>
                  <CustomInputField />
                </View>

                <View className={"w-[15%] rounded-xl h-12"}>
                  <CustomInputField />
                </View>

                <View className={"w-[15%] rounded-2xl h-12"}>
                  <CustomInputField />
                </View>

                <View className={"w-[15%] rounded-xl h-12"}>
                  <CustomInputField />
                </View>

                <View className={"w-[15%] rounded-xl h-12"}>
                  <CustomInputField />
                </View>
              </View>

              <CustomButton
                text="Verify Code"
                handlePress={() => router.push("/(auth)/newPassword")}
              />

              <View
                className={`flex flex-row w-full justify-center bg-lime-200.`}
              >
                <Text
                  className={`${getPlatForm(
                    "medium"
                  )} text-Black-secondaryBlack text-sm `}
                >
                  Haven't got the email yet?
                </Text>
                <Link
                  href={"/"}
                  className={`text-primary underline ${getPlatForm(
                    "medium"
                  )} text-sm`}
                >
                  Resend email
                </Link>
              </View>
            </CustomAuthCards>
          </View>
        </CustomAuthMainLayout>
      </CustomLinearGradient>
    </SafeAreaView>
  );
};

export default OtpScreen;
