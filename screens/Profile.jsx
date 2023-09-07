import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import Settings from "../components/Profile/Settings";

const Profile = () => {
  return (
    <View className="flex-1 bg-zinc-900">
      <SafeAreaView>
        <View className="relative">
          <Image
            source={require("../assets/gloss.jpg")}
            style={{
              height: 300,
              width: "100",
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
          />
          <View className="absolute w-full  px-6 py-8">
            <View className="   flex-row items-center justify-between">
              <Text className="text-white text-2xl">My Profile</Text>

              <Ionicons name="settings" size={24} color="white" />
            </View>
            <View className="top-25 flex flex-row items-center justify-between pt-6">
              <View>
                <Image
                  source={require("../assets/face.jpg")}
                  style={{
                    height: 90,
                    width: 90,
                    borderRadius: 9999,
                  }}
                />
              </View>
              <View>
                <Text className="text-white text-2xl">TundePhilps</Text>
                <Text className="text-white text-1xl">08034574154</Text>
                <Text className="text-white text-1xl">
                  tundephilps@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View className="absolute w-full h-full bottom-[90%]">
            <Image
              source={require("../assets/card.png")}
              style={{
                width: "80%",
                borderRadius: 9999,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View>
          <Settings />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
