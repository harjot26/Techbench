import { View, Text, Dimensions } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";
import { colors } from "@/constants/colors";

const TimeSheet = () => {
  const bardata = [
    {
      value: 50,
      label: "Jan",
    },
    {
      value: 60,
      label: "Feb",
    },
    {
      value: 70,
      label: "Mar",
    },
  ];

  const Bar_Width = 34;
  const Bar_Spacing = 28;
  const Col_Width = Bar_Width + Bar_Spacing;

  return (
    <View className={`bg-White-customWhite. bg-yellow-300. flex-1`}>
      <Text>TimeSheet</Text>

      <BarChart
        data={bardata}
        barWidth={Bar_Width}
        spacing={Bar_Spacing}
        initialSpacing={0}
        rulesColor={"#D8D8D8"}
        rulesType="dashed"
        rulesThickness={1}
        frontColor={colors.primary}
        noOfSections={4}
        showValuesAsTopLabel
        // yAxisLabelPrefix="$"
        yAxisThickness={0}
        xAxisThickness={2}
        xAxisColor={"black"}
        //The below one is to vertical lines behind the bars
        showVerticalLines
        // The below one is how much to show vertical lines
        noOfVerticalLines={4}
        // To provide the thickness to the lines
        verticalLinesThickness={1}
        // it will help us to make the dotted line and help us to adjust the gap
        verticalLinesStrokeDashArray={[2, 4]}
        verticalLinesColor={"#D8D8D8"}
        verticalLinesSpacing={200}
      />
    </View>
  );
};

export default TimeSheet;
