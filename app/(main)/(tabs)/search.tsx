import { View, Text } from "react-native";
import React from "react";

import { useWindowDimensions, Dimensions } from "react-native";

const Search = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [{ data: [50, 30, 80] }],
  };
  return (
    <View className={`bg-White-customWhite flex-1`}>
      <Text>Search</Text>
    </View>
  );
};

export default Search;
