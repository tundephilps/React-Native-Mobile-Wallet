import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const List = () => {
  return (
    <View className="px-8">
      <Text className="text-white text-2xl font-normal">Payment List</Text>
      <View className="flex flex-row flex-wrap items-center  py-2 gap-3">
        <View className="flex-col gap-2 items-center">
          <View className="flex items-center justify-center px-3 bg-slate-800 h-14 w-14 rounded-md">
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={24}
              color="yellow"
            />
          </View>
          <Text className="text-gray-400 font-normal">Electricity</Text>
        </View>
        <View className="flex-col gap-2 items-center">
          <View className="flex items-center justify-center px-3 bg-slate-800 h-14 w-14 rounded-md">
            <Feather name="wifi" size={24} color="cyan" />
          </View>
          <Text className="text-gray-400 font-normal">Internet</Text>
        </View>
        <View className="flex-col gap-2 items-center">
          <View className="flex items-center justify-center px-3 bg-slate-800 h-14 w-14 rounded-md">
            <Ionicons name="md-wallet" size={24} color="green" />
          </View>
          <Text className="text-gray-400 font-normal">Wallet</Text>
        </View>
        <View className="flex-col gap-2 items-center">
          <View className="flex items-center justify-center px-3 bg-slate-800 h-14 w-14 rounded-md">
            <MaterialIcons name="medical-services" size={24} color="red" />
          </View>
          <Text className="text-gray-400 font-normal">Insurance</Text>
        </View>
        <View className="flex-col gap-2 items-center">
          <View className="flex items-center justify-center px-3 bg-slate-800 h-14 w-14 rounded-md">
            <MaterialIcons name="shopping-cart" size={24} color="gray" />
          </View>
          <Text className="text-gray-400 font-normal">Merchant</Text>
        </View>
        <View className="flex-col gap-2 items-center">
          <View className="flex items-center justify-center px-3 bg-slate-800 h-14 w-14 rounded-md">
            <Entypo name="mobile" size={24} color="blue" />
          </View>
          <Text className="text-gray-400 font-normal">Top-Up</Text>
        </View>
        <View className="flex-col gap-2 items-center">
          <View className="flex items-center justify-center px-3 bg-slate-800 h-14 w-14 rounded-md">
            <Octicons name="checklist" size={24} color="yellow" />
          </View>
          <Text className="text-gray-400 font-normal">Bills</Text>
        </View>
        <View className="flex-col gap-2 items-center">
          <View className="flex items-center justify-center px-3 bg-slate-800 h-14 w-14 rounded-md">
            <Ionicons name="options" size={24} color="orange" />
          </View>
          <Text className="text-gray-400 font-normal">More</Text>
        </View>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
