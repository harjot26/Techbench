import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

const Escalation = () => {
  useFocusEffect(
    useCallback(() => {
      // This code runs every time the screen comes into focus
      console.log("Screen focused or came back");

      return () => {
        // Cleanup if needed when screen loses focus
        console.log("Screen unfocused");
      };
    }, [])
  );
  return (
    <View className={`bg-White-customWhite flex-1`}>
      <Text>Escalation</Text>
    </View>
  );
};

export default Escalation;
