import { View, Text, ScrollView, Platform } from "react-native";
import React, { useCallback } from "react";
import CustomSafeAreaView from "@/components/customSafeAreaView";
import { Link } from "expo-router";
import { getPlatformSimple } from "@/utils/platForm";
import { useFocusEffect } from "@react-navigation/native";

const ShortList = () => {
  useFocusEffect(() => {
    console.log("FOCUSED: MyScreen shortlist");
    return () => {
      console.log("UNFOCUSED: MyScreen shortlist");
    };
  });

  return (
    <View className={`bg-White-customWhite flex-1`}>
      <ScrollView className=" flex-grow" horizontal>
        <View className="flex flex-row gap-2">
          <Text className={`${getPlatformSimple}`}>Shortlist</Text>

          <Link href={"/(main)/bottomBar"}>BottomBar</Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default ShortList;
