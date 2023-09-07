import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HorizontalFlatList from "./Flat";

const Promo = () => {
  return (
    <View className=" ">
      <Text className="text-white text-base px-8">Promo and Discounts</Text>
      <HorizontalFlatList />
    </View>
  );
};

export default Promo;

const styles = StyleSheet.create({});
