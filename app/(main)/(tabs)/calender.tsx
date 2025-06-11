import { View, Text } from "react-native";
import React, { use } from "react";
import { Bar, CartesianChart } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { colors } from "@/constants/colors";

const Calender = () => {
  const victoryData = [
    {
      value: 36,
      label: "Jan",
    },
    {
      value: 60,
      label: "Feb",
    },
    {
      value: 50,
      label: "Mar",
    },
    {
      value: 46,
      label: "Apr",
    },
    {
      value: 84,
      label: "May",
    },
  ];

  const font = useFont(Poppins_400Regular);
  return (
    <View className={`bg-White-customWhite flex-1`}>
      <Text>Calender</Text>
      <CartesianChart
        data={victoryData}
        xKey="label"
        yKeys={["value"]}
        domainPadding={{ left: 50, right: 50, top: 30 }}
        axisOptions={{
          font,
        }}
      >
        {({ points, chartBounds }) => (
          <Bar
            chartBounds={chartBounds}
            points={points.value}
            roundedCorners={{
              topLeft: 5,
              topRight: 5,
            }}
            color={colors.primary}
          />
        )}
      </CartesianChart>
    </View>
  );
};

export default Calender;
