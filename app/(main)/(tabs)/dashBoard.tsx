import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomSafeAreaView from "@/components/customSafeAreaView";
import { Link, router } from "expo-router";

import {
  Feather,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

import { getPlatForm, getPlatformSimple } from "@/utils/platForm";
import { useWindowDimensions, Dimensions } from "react-native";
import { Bar, CartesianChart } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { colors } from "@/constants/colors";
import { PieChart } from "react-native-gifted-charts";
import CustomLabelRender from "@/components/customLabelRender";

const DashBoard = () => {
  const { width } = useWindowDimensions();
  const ScreenWidth = Dimensions.get("window");
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

  const pieData = [
    {
      value: 10,
      color: colors.pieChartColors.lightVoilet,
      text: "Front-End Department",
    },
    {
      value: 20,
      color: colors.pieChartColors.semiVoilet,
      text: "Designing Department",
    },
    {
      value: 45,
      color: colors.pieChartColors.semiPink,
      text: "Testing Department",
    },
    { value: 60, color: colors.pieChartColors.voilet, text: "HR Department" },
    {
      value: 75,
      color: colors.pieChartColors.purple,
      text: "Software Department",
    },
  ];

  const font = useFont(Poppins_400Regular);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className={`bg-White-customWhite bg-lime-200. flex-1 px-5 gap-4`}>
        {/** Flexbox cards */}
        <View
          className={`w-full h-fit max-h-fit flex flex-row gap-5. flex-wrap gap-y-4 `}
        >
          <View className="w-1/2 pr-2">
            <View
              className={`w-full min-h-fit h-44 lg:h-52 border border-borderColor rounded-md items-center justify-center gap-2 px-5`}
            >
              <View
                className={` bg-primary w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-md`}
              >
                <Feather
                  name="users"
                  size={width >= 430 ? 20 : 16}
                  color={colors.White.customWhite}
                />
              </View>
              <Text
                className={`text-Black-semiBlack text-sm lg:text-xl ${getPlatformSimple}`}
              >
                Total Resources
              </Text>
              <Text
                className={`${getPlatformSimple} text-xs lg:text-base text-Grey-fifthGrey text-center`}
              >
                Available for Hirirng Resources
              </Text>
              <Text
                className={`${getPlatForm("medium")} text-2xl text-primary`}
              >
                45
              </Text>
            </View>
          </View>

          <View className="w-1/2 pl-2">
            <View
              className={`w-full min-h-fit h-44 lg:h-52 border border-borderColor rounded-md items-center justify-center gap-2 px-5`}
            >
              <View
                className={` bg-primary w-8 h-8 lg:w-10 lg:h-10  flex items-center justify-center rounded-md`}
              >
                <Feather
                  name="user-check"
                  size={width >= 430 ? 20 : 16}
                  color={colors.White.customWhite}
                />
              </View>
              <Text
                className={`text-Black-semiBlack text-sm lg:text-xl ${getPlatformSimple}`}
              >
                Total Resources
              </Text>
              <Text
                className={`${getPlatformSimple} text-xs lg:text-base text-Grey-fifthGrey text-center`}
              >
                Available for Hirirng Resources
              </Text>
              <Text
                className={`${getPlatForm("medium")} text-2xl text-primary`}
              >
                45
              </Text>
            </View>
          </View>

          <View className="w-1/2 pr-2">
            <View
              className={`w-full min-h-fit h-44 lg:h-52 border border-borderColor rounded-md items-center justify-center gap-2 px-5`}
            >
              <View
                className={` bg-primary w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-md`}
              >
                <MaterialCommunityIcons
                  name="playlist-check"
                  size={width >= 430 ? 20 : 16}
                  color={colors.White.customWhite}
                />
              </View>
              <Text
                className={`text-Black-semiBlack text-sm lg:text-xl ${getPlatformSimple}`}
              >
                Total Resources
              </Text>
              <Text
                className={`${getPlatformSimple} text-xs lg:text-base text-Grey-fifthGrey text-center`}
              >
                Available for Hirirng Resources
              </Text>
              <Text
                className={`${getPlatForm("medium")} text-2xl text-primary`}
              >
                45
              </Text>
            </View>
          </View>

          <View className="w-1/2 pl-2">
            <View
              className={`w-full min-h-fit h-44 lg:h-52 border border-borderColor rounded-md flex items-center justify-center gap-2 px-5`}
            >
              <View
                className={` bg-primary w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-md`}
              >
                <Feather
                  name="user"
                  size={width >= 430 ? 20 : 16}
                  color={colors.White.customWhite}
                />
              </View>
              <Text
                className={`text-Black-semiBlack text-sm lg:text-xl ${getPlatformSimple}`}
              >
                Total Resources
              </Text>
              <Text
                className={`${getPlatformSimple} text-xs lg:text-base text-Grey-fifthGrey text-center`}
              >
                Available for Hirirng Resources
              </Text>
              <Text
                className={`${getPlatForm("medium")} text-2xl text-primary`}
              >
                45
              </Text>
            </View>
          </View>
        </View>

        {/** Resources Spend Hours */}
        <View
          className={`border border-borderColor w-full h-fit max-h-fit gap-2 py-2 rounded-md px-5`}
        >
          <View className={`flex flex-row items-center gap-4`}>
            <Octicons
              name="clock"
              size={width >= 430 ? 20 : 16}
              color={colors.primary}
            />
            <Text
              className={`${getPlatformSimple} text-lg lg:text-2xl text-Black-semiBlack`}
            >
              Resources Hours
            </Text>
          </View>
          <View
            className={`flex flex-row w-full items-center justify-start gap-2  h-10 max-h-fit  bg-lime-300.`}
          >
            <TouchableOpacity
              className={`flex flex-row  w-1/3 h-full items-center justify-around border border-primary rounded-md`}
            >
              <Text
                className={`${getPlatformSimple} text-sm lg:text-lg text-Black-fourthBlack`}
              >
                2025
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={16}
                color={colors.Purple.customPurple}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex flex-row w-1/3 h-full items-center justify-around border border-primary rounded-md`}
            >
              <Text
                className={`${getPlatformSimple} text-sm lg:text-lg text-Black-fourthBlack`}
              >
                Jan-May
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={16}
                color={colors.Purple.customPurple}
              />
            </TouchableOpacity>
          </View>
          {/** Charts are over here: */}
          <View className="w-fit h-96 max-h-fit mt-6">
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
                  barWidth={width <= 400 ? 40 : 60}
                />
              )}
            </CartesianChart>
          </View>
        </View>

        {/** Resources by Department */}
        <View
          className={`border border-borderColor w-full h-fit max-h-fit gap-2 py-4 rounded-md px-5`}
        >
          {/** Text and Icon Content */}
          <View className={`flex flex-row gap-4 items-center`}>
            <Fontisto
              name="pie-chart-2"
              size={width >= 430 ? 20 : 16}
              color={colors.primary}
            />
            <Text
              className={`${getPlatformSimple} text-lg lg:text-2xl text-Black-semiBlack`}
            >
              Resources by Department
            </Text>
          </View>

          {/** Button Content */}
          <TouchableOpacity
            className={`flex flex-row  w-1/3 h-10 max-h-fit items-center justify-around border border-primary rounded-md`}
          >
            <Text
              className={`${getPlatformSimple} text-sm lg:text-lg text-Black-fourthBlack`}
            >
              2025
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={16}
              color={colors.Purple.customPurple}
            />
          </TouchableOpacity>

          {/** Pie Chart Content */}
          <View
            className={`w-fit h-fit max-h-fit mt-6 bg-lime-200. flex items-center justify-center`}
          >
            <PieChart data={pieData} />
            <View
              className={`w-full mt-6 flex flex-row flex-wrap gap-2 items-center justify-center`}
            >
              {pieData.map((item) => (
                <CustomLabelRender
                  key={item.text}
                  label={item.text}
                  color={item.color}
                />
              ))}
            </View>
          </View>
        </View>

        {/** last section Flexbox cards */}
        <View
          className={`w-full h-fit max-h-fit flex flex-row flex-wrap gap-y-4 pb-10`}
        >
          <View className={`w-1/2 pr-2`}>
            <View
              className={`   min-h-fit h-32  flex flex-col items-center justify-center border border-borderColor rounded-md px-4`}
            >
              <View
                className={`bg-primary w-12 h-12 items-center justify-center rounded-md`}
              >
                <MaterialCommunityIcons
                  name="playlist-check"
                  size={28}
                  color={colors.White.customWhite}
                />
              </View>

              <Text className={` text-center`}>Recent Purchase Orders</Text>
            </View>
          </View>

          <View className={`w-1/2 pl-2`}>
            <View
              className={` min-h-fit h-32  flex flex-col items-center justify-center border border-borderColor rounded-md px-4`}
            >
              <View
                className={`bg-primary w-12 h-12 items-center justify-center rounded-md`}
              >
                <MaterialCommunityIcons
                  name="playlist-check"
                  size={28}
                  color={colors.White.customWhite}
                />
              </View>
              <Text className={` text-center`}>Schedule</Text>
            </View>
          </View>

          <View className={`w-1/2 pr-2`}>
            <View
              className={` min-h-fit h-32  flex flex-col items-center justify-center border border-borderColor rounded-md px-4`}
            >
              <View
                className={`bg-primary w-12 h-12 items-center justify-center rounded-md`}
              >
                <MaterialCommunityIcons
                  name="playlist-check"
                  size={28}
                  color={colors.White.customWhite}
                />
              </View>
              <Text className={` text-center`}>Pending TimeSheets</Text>
            </View>
          </View>

          <View className={`w-1/2 pl-2`}>
            <View
              className={` min-h-fit h-32  flex flex-col items-center justify-center border border-borderColor rounded-md px-4`}
            >
              <View
                className={`bg-primary w-12 h-12 items-center justify-center rounded-md`}
              >
                <MaterialCommunityIcons
                  name="playlist-check"
                  size={28}
                  color={colors.White.customWhite}
                />
              </View>
              <Text className={` text-center`}>Pending Invoices</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashBoard;
