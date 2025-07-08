import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useCallback, useState } from "react";
import { getPlatForm } from "@/utils/platForm";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import CustomRangeBar from "@/components/customRangeBar";
import { useFocusEffect } from "@react-navigation/native";

const Screen_Width = Dimensions.get("window").width;
const Slider_Width = Screen_Width - 40;
const Thumb_Size = 24;

const TimeSheet = () => {
  const leftX = useSharedValue(0); // current Thumb position;
  const leftOffset = useSharedValue(0); // stores previous offset;
  const rightX = useSharedValue(Slider_Width);
  const rightOffset = useSharedValue(Slider_Width);

  const rightPanGesture = Gesture.Pan()
    .onBegin(() => {})
    .onUpdate((e) => {
      // const minX = 0;
      // const maxX = Screen_Width - 50;
      const newX = Math.min(
        Math.max(0, leftOffset.value + e.translationX),
        rightX.value - Thumb_Size
      );
      leftX.value = newX;
    })
    .onEnd((e) => {
      leftOffset.value = leftX.value; // store where user left off
    });

  const leftPanGesture = Gesture.Pan()
    .onBegin(() => {})
    .onUpdate((e) => {
      // const minX = 0;
      // const maxX = Screen_Width - 50;
      // rightX.value = Math.max(
      //   Math.min(minX, rightOffset.value + e.translationX),
      //   maxX
      // );

      const newX = Math.max(
        Math.min(Slider_Width, rightOffset.value + e.translationX),
        leftX.value + Thumb_Size
      );
      rightX.value = newX;
    })
    .onEnd((e) => {
      rightOffset.value = rightX.value; // store where user left off
    });

  const leftStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: leftX.value }],
  }));

  const rightStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: rightX.value }],
  }));

  const rangeStyle = useAnimatedStyle(() => ({
    // left: leftX.value,
    // Screen_Width: rightX.value - leftX.value,
    // transform: [{ translateX: leftX.value + Thumb_Size }],
    left: leftX.value + Thumb_Size,
    width: rightX.value - leftX.value,
  }));

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
    <View
      className={`bg-White-customWhite bg-yellow-300. flex-1 relative  gap-4 `}
    >
      {/** Line for the range Slider */}
      <View className={`h-1 w-1/2 bg-Grey-seventhGrey rounded-md`} />

      {/** Line for the range Slider with Background color */}
      <Animated.View
        className={`h-1 w-1/2 rounded-md bg-primary absolute right-5`}
        style={[rangeStyle]}
      />

      {/* <View
        className={`h-1 w-full rounded-md bg-primary absolute right-5`}
        // style={[rangeStyle]}
      /> */}

      {/* <Animated.View
        style={[rangeStyle]}
        className={`absolute h-4 bg-lime-200 rounded-sm`}
      /> */}

      <GestureDetector gesture={rightPanGesture}>
        {/** Start Thumb circle to move forward and backward to select the range */}
        <Animated.View
          className={`absolute border-2 border-primary rounded-full w-5 h-5 -top-2 left-5 bg-white `}
          style={[leftStyle]}
        >
          <View
            pointerEvents="none"
            className={`absolute -translate-y-[120%] bg-black w-10 h-6 items-center rounded-md`}
          >
            <Text className={`text-white ${getPlatForm("bold")}`}>
              ${108754}
            </Text>
          </View>
        </Animated.View>
      </GestureDetector>

      {/** Starting Range Value */}

      {/** End Thumb circle to move forward and backward to select the range */}

      <GestureDetector gesture={leftPanGesture}>
        <Animated.View
          className={`absolute border-2 border-primary rounded-full w-5 h-5 -top-2 left-1 bg-white `}
          style={[rightStyle]}
        >
          {/** Ending Range Value */}
          <View
            // Disables all touches handling
            pointerEvents="none"
            className={`absolute -translate-y-[120%] right-0 items-center. px-2   `}
          >
            <Text
              className={`h-6 px-2 text-center. bg-black text-white ${getPlatForm(
                "bold"
              )}`}
            >
              ${5550}
            </Text>
          </View>
        </Animated.View>
      </GestureDetector>

      <View className="px-2">
        <CustomRangeBar />
      </View>
    </View>
  );
};

export default TimeSheet;
