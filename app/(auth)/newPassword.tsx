import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import CustomLinearGradient from "@/components/customLinearGradient";
import CustomLogoWhiteText from "@/components/customLogoWhiteText";
import CustomTitleText from "@/components/customTitleText";
import CustomAuthMainLayout from "@/components/customAuthMainLayout";
import CustomAuthCards from "@/components/customAuthcards";
import CustomButton from "@/components/customButton";
import { CustomInputField, Icons } from "@/components/customInputField";
import { router } from "expo-router";

const NewPassword = () => {
  const [passwordVisibile, setPasswordVisibile] = useState(true);
  const [passwordVisibile2, setPasswordVisibile2] = useState(true);

  const handleIconChange = () => {
    setPasswordVisibile((prev) => !prev);
  };
  return (
    <SafeAreaView
      className={"flex-1 bg-primary"}
      edges={["top", "left", "right"]}
    >
      <CustomLinearGradient>
        <CustomAuthMainLayout className={``}>
          <View className={`relative w-full min-h-fit h-fit rounded-xl `}>
            <View
              className={` absolute -top-52 w-full h-fit flex justify-center items-center gap-4`}
            >
              <CustomLogoWhiteText />
              <CustomTitleText
                title="Set a new password"
                text="Create a new password. Ensures it differ from previous ones for security"
              />
            </View>

            <CustomAuthCards className={``}>
              <View
                className={`h-14 w-full rounded-xl bg-White-customWhite border border-Grey-customGrey px-4 flex flex-row items-center`}
              >
                <Icons
                  name="lock-closed-outline"
                  family="ion"
                  size={16}
                  className={`w-[10%] text-center`}
                />
                <CustomInputField
                  placeholder="Enter your new password"
                  className={`flex-1 border-white`}
                  secureTextEntry={passwordVisibile}
                />

                <TouchableOpacity className={``} onPress={handleIconChange}>
                  {passwordVisibile ? (
                    <Icons
                      name="eye-off"
                      family="materialCommunity"
                      size={18}
                      color="#4C4A53"
                    />
                  ) : (
                    <Icons
                      name="eye-outline"
                      family="materialCommunity"
                      size={18}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <View
                className={`h-14 w-full rounded-xl bg-White-customWhite border border-Grey-customGrey px-4 flex flex-row items-center`}
              >
                <Icons
                  name="lock-closed-outline"
                  family="ion"
                  size={16}
                  className={`w-[10%] text-center`}
                />
                <CustomInputField
                  placeholder="Confirm your new password"
                  className={`flex-1 border-white`}
                  secureTextEntry={passwordVisibile2}
                />

                <TouchableOpacity
                  className={``}
                  onPress={(prev) => setPasswordVisibile2((prev) => !prev)}
                >
                  {passwordVisibile2 ? (
                    <Icons
                      name="eye-off"
                      family="materialCommunity"
                      size={18}
                      color="#4C4A53"
                    />
                  ) : (
                    <Icons
                      name="eye-outline"
                      family="materialCommunity"
                      size={18}
                    />
                  )}
                </TouchableOpacity>
              </View>

              <CustomButton
                text="Update Password"
                handlePress={() => router.push("/login")}
              />
            </CustomAuthCards>
          </View>
        </CustomAuthMainLayout>
      </CustomLinearGradient>
    </SafeAreaView>
  );
};

export default NewPassword;
