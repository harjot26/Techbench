import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/customSafeAreaView";
import {
  Feather,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import iconSet from "@expo/vector-icons/build/Fontisto";
import { Link, router, usePathname } from "expo-router";
import { getPlatForm, getPlatformSimple } from "@/utils/platForm";
import { useWindowDimensions } from "react-native";
import { colors } from "@/constants/colors";

type prop = {
  children?: React.ReactNode;
};

// Using to fixing the TypeError for Icon and name
type AnyIcon = React.ComponentType<any>;

const data = [
  {
    Icon: Feather as unknown as AnyIcon,
    // icon: <Feather name="users" size={width >= 430 ? 16 : 14} />,
    name: "users",
    label: "Shortlist",
    href: "/shortList",
  },
  {
    Icon: Foundation as unknown as AnyIcon,
    // icon: <Foundation name="home" size={width >= 430 ? 16 : 14} />,
    name: "home",
    label: "Procurement",
    href: "/procurement",
  },
  {
    Icon: Feather as unknown as AnyIcon,
    // icon: <Feather name="users" size={width >= 430 ? 16 : 14} />,
    name: "users",
    label: "Purchase Orders",
    href: "/purchaseOrders",
  },
  {
    Icon: MaterialCommunityIcons as unknown as AnyIcon,
    // icon: (
    //   <MaterialCommunityIcons
    //     name="youtube-subscription"
    //     size={width >= 430 ? 16 : 14}
    //   />
    // ),
    name: "youtube-subscription",
    label: "Invoices",
    href: "/invoices",
  },
  {
    Icon: Feather as unknown as AnyIcon,
    // icon: <Feather name="bell" size={width >= 430 ? 16 : 14} />,
    name: "bell",
    label: "Sub user",
    href: "/subUsers",
  },
  {
    Icon: Feather as unknown as AnyIcon,
    // icon: <Feather name="bell" size={width >= 430 ? 16 : 14} />,
    name: "bell",
    label: "Manager profiles",
    href: "/managerProfile",
  },
  {
    Icon: Feather as unknown as AnyIcon,
    // icon: <Feather name="bell" size={width >= 430 ? 16 : 14} />,
    name: "bell",
    label: "Feedback",
    href: "/feedback",
  },
  {
    Icon: Feather as unknown as AnyIcon,
    // icon: <Feather name="bell" size={width >= 430 ? 16 : 14} />,
    name: "bell",
    label: "Escalation",
    href: "/escalation",
  },
  {
    Icon: Feather as unknown as AnyIcon,
    // icon: <Feather name="bell" size={width >= 430 ? 16 : 14} />,
    name: "bell",
    label: "Revision",
    href: "/revision",
  },
] as const;

const TopNavbar = ({ children }: prop) => {
  const { width } = useWindowDimensions();
  console.log("width", width);
  // to access the current url.
  const pathName = usePathname();
  console.log("path:", pathName);

  const iconSize = width >= 430 ? 16 : 14;
  const isActiveIconSize = width >= 430 ? 18 : 14;

  return (
    <ScrollView
      horizontal
      className="h-14 max-h-14 lg:h-[4.25rem] lg:max-h-[4.25rem] px-5."
      showsHorizontalScrollIndicator={false}
    >
      {/* <FlatList
       data={data}
       renderItem={({ item }) => (
         <Link href={item.href} asChild>
           <TouchableOpacity
             className={`flex flex-row items-center gap-2 bg-lime-200 h-16`}
           >
             <Text>{item.icon}</Text>
             <Text>{item.name}</Text>
           </TouchableOpacity>
         </Link>
       )}
       keyExtractor={(item) => item.href}
       horizontal
       showsHorizontalScrollIndicator={false}
       className="h-16 max-h-16 bg-pink-400"
     /> */}

      <View
        // className={`h-full flex flex-row gap-8  items-center px-5. bg-lime-200. border-b-2. border-b-Grey-forthGrey. `}
        className={`relative h-full w-full px-5`}
      >
        <View className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300 z-0" />

        <View className="relative z-10 flex flex-row gap-8 items-center h-14">
          {data.map(({ Icon, name, label, href }) => {
            // matching current url with is Active
            const isActive = pathName === href;
            console.log("active:", isActive);

            return (
              <Link href={href} asChild key={href}>
                <TouchableOpacity
                  className={`h-full flex flex-col items-center justify-end bg-pink-200.`}
                >
                  {/* <Text
                  className={`${
                    isActive ? "text-primary" : "text-Black-customBlack"
                  }`}
                >
                  {icon}
                </Text> */}
                  <Icon
                    name={name as string}
                    size={
                      width < 430 && isActive
                        ? 16
                        : width < 430
                        ? 14
                        : isActive
                        ? 20
                        : 16
                    }
                    color={isActive ? colors.primary : ""}
                  />
                  <Text
                    className={`${getPlatForm("medium")} my-1 ${
                      isActive
                        ? "text-sm lg:text-lg text-primary "
                        : "text-xs lg:text-base text-Grey-forthGrey"
                    }`}
                  >
                    {label}
                  </Text>
                  {/* {isActive ? ( */}
                  {/* <View
                  className={` w-[100%] h-1 rounded-tl rounded-tr ${
                    isActive ? "bg-primary" : "bg-inputBorderColor"
                  } `}
                ></View> */}

                  {/* {isActive ? (
                  <View
                    className={` w-[120%] h-1 rounded-tl rounded-tr bg-primary `}
                  ></View>
                ) : (
                  <View
                    className={`w-full h-1 rounded-tl rounded-tr bg-gray-400`}
                  ></View>
                )} */}

                  {isActive && (
                    <View className="w-[120%] h-1 rounded-tl rounded-tr bg-primary" />
                  )}
                </TouchableOpacity>
              </Link>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default TopNavbar;
