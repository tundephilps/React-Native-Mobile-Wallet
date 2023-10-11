import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Stats() {
  const navigation = useNavigation();

  return (
    <View className="p-6">
      <View className="flex flex-row items-center justify-between bg-blue-500 rounded-2xl">
        {/* Transfer */}
        <TouchableOpacity
          style={{ borderHeight: 3, borderStyle: "dashed" }}
          className=" flex-grow flex-shrink-0 flex-basis-0 flex flex-col items-center justify-center p-4"
          onPress={() => navigation.navigate("Payment")}
        >
          <Text className=" font-semibold text-white ">
            <MaterialCommunityIcons
              name="bank-transfer"
              size={42}
              color="white"
            />
          </Text>
          <Text className="text-lg font-bold text-white">Transfer</Text>
        </TouchableOpacity>

        {/* Top Up */}

        <TouchableOpacity
          style={{ borderHeight: 3, borderStyle: "dashed" }}
          className="border-l border-gray-300  flex-grow flex-shrink-0 flex-basis-0 flex flex-col items-center justify-center p-4"
          onPress={() => navigation.navigate("TopUp")}
        >
          <Text className=" font-semibold text-white ">
            <Entypo name="wallet" size={42} color="white" />
          </Text>
          <Text className="text-lg font-bold text-white">Top Up</Text>
        </TouchableOpacity>

        {/* Avg Time */}
        <View
          style={{ borderHeight: 3, borderStyle: "dashed" }}
          className=" border-l border-gray-300 flex-grow flex-shrink-0 flex-basis-0 flex flex-col items-center justify-center p-4"
        >
          <Text className=" font-semibold text-white ">
            <MaterialCommunityIcons name="history" size={42} color="white" />
          </Text>
          <Text className="text-lg font-bold text-white">History</Text>
        </View>
      </View>
    </View>
  );
}
