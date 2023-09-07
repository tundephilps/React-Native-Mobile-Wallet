import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Stats from "../components/Homepage/Stats";
import Select from "../components/Homepage/Select";
import List from "../components/Homepage/List";
import Promo from "../components/Homepage/Promo";

const Homepage = () => {
  return (
    <View className="flex-1 bg-zinc-900 pb-16">
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
        <ScrollView>
          <Stats />
          <List />
          <Promo />
          <View className="h-40"></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
