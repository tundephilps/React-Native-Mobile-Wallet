import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabs from "./containers/BottomTabs";

import Welcome from "./screens/Welcome";

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer
      //onReady={() => changeNavigationBarColor("white")}
      >
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
