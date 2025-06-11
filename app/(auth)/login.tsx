import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/colors";

import CustomTitleText from "@/components/customTitleText";
import { CustomInputField, Icons } from "@/components/customInputField";
import CustomButton from "@/components/customButton";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomLogoWhiteText from "@/components/customLogoWhiteText";
import { getPlatformSemi } from "@/utils/platForm";
import { Link, router } from "expo-router";
import CustomLinearGradient from "@/components/customLinearGradient";
import CustomAuthMainLayout from "@/components/customAuthMainLayout";
import CustomSafeAreaView from "@/components/customSafeAreaView";
import CustomAuthSmallLayoutBox from "@/components/customAuthcards";
import CustomAuthCards from "@/components/customAuthcards";

const Login = () => {
  // const [passwordVisibility, setPasswordVisibility] = useState(true);
  // //   const [eyeIcon, setEyeIcon] = useState("eye-off");
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handlePasswordVisibility = () => {
  //   setPasswordVisibility((prev) => !prev);
  //   // if (eyeIcon === "eye-off") {
  //   //   setEyeIcon("eye-outline");
  //   //   setPasswordVisibility(!passwordVisibility);
  //   // } else if (eyeIcon === "eye-outline") {
  //   //   setEyeIcon("eye-off");
  //   //   setPasswordVisibility(!passwordVisibility);
  //   // }
  // };
  // //   const handleChangePassword = (txt: string) => {
  // //     if (passwordVisibility && txt === "") return;
  // //     setForm((prev) => ({ ...prev, password: txt }));
  // //   };
  // return (
  //   <SafeAreaView
  //     className={`flex-1 bg-primary`}
  //     edges={["top", "left", "right"]}
  //   >
  //     {/* <LinearGradient
  //       colors={[
  //         colors.primary,
  //         colors.primary,
  //         colors.White.semiWhite,
  //         colors.White.semiWhite,
  //       ]}
  //       locations={[0, 0.5, 0.5, 1]}
  //       style={{
  //         flex: 1,
  //       }}
  //     > */}
  //     <CustomLinearGradient>
  //       <StatusBar translucent style="light" />
  //       <View className={`flex-1 items-center mt-[15%] px-5 gap-4`}>
  //         <View className={`w-full items-center gap-4`}>
  //           <CustomLogoWhiteText />
  //           <CustomTitleText
  //             title="Sign in to your Account"
  //             text="Enter your email and password to log in"
  //           />
  //         </View>
  //         <View
  //           className={`bg-White-customWhite px-5 w-full h-72 rounded-xl justify-center flex gap-4`}
  //         >
  //           <View className={`gap-4`}>
  //             <View
  //               className={`w-full  px-3 flex-row border rounded-md border-Grey-customGrey h-14`}
  //             >
  //               <Icons
  //                 name="mail"
  //                 family="feather"
  //                 size={18}
  //                 className={` w-[15%] text-center self-center py-3`}
  //               />
  //               <CustomInputField
  //                 className={` border-white bg-lime-200. flex-1`}
  //                 placeholder="Example@example"
  //               />
  //             </View>
  //             <View
  //               className={`w-full  px-3 flex-row border rounded-md border-Grey-customGrey h-14`}
  //             >
  //               <Icons
  //                 name="lock-closed-outline"
  //                 family="ion"
  //                 size={18}
  //                 className={`w-[15%] text-center self-center py-3`}
  //               />
  //               <CustomInputField
  //                 className={`flex-1 border-white`}
  //                 placeholder="Enter password"
  //                 value={form.password}
  //                 onChangeText={(e: any) => setForm({ ...form, password: e })}
  //                 //   onChangeText={handleChangePassword}
  //                 secureTextEntry={passwordVisibility}
  //                 textContentType="password"
  //                 autoCapitalize="none"
  //                 autoCorrect={false}
  //               />
  //               <TouchableOpacity
  //                 className={`bg-lime-200. justify-center`}
  //                 onPress={handlePasswordVisibility}
  //               >
  //                 {passwordVisibility ? (
  //                   <Icons
  //                     name="eye-off"
  //                     family="materialCommunity"
  //                     size={18}
  //                   />
  //                 ) : (
  //                   <Icons
  //                     name="eye-outline"
  //                     family="materialCommunity"
  //                     size={22}
  //                   />
  //                 )}
  //                 {/* <Icons name={eyeIcon} family="materialCommunity" size={18} /> */}
  //               </TouchableOpacity>
  //               {/* <CustomPasswordInput
  //                 value={form.password}
  //                 onChangeText={(e: any) => setForm({ ...form, password: e })}
  //                 secureTextEntry
  //               /> */}
  //               {/* <Icons
  //                 name="eye-off"
  //                 family="materialCommunity"
  //                 size={18}
  //                 className={`w-[15%] text-center self-center py-3`}
  //               /> */}
  //             </View>
  //           </View>
  //           <CustomButton text="Log In" />
  //           <Link
  //             href={"/(root)/(auth)/forgot"}
  //             className={`${getPlatformSemi(
  //               "semibold"
  //             )} text-center text-primary underline text-sm`}
  //           >
  //             Forgot password?
  //           </Link>
  //         </View>
  //       </View>
  //     </CustomLinearGradient>
  //     {/* </LinearGradient> */}
  //   </SafeAreaView>
  // );

  const [passwordVisible, setPasswordVisibile] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeIcon = () => {
    setPasswordVisibile((prev) => !prev);
  };

  return (
    <SafeAreaView
      className={`flex-1 bg-primary`}
      edges={["top", "left", "right"]}
    >
      <CustomLinearGradient>
        <StatusBar translucent style="light" />

        <CustomAuthMainLayout className={`bg-yellow-400. `}>
          <View
            className={`bg-lime-200. relative rounded-xl w-full min-h-fit h-fit bg-cyan-200.`}
          >
            <View className="absolute -top-2/3 w-full h-fit flex items-center justify-center gap-2 bg-violet-300.">
              <CustomLogoWhiteText />
              <CustomTitleText
                title="Sign in to your Account"
                text="Enter your email and password to log in"
              />
            </View>

            {/** Custom Card box */}
            <CustomAuthCards className={` bg-pink-200.`}>
              {/** First Input Box */}
              <View
                className={`w-full rounded-xl h-14 bg-White-customWhite flex flex-row items-center px-4 border border-Grey-customGrey`}
              >
                <Icons
                  name="mail"
                  family="feather"
                  size={16}
                  className={`w-[10%]  text-center `}
                />
                <CustomInputField
                  className={` border-white flex-1`}
                  placeholder="Example@example"
                />
              </View>

              {/** First Input Box */}
              <View
                className={`w-full rounded-xl h-14 bg-White-customWhite flex flex-row items-center px-4 border border-Grey-customGrey`}
              >
                <Icons
                  name="lock-closed-outline"
                  family="ion"
                  size={16}
                  className={`w-[10%] text-center`}
                />
                <CustomInputField
                  placeholder="Enter password"
                  className={`border-white flex-1`}
                  secureTextEntry={passwordVisible}
                />

                <TouchableOpacity className={``} onPress={handleChangeIcon}>
                  {passwordVisible ? (
                    <Icons
                      name="eye-off"
                      family="materialCommunity"
                      size={18}
                      color={"#4C4A53"}
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

              {/** Button */}

              <CustomButton
                text="Log in"
                handlePress={() => router.push("/(main)/(tabs)/dashBoard")}
              />

              <Link
                href={"/forgot"}
                style={{}}
                className={`text-primary underline text-center text-sm lg:text-lg ${getPlatformSemi(
                  "semiBold"
                )}`}
              >
                Forgot password?
              </Link>
            </CustomAuthCards>
          </View>
        </CustomAuthMainLayout>
      </CustomLinearGradient>
    </SafeAreaView>
  );
};

export default Login;
