import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { Icons } from "@/components/customInputField";
import { colors } from "@/constants/colors";

// Using to fixing the TypeError for Icon and name
type AnyIcon = React.ComponentType<any>;

const tabData = [
  {
    Icon: MaterialCommunityIcons as unknown as AnyIcon,
    name: "view-dashboard-outline",
    label: "Dashboard",
    href: "/dashBoard",
  },
  {
    Icon: Ionicons as unknown as AnyIcon,
    name: "search-outline",
    label: "Search",
    href: "/search",
  },
  {
    Icon: Ionicons as unknown as AnyIcon,
    name: "time-outline",
    label: "Timesheet",
    href: "/timeSheet",
  },
  {
    Icon: Ionicons as unknown as AnyIcon,
    name: "calendar",
    label: "Work Calender",
    href: "/calender",
  },
] as const;
const BottomBar = () => {
  const pathName = usePathname();
  console.log("BottomBarPathName:", pathName);

  return (
    <View
      className={`bg-White-customWhite bg-pink-200. w-full flex flex-row px-5 gap-4. items-center justify-between h-20 max-h-full `}
    >
      {tabData.map(({ href, label, name, Icon }) => {
        const isActive = pathName === href;
        console.log("active1:", isActive);
        return (
          <Link href={href} asChild key={href} className={`bg-pink-200. w-1/4`}>
            <TouchableOpacity
              className={`flex flex-col items-center bg-pink-300.`}
            >
              <Icon
                name={name}
                size={16}
                color={isActive ? colors.primary : undefined}
              />
              <Text
                className={`${
                  isActive
                    ? " text-primary text-sm lg:text-base"
                    : "text-Black-semiBlack text-xs lg:text-sm"
                }`}
              >
                {label}
              </Text>
              {/* <View
                className={`h-1 w-[33%] rounded-tr rounded-tl ${
                  isActive ? "bg-primary" : "bg-transparent"
                }`}
              ></View> */}
            </TouchableOpacity>
          </Link>
        );
      })}
    </View>
  );
};

export default BottomBar;
