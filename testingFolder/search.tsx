import {
  View,
  Text,
  Switch,
  Platform,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
// import ToggleSwitch from "toggle-switch-react-native";
import SwitchToggle from "react-native-switch-toggle";
import { colors } from "@/constants/colors";
import { getPlatformSimple } from "@/utils/platForm";
import { CustomInputField, Icons } from "@/components/customInputField";
import CustomButton from "@/components/customButton";
import AutoGrowingTextInput from "react-native-autogrow-textinput-ts";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import search_key from "../json/search_key.json";
import add_resource from "../json/add_resource.json";

const Search = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [search, setSearch] = useState("");
  const [submitText, setSubmitText] = useState<string[]>([]);
  console.log("updated State Text:", search);
  const [sortBy, setSortBy] = useState("Relevant");

  const searchClear = () => {
    setSubmitText((prev) => [...prev, search]);
    setSearch("");
  };

  const deleteMethod = (index: number) => {
    const update = submitText.filter((_, i) => i !== index);
    setSubmitText(update);
  };

  console.log("SubmittedText:", submitText);

  const sortData = ["Relevent", "Older", "Newer"];

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const isActive = isEnabled === true;

  const [showList, setShowlist] = useState(false);
  const toggleSortBy = () => setShowlist((prev) => !prev);

  return (
    <View className={`bg-White-customWhite flex-1 px-5 gap-2`}>
      <View className={`flex flex-row gap-1 items-center`}>
        {/** Switching the toggle button on/off using package for this. */}
        <SwitchToggle
          switchOn={isEnabled}
          onPress={toggleSwitch}
          backgroundColorOn={colors.primary}
          backgroundColorOff={colors.White.secondWhite}
          circleColorOff={colors.White.customWhite}
          circleColorOn={colors.White.customWhite}
          containerStyle={{
            width: 55,
            height: 20,
            borderRadius: 25,
            // padding: 5,
            position: "relative",
            // Inner Shadow
            boxShadow: `inset 0 1px 6px rgba(0,0,0, 0.16)`,
          }}
          circleStyle={{
            width: 15,
            height: 15,
            borderRadius: 20,
            position: "absolute",
            // Outer Shadow
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 4 },
            ...Platform.select({
              android: { elevation: 6 },
            }),
          }}
        />
        {/** This one used for Text replacing based on the status true or false */}
        {isActive ? (
          // When the toggle is true/on the Search text will appear.
          <Text
            className={`${getPlatformSimple} text-base text-Black-customBlack`}
          >
            Search
          </Text>
        ) : (
          // When the toggle is false/off the Prompt text will appear.
          <Text
            className={`${getPlatformSimple} text-base text-Black-customBlack`}
          >
            Prompt
          </Text>
        )}
      </View>

      {/** The Below one used for replacing the search boxes based on the true/false */}
      {isActive ? (
        // When the toggle is true/on the prompt multiline box will appear with button.
        // <View
        //   className={`w-full h-fit flex flex-col items-center justify-center gap-2 bg-yellow-400`}
        // >
        <>
          <AutoGrowingTextInput
            placeholder="Enter your prompt"
            className={`bg-White-customWhite rounded-md w-full px-2 py-4 border border-inputBorderColor`}
            minHeight={44}
            maxHeight={96}
          />

          <View className={`w-full bg-lime-200 h-24. flex items-center`}>
            <CustomButton text="Submit" className={`h-8 w-[90%]`} />
          </View>
        </>
      ) : (
        // </View>
        <>
          {/** When the toggle is false/off the normal search box will appear with
          the sort field. */}
          <View
            className={`h-10 lg:h-12 flex flex-row w-full items-center border border-inputBorderColor rounded-md px-2`}
          >
            <CustomInputField
              placeholder="Search"
              className={` border-white flex-1 `}
            />
            <Icons
              name="filter"
              family="antDesign"
              color={colors.Black.customBlack}
            />
          </View>

          <View></View>
        </>
      )}

      {search_key.map((txt, index) => (
        <View key={index}>
          <Text>{txt.search_key}</Text>
        </View>
      ))}

      <View className={`flex-1 gap-2`}>
        <TextInput
          placeholder="search"
          value={search}
          onChangeText={(e: string) => setSearch(e)}
          className="w-full h-12 border border-gray-500"
        />

        <View
          className={`w-[40%]  h-6 bg-pieChartColors-lightVoilet items-center justify-center rounded-md ${
            search ? "visible" : "hidden"
          } `}
        >
          <Text>{search}</Text>
        </View>
        <View className="w-full flex flex-row flex-wrap gap-1">
          {submitText.map((txt, index) => (
            <View
              className={`w-fit gap-4 h-6 flex flex-row px-2  bg-pieChartColors-semiVoilet items-center justify-between rounded-md `}
              key={index}
            >
              {/* {submitText ? <Text>{submitText}</Text> : <Text>{search}</Text>} */}
              <Text className={``}>{txt}</Text>
              <TouchableOpacity
                className={``}
                onPress={() => deleteMethod(index)}
              >
                <FontAwesome
                  name="remove"
                  color={colors.Black.customBlack}
                  size={10}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TouchableOpacity
          className={`bg-violet-300 w-[50%] h-12 flex items-center justify-center rounded-md`}
          onPress={searchClear}
        >
          <Text>send</Text>
        </TouchableOpacity>
      </View>

      <View className={`relative`}>
        <Pressable onPress={toggleSortBy}>
          <Text>Sort By:{sortBy}</Text>
        </Pressable>

        {showList && (
          <View
            // className={`bg-lime-300 w-1/4 flex items-center justify-center gap-2 rounded-md py-2 px-2 absolute.
            //   ${showList ? "visible" : "hidden"
            // }`}

            className={`bg-lime-300 w-1/4 flex items-center justify-center gap-2 rounded-md py-2 px-2 absolute. 
            
          `}
          >
            {sortData.map((txt, key) => (
              <Pressable
                key={key}
                className={`bg-pink-300. w-[50%].`}
                onPress={() => {
                  setSortBy(txt);
                  setShowlist(false); // Will close the dropDown option as soon as the user selects any option
                }}
              >
                <Text>{txt}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>

      {add_resource.map((item, index) => (
        <View key={index} className={`bg-pink-200 flex flex-col gap-2`}>
          <Text>{item.skills}</Text>
          <Text>{item.primary_skills}</Text>
        </View>
      ))}
    </View>
  );
};

export default Search;
