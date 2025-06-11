import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const SubDataLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="shortList" />
      <Stack.Screen name="procurement" />
      <Stack.Screen name="purchaseOrders" />
      <Stack.Screen name="invoices" />
      <Stack.Screen name="subUsers" />
      <Stack.Screen name="managerProfile" />
      <Stack.Screen name="feedback" />
      <Stack.Screen name="escalation" />
      <Stack.Screen name="revision" />
    </Stack>
  );
};

export default SubDataLayout;
