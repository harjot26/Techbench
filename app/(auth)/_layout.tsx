import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "@/constants/colors";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <StatusBar style="light" /> */}
      <Stack.Screen name="login" />
      <Stack.Screen name="forgot" />
      <Stack.Screen name="otpScreen" />
      <Stack.Screen name="newPassword" />
    </Stack>
  );
};

export default AuthLayout;
