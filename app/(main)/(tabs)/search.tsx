import {
  View,
  Text,
  Platform,
  Alert,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  useWindowDimensions,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

import CustomMainLayout from "@/components/customMainLayout";
import SwitchToggle from "react-native-switch-toggle";
import { colors } from "@/constants/colors";
import { CustomInputField, Icons } from "@/components/customInputField";
import CustomButton from "@/components/customButton";
import AutoGrowingTextInput from "react-native-autogrow-textinput-ts";
import {
  getPlatForm,
  getPlatformSemi,
  getPlatformSimple,
} from "@/utils/platForm";
import search_keys from "../../../json/search_key.json";
import add_resource from "../../../json/add_resource.json";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomLogoBlackText from "@/components/customLogoBlackText";
import RangeSlider from "rn-range-slider";
import Slider from "@react-native-community/slider";
import TimeSheet from "./timeSheet";
import CustomRangeBar from "@/components/customRangeBar";
import CustomRangeSlider from "@/components/customRangeSlider";
import CheckBox from "expo-checkbox";

type SearchKeyType = {
  id: number;
  search_key: string;
  user: number;
  created_at: string;
};
const Search = () => {
  const { width } = useWindowDimensions();
  const [isEnabled, setIsEnabled] = useState(false);
  const [searchKeys, setSearchKeys] = useState<SearchKeyType[]>([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("Relevant");
  const [showList, setShowList] = useState(false);
  const [modalVisibile, setModalVisibile] = useState(false);
  const [isActiveCheck, setIsActiveCheck] = useState(false);
  const [low, setLow] = useState(1);
  const [high, setHigh] = useState(20);
  const [isSliding, setIsSliding] = useState(false);

  const [isChecked, setIsChecked] = useState({
    remote: false,
    onsite: false,
    work_From_Home: false,
  });

  // const [isChecked, setIsChecked] = useState(false);

  const sortByList = ["Relevant", "Newer", "Older"];

  const toggleSwitch = () => setIsEnabled((prevValue) => !prevValue);
  const toggleSortBy = () => setShowList((prev) => !prev);

  // const checkBox = (_prev: any) => {
  //   setIsActiveCheck((prev) => !prev);
  // };

  const handleGetSearchQuery = async () => {
    try {
      const response = await search_keys;

      setSearchKeys(response);
    } catch (error) {}
  };

  const handlePostSearchQuery = async () => {
    console.log("Checking:", query);

    try {
      const duplicate = searchKeys.some((prev) => query === prev.search_key);

      if (duplicate) return;

      const data = { created_at: "", id: 1, search_key: query, user: 1 };

      const response = await setSearchKeys((prev) => [...prev, data]);

      setQuery("");
    } catch (error) {}
  };

  const handleRemoveFunction = (txt: string) => {
    const remove = searchKeys.filter((prev) => prev.search_key !== txt);
    setSearchKeys(remove);
  };

  useEffect(() => {
    handleGetSearchQuery();
  }, []);

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
    <CustomMainLayout>
      {/** Prompt component for on and off and showing the data based on the selections */}
      <View className={`bg-pink-300. flex flex-row items-center gap-2`}>
        <SwitchToggle
          switchOn={isEnabled}
          onPress={toggleSwitch}
          backgroundColorOff={colors.White.secondWhite}
          backgroundColorOn={colors.primary}
          circleColorOff={colors.White.customWhite}
          circleColorOn={colors.White.customWhite}
          containerStyle={{
            width: 40,
            height: 18,
            borderRadius: 25,
            boxShadow: `inset 0 1px 6px rgba(0,0,0,0.16)`,
            position: "relative",
            backgroundColor: "pink",
          }}
          circleStyle={{
            width: 15,
            height: 15,
            borderRadius: 100,
            borderColor: "rgba(0,0,0,0.16)",
            borderWidth: 1,
            position: "absolute",

            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 4 },
            ...Platform.select({
              android: { elevation: 6 },
            }),
          }}
        />
        {/** Showing the text based on the selection */}
        {isEnabled ? <Text>Search</Text> : <Text>Prompt</Text>}
      </View>

      {/** AutoGrow Search component */}
      {isEnabled ? (
        <View className={`gap-6 bg-lime-200. w-[100%] h-fit min-h-fit`}>
          <View className={`h-12 w-[100%]`}>
            <AutoGrowingTextInput
              placeholder="Enter your prompt"
              className={`w-full border border-inputBorderColor bg-White-customWhite rounded-md px-3 py-3  ${getPlatformSimple} text-base lg:text-lg `}
              minHeight={48}
              // maxHeight={96}
              placeholderTextColor={colors.Grey.sixthGrey}
              // style={{
              //   padding: 10,
              // }}
            />
          </View>

          <CustomButton text="Submit" className={`w-[50%] mx-auto`} />
        </View>
      ) : (
        <View className="gap-2 bg-lime-200.">
          {/** Search and filter options */}
          <View className="h-12 flex flex-row  items-center border border-inputBorderColor w-[100%] rounded-md px-5">
            <CustomInputField
              className={`border-white flex-1`}
              placeholder="Search"
              value={query}
              onChangeText={(e: string) => setQuery(e)}
              onSubmitEditing={handlePostSearchQuery}
              // onSubmitEditing={() => Alert.alert("Submit", "You pressed enter")}
              returnKeyType="done"
              // multiline={false}
              // blurOnSubmit={true}
            />
            <TouchableOpacity onPress={() => setModalVisibile(true)}>
              <Icons
                name="filter"
                family="antDesign"
                color={colors.Black.customBlack}
              />
            </TouchableOpacity>
          </View>

          {/** Filter Modal Data  */}

          <Modal
            visible={modalVisibile}
            onRequestClose={() => setModalVisibile(false)}
            animationType="slide"
            presentationStyle="pageSheet"
            style={{ zIndex: 10 }}
            transparent={false}
          >
            <View className={`flex-1 px-5 py-5 gap-4`}>
              {/* <CustomLogoBlackText /> */}
              <View className={`flex flex-row gap-2 items-center`}>
                <TouchableOpacity
                  className={`w-[8%] h-8 rounded-xl bg-pink-200. flex items-center justify-center border border-inputBorderColor`}
                  onPress={() => setModalVisibile(false)}
                >
                  <Ionicons
                    name="chevron-back"
                    size={14}
                    color={colors.Black.customBlack}
                  />
                </TouchableOpacity>

                <Text
                  className={`text-Black-semiBlack text-xl lg:text-2xl ${getPlatformSimple} `}
                >
                  Filter
                </Text>
              </View>

              {/** Input Fields */}
              <View
                className={` flex flex-col h-full. w-full gap-5 bg-lime-200.`}
              >
                <View
                  className={`w-full h-fit flex flex-col gap-2 px-4. bg-pink-300.`}
                >
                  <Text
                    className={`${getPlatformSemi(
                      "semibold"
                    )} text-Black-customBlack text-xl lg:text-2xl`}
                  >
                    Country
                  </Text>
                  <CustomInputField className="h-12" placeholder="e.g. USA" />
                </View>

                <View
                  className={`w-full h-fit flex flex-col gap-2 bg-blue-300.`}
                >
                  <Text
                    className={`${getPlatformSemi(
                      "semibold"
                    )} text-Black-customBlack text-xl lg:text-2xl`}
                  >
                    City
                  </Text>
                  <CustomInputField
                    className="h-12"
                    placeholder="e.g. Las Vegas"
                  />
                </View>

                <View
                  className={`w-[100%] h-fit flex flex-col gap-2 bg-blue-300.`}
                >
                  <Text
                    className={`${getPlatformSemi(
                      "semibold"
                    )} text-Black-customBlack text-xl lg:text-2xl`}
                  >
                    Experience Range
                  </Text>

                  <View
                    className={`flex flex-row justify-between gap-2 w-[100%] h-12 bg-yellow-3000 mb-6`}
                  >
                    <CustomInputField
                      placeholder="Min 0 Years"
                      className="w-[49%]"
                    />
                    <CustomInputField
                      placeholder="Max 40 Years"
                      className="w-[49%]"
                    />
                  </View>

                  {/** Range Slider */}
                  {/* <View className="px-4"> */}
                  <CustomRangeBar
                    // width={Dimensions.get("window").width - 32}
                    startingText={0}
                    endingText={40}
                  />
                  {/* </View> */}
                </View>

                <View
                  className={`w-full h-fit flex flex-col gap-2 bg-blue-300.`}
                >
                  <Text
                    className={`${getPlatformSemi(
                      "semibold"
                    )} text-Black-customBlack text-xl lg:text-2xl`}
                  >
                    Rate/Hour
                  </Text>
                  <View
                    className={`flex flex-row justify-between gap-2 w-[100%] h-12 bg-yellow-3000 mb-6`}
                  >
                    <CustomInputField
                      placeholder="Min $80"
                      className="w-[49%]"
                    />
                    <CustomInputField
                      placeholder="Max $300"
                      className="w-[49%]"
                    />
                  </View>

                  {/** Range Slider */}
                  <CustomRangeBar startingText={0} endingText={40} />
                </View>

                {/** CheckBox Fields */}
                {/* <View
                  // className={`w-full flex flex-row items-center justify-between. bg-pink-300`}
                  className={`bg-pink-400. w-full flex flex-row items-center justify-between`}
                >
                  <View
                    className={` flex flex-row items-center justify-around gap-2 bg-blue-200.`}
                  >
                    <TouchableOpacity
                      className={`border ${
                        isActiveCheck
                          ? "border-primary"
                          : "border-inputBorderColor"
                      }  w-[24] h-8  rounded-md shrink-0`}
                    ></TouchableOpacity>
                    <Text>Remote</Text>
                  </View>

                  <View
                    className={` flex flex-row items-center gap-2 justify-around`}
                  >
                    <TouchableOpacity
                      className={`border ${
                        isActiveCheck
                          ? "border-primary"
                          : "border-inputBorderColor"
                      } w-[24] h-8 rounded-md shrink-0`}
                    ></TouchableOpacity>
                    <Text>On Site</Text>
                  </View>

                  <View
                    className={` flex flex-row items-center gap-2 justify-around`}
                  >
                    <TouchableOpacity
                      className={`border ${
                        isActiveCheck
                          ? "border-primary"
                          : "border-inputBorderColor"
                      } w-[24] h-8 rounded-md shrink-0`}
                    ></TouchableOpacity>
                    <Text>Worked Here</Text>
                  </View>
                </View> */}

                <View
                  className={`flex flex-row gap-4 items-center justify-between`}
                >
                  <View className={`flex flex-row gap-4 items-center`}>
                    <CheckBox
                      value={isChecked.remote}
                      color={
                        isChecked.remote
                          ? colors.primary
                          : colors.Grey.eighthGrey
                      }
                      onValueChange={(e: any) =>
                        setIsChecked({ ...isChecked, remote: e })
                      }
                    />
                    <Text
                      className={`text-Black-fifthBlack text-base lg:text-lg ${getPlatformSimple}`}
                    >
                      Remote
                    </Text>
                  </View>

                  <View className={`flex flex-row gap-4 items-center`}>
                    <CheckBox
                      value={isChecked.onsite}
                      color={
                        isChecked.onsite
                          ? colors.primary
                          : colors.Grey.eighthGrey
                      }
                      onValueChange={(e: any) =>
                        setIsChecked({ ...isChecked, onsite: e })
                      }
                    />
                    <Text
                      className={`text-Black-fifthBlack text-base lg:text-lg ${getPlatformSimple}`}
                    >
                      On-Site
                    </Text>
                  </View>

                  <View className={`flex flex-row gap-4 items-center`}>
                    <CheckBox
                      value={isChecked.work_From_Home}
                      color={
                        isChecked.work_From_Home
                          ? colors.primary
                          : colors.Grey.eighthGrey
                      }
                      onValueChange={(e: any) =>
                        setIsChecked({ ...isChecked, work_From_Home: e })
                      }
                    />
                    <Text
                      className={`text-Black-fifthBlack text-base lg:text-lg ${getPlatformSimple}`}
                    >
                      Worked Here
                    </Text>
                  </View>
                </View>
              </View>

              {/** Buttons */}

              <View className={`flex flex-row items-center bg-lime-300. gap-2`}>
                <CustomButton
                  text="Apply"
                  className={`w-[49%]`}
                  classNameText={`text-lg lg:text-xl`}
                />
                <CustomButton
                  text="Clear All"
                  className={`w-[49%] bg-White-customWhite`}
                  classNameText={`text-primary text-lg lg:text-xl`}
                />
              </View>
            </View>
          </Modal>

          {/* <View
            style={{
              padding: 10,
              backgroundColor: "rgba(255,0,0,0.1)",
            }}
          >
            <RangeSlider
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
          </View> */}

          {/** Get Method Data user query */}
          <View
            className={`w-full flex flex-row flex-wrap bg-pink-200. items-center gap-3`}
          >
            {/* <Text>Hi</Text> */}
            {searchKeys.map((txt, indx) => (
              <View
                key={indx}
                className={`w-fit max-w-fit h-fit flex flex-row items-center gap-2 bg-pieChartColors-lightVoilet rounded-md py-1 px-2 justify-between`}
              >
                <Text
                  className={`max-w-72 w-fit break-words ${getPlatformSimple} text-sm lg:text-base`}
                >
                  {txt.search_key}
                </Text>

                <TouchableOpacity
                  onPress={() => handleRemoveFunction(txt.search_key)}
                >
                  <Icons
                    name="remove"
                    family="fa"
                    size={10}
                    color={colors.Black.fourthBlack}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/** Sort By options */}
          <View className={`relative`}>
            <Pressable
              onPress={toggleSortBy}
              className={`w-[30%] h-8 self-end items-center justify-center border border-inputBorderColor rounded-md`}
            >
              <Text
                className={`text-Black-semiBlack ${getPlatForm(
                  "medium"
                )} text-sm lg:text-base`}
              >
                Sort by: {sortBy}
              </Text>
            </Pressable>

            {showList && (
              <View
                className={`bg-White-customWhite w-fit w-[30%]. self-end flex flex-col  justify-center gap-2 rounded-md border border-inputBorderColor px-2 py-2 shadow absolute top-8 z-40`}
                // style={{
                //   boxShadow: `inset 0 1px 6px rgba(0,0,0,0.16)`,
                // }}
              >
                {sortByList.map((txt, indx) => (
                  <TouchableOpacity
                    key={indx}
                    onPress={() => {
                      setSortBy(txt);
                      setShowList(false);
                    }}
                    className={`w-fit`}
                  >
                    <Text
                      className={`text-primary ${getPlatForm(
                        "medium"
                      )} text-sm lg:text-base`}
                    >
                      {txt}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      )}

      {/** Card Data */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className={`bg-pink-300. w-full h-full flex flex-col gap-2`}>
          {add_resource.map((txt, indx) => (
            <TouchableOpacity
              key={indx}
              className={`bg-lime-300. bg-White-customWhite h-fit rounded-md px-4 py-2 flex flex-col gap-2 border border-inputBorderColor`}
            >
              <View className={`flex flex-col`}>
                <View className={`flex flex-row justify-between items-center`}>
                  <Text
                    className={`${getPlatformSemi(
                      "semibold"
                    )} text-Black-semiBlack text-xl lg:text-2xl`}
                  >
                    {txt.primary_skills}
                  </Text>
                  <Text
                    className={`${getPlatformSemi(
                      "semibold"
                    )} text-base lg:text-lg text-primary`}
                  >
                    ${txt.client_rate}{" "}
                    <Text
                      className={`text-Grey-forthGrey text-sm lg:text-base`}
                    >
                      (INR.2341)
                    </Text>
                  </Text>
                </View>

                <Text
                  className={`${getPlatformSimple} text-Grey-fifthGrey text-sm lg:text-base`}
                >
                  {txt.skills}
                </Text>
              </View>

              <View className={`flex flex-row items-center gap-2`}>
                <Text
                  className={`${getPlatformSimple} text-Black-semiBlack text-base lg:text-lg`}
                >
                  R#00000{txt.id}
                </Text>
                <MaterialCommunityIcons
                  name="check-decagram"
                  size={width >= 430 ? 24 : 20}
                  color={colors.primary}
                />
              </View>

              <Text
                className={`${getPlatformSimple} text-Grey-forthGrey text-sm lg:text-base`}
              >
                {txt.total_experience} years / {txt.relevant_experience} years.{" "}
                {txt.resource_current_city}, {txt.resource_current_country}.
                On-Site .
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </CustomMainLayout>
  );
};

export default Search;
