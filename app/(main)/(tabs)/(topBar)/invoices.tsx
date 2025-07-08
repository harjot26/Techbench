import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

const Invoices = () => {
  useFocusEffect(() => {
    console.log("FOCUSED: MyScreen Invoice");
    return () => {
      console.log("UNFOCUSED: MyScreen Invoice");
    };
  });

  return (
    <View className={`bg-White-customWhite flex-1`}>
      <Text>Invoices</Text>
    </View>
  );
};

export default Invoices;
