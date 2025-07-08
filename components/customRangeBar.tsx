import { View, Text, Dimensions, LayoutChangeEvent } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type prop = {
  startingText?: number;
  endingText?: number;
};

const Thumb_Size = 10;

const CustomRangeBar = ({ startingText, endingText }: prop) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  //   const Screen_Width = Dimensions.get("window").width;
  //   const Slider_Width = Screen_Width;

  const leftX = useSharedValue(0); //* Current Thumb Position.
  const rightX = useSharedValue(0);

  const leftOffSet = useSharedValue(0); //* Stores previous offset
  const rightOffSet = useSharedValue(0);

  const onLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    if (sliderWidth === 0) {
      setSliderWidth(width);
      rightX.value = width - Thumb_Size;
      rightOffSet.value = width - Thumb_Size;
    }

    // setSliderWidth(width);
    // rightX.value = width - Thumb_Size;
    // rightOffSet.value = width - Thumb_Size;
  };

  //   if (!sliderWidth) {
  //     //* Wait Until Layout Measured
  //     return <View onLayout={onLayout} className={`w-full h-6`} />;
  //   }

  {
    /** left Pan Gesture */
  }
  const leftPanGesture = Gesture.Pan()
    .onBegin(() => {})

    .onUpdate((e) => {
      const newX = Math.min(
        Math.max(0, leftOffSet.value + e.translationX),
        rightX.value
      );
      leftX.value = newX;
    })
    .onEnd((e) => {
      leftOffSet.value = leftX.value; //* store where user left off
    });

  const leftStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: leftX.value }],
    zIndex: 10,
  }));

  {
    /** Right Pan Gesture */
  }

  const rightPanGesture = Gesture.Pan()
    .onBegin(() => {})

    .onUpdate((e) => {
      const newX = Math.max(
        Math.min(sliderWidth - Thumb_Size, rightOffSet.value + e.translationX),
        leftX.value
      );
      rightX.value = newX;
    })
    .onEnd((e) => {
      rightOffSet.value = rightX.value; //* store where user left off
    });

  const rightStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: rightX.value }],
    zIndex: 10,
  }));

  const rangeStyle = useAnimatedStyle(() => ({
    left: leftX.value + Thumb_Size / 2,
    width: rightX.value - leftX.value,
  }));

  return (
    <View className={`relative w-full`} onLayout={onLayout}>
      {/**  Background Line for the range slider */}
      <View className={`h-1 w-full bg-Grey-seventhGrey rounded-md`} />
      {sliderWidth > 0 && (
        <>
          {/** Line for the Range Slider with the above color */}
          <Animated.View
            className={`absolute h-1 rounded-md bg-primary`}
            style={[rangeStyle]}
          />

          <GestureDetector gesture={leftPanGesture}>
            {/** Left Thumb */}
            <Animated.View
              className={`absolute border-2 border-White-customWhite bg-primary rounded-full w-4 h-4 -left-1 -top-1.5`}
              style={[leftStyle]}
            >
              <View className={` w-6  absolute -translate-y-full `}>
                <Text className={` text-primary`}>{startingText}</Text>
              </View>
            </Animated.View>
          </GestureDetector>

          <GestureDetector gesture={rightPanGesture}>
            {/** Right Thumb */}
            <Animated.View
              className={`absolute border-2 border-White-customWhite bg-primary rounded-full w-4 h-4 -top-1.5`}
              style={[rightStyle]}
            >
              <View className={` w-6  absolute -translate-y-full -right-2`}>
                <Text className={` text-primary `}>{endingText}</Text>
              </View>
            </Animated.View>
          </GestureDetector>
        </>
      )}
    </View>
  );
};

export default CustomRangeBar;
