import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

import { useFonts } from "expo-font";
const Welcome = () => {
  const [fontsLoaded] = useFonts({
    RockSalt: require("../assets/fonts/RockSalt-Regular.ttf"),
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
      <Text className="  text-blue-400 " style={styles.write}>
        Optimum Pay
      </Text>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  write: {
    fontFamily: "RockSalt",
    fontSize: 32,
    fontWeight: "600",
  },
});
