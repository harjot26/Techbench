import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import Header from "./header";
import TopNavbar from "./topNavbar";
import CustomSafeAreaView from "@/components/customSafeAreaView";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BottomBar from "./bottomBar";

const RootLayout = () => {
  return (
    <>
      <CustomSafeAreaView>
        {/* <Text>11</Text> */}
        <StatusBar style="dark" />
        <Header />
        {/* <Text>22</Text> */}
        <TopNavbar />

        <View className={`w-full flex-grow mt-auto`}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          ></Stack>
        </View>

        {/* <Text className="w-full flex-grow bg-rose-400">33</Text> */}
        {/* <Text className="mt-auto h-10">44</Text> */}
      </CustomSafeAreaView>
      <BottomBar />
    </>
  );
};

export default RootLayout;
