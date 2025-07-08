import { View, Text } from "react-native";
import React, { useState } from "react";
import RnRangeSlider from "rn-range-slider";

const CustomRangeSlider = () => {
  const [low, setLow] = useState(1);
  const [high, setHigh] = useState(20);

  const Thumb = () => {
    return (
      <View
        className={`w-5 h-5 rounded-full border border-inputBorderColor bg-pink-200`}
      ></View>
    );
  };

  const Rail = () => {
    return (
      <View className={`h-1 flex-1 rounded-full bg-inputBorderColor`}></View>
    );
  };

  const RailSelected = () => {
    return <View className={`h-1 flex-1 rounded-full bg-primary`}></View>;
  };
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "rgba(255,0,0,0.1)",
      }}
    >
      <RnRangeSlider
        // style={styles.slider}
        min={1}
        max={20}
        step={1}
        floatingLabel
        renderThumb={() => <Thumb />}
        renderRail={() => <Rail />}
        renderRailSelected={() => <RailSelected />}
        // renderLabel={renderLabel}
        // renderNotch={renderNotch}
        onValueChanged={(lowVal: number, highVal: number) => {
          setLow(lowVal);
          setHigh(highVal);
        }}
      />
    </View>
  );
};

export default CustomRangeSlider;
