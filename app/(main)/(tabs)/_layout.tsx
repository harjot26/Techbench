import React from "react";
import { Stack, Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { Text, View } from "react-native";

const TabLayout = () => {
  return (
    // <Tabs
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarActiveTintColor: colors.primary,
    //     tabBarInactiveTintColor: colors.Black.customBlack,
    //     tabBarShowLabel: false,
    //     tabBarStyle: {
    //       backgroundColor: colors.primary,
    //       borderColor: colors.primary,
    //       height: 60,
    //     },
    //     tabBarItemStyle: {
    //       flex: 0, // stop stretching
    //       width: "auto", // shrink-to-fit
    //       paddingHorizontal: 12,
    //     },
    //   }}
    // >
    //   <Tabs.Screen
    //     name="dashBoard"
    //     options={{
    //       tabBarIcon: ({ color, focused }) => (
    //         <View
    //           style={{ alignItems: "center" }}
    //           className={`bg-lime-200 my-auto w-fit min-w-fit h-14 min-h-14 flex flex-col items-center justify-center whitespace-nowrap`}
    //         >
    //           <MaterialCommunityIcons
    //             // The below one is to change the icon based on the focused
    //             name={"view-dashboard-outline"}
    //             // name={focused ? "view-dashboard-outline" : "view-dashboard"}
    //             size={20}
    //             color={color}
    //             // className="hidden"
    //           />

    //           <Text className=" whitespace-nowrap">Dashboard</Text>

    //           <View className="h-1 w-full min-w-full bg-white"></View>

    //           {focused && (
    //             <>
    //               <Text className={`text-primary h-fit w-full hidden`}>
    //                 Dashboard
    //               </Text>
    //               {/* <View
    //                 className={`inline-block min-h-1 h-1 min-w-full bg-white`}
    //               >
    //               </View> */}
    //             </>
    //           )}
    //         </View>
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="search"
    //     options={{
    //       tabBarIcon: ({ color, focused }) => (
    //         <View
    //           className={`bg-lime-200. flex-1 items-center justify-center gap-1`}
    //         >
    //           <Ionicons name="search-outline" size={20} color={color} />

    //           {focused && <Text className={`text-primary w-full`}>Search</Text>}
    //         </View>
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="timeSheet"
    //     options={{
    //       tabBarIcon: ({ color, focused }) => (
    //         <View
    //           className={`bg-lime-200. flex-1 items-center justify-center gap-1`}
    //         >
    //           <Ionicons name="time-outline" size={20} color={color} />
    //           {focused && (
    //             <Text className={`text-primary w-full`}>Timesheet</Text>
    //           )}
    //         </View>
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="calender"
    //     options={{
    //       href: null,
    //       tabBarIcon: ({ color, focused }) => (
    //         <View
    //           className={`bg-lime-200. flex-1 items-center justify-center gap-1`}
    //         >
    //           <Ionicons name="calendar" size={20} color={color} />

    //           {focused && (
    //             <Text className={`text-primary w-full`}>Calender</Text>
    //           )}
    //         </View>
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="(topBar)"
    //     options={{
    //       href: null, // To hide the folder which i don't show in bottom bar tab
    //     }}
    //   />
    // </Tabs>

    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="dashBoard" />
      <Stack.Screen name="search" />
      <Stack.Screen name="timeSheet" />
      <Stack.Screen name="calender" />
    </Stack>
  );
};

export default TabLayout;
