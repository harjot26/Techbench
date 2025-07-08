import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

const PurchaseOrders = () => {
  useFocusEffect(() => {
    console.log("FOCUSED: MyScreen purchase order");
    return () => {
      console.log("UNFOCUSED: MyScreen purchase order");
    };
  });

  return (
    <View className={`bg-White-customWhite flex-1`}>
      <Text>PurchaseOrders</Text>
    </View>
  );
};

export default PurchaseOrders;
