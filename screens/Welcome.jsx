import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

import { useFonts } from "expo-font";
const Welcome = () => {
  const [fontsLoaded] = useFonts({
    Exo: require("../assets/fonts/Exo.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      className="flex-1 items-center justify-center"
      source={require("../assets/Welcome.jpeg")}
    >
      <View className="flex items-center justify-center w-40 h-40">
        <Image
          className="w-40 h-40"
          resizeMode="contain"
          source={require("../assets/logo2.png")}
        />
      </View>
      <Text
        className="  text-4xl text-blue-400 "
        style={{ fontFamily: "Exo", fontWeight: 700 }}
      >
        OptimumPay
      </Text>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
