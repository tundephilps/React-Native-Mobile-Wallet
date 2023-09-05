import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Stats from "../components/Stats";
import Select from "../components/Select";
import List from "../components/List";
import Promo from "../components/Promo";

const Homepage = () => {
  return (
    <View className="flex-1 bg-zinc-900">
      <SafeAreaView>
        <View className="flex flex-row justify-between px-8">
          <View className="flex flex-row">
            <Image
              source={require("../assets/logo2.png")}
              style={{ height: 30, width: 30 }}
              resizeMode="contain"
            />
            <Text className="text-2xl text-white">OptimumPay</Text>
          </View>
          <View>
            <Ionicons name="settings" size={24} color="white" />
          </View>
        </View>
        <View className="flex flex-row items-center justify-between px-8 pt-4">
          <View className="flex flex-col gap-3">
            <Text className="text-white text-2xl">Hello Jay</Text>
            <Text className="text-gray-400 text-sm">
              Your avaliable balance
            </Text>
          </View>
          <View>
            <Text className="text-white font-semibold text-3xl">$28,000</Text>
          </View>
        </View>

        {/* Stats */}
        <Stats />
        <List />
        <Promo />
      </SafeAreaView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
