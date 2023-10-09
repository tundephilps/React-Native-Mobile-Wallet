import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabs from "./containers/BottomTabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import SignIn from "./screens/SignIn";
import Call from "./screens/Call";
import Homepage from "./screens/Homepage";
import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <BottomTabs /> */}
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />

          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Call" component={Call} />

          <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
