import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// App.js

import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import Homepage from "./screens/Homepage";
import Profile from "./screens/Profile";

const App = () => {
  return (
    <View className="flex-1">
      {/* <Homepage /> */}
      <Profile />
      <StatusBar style="light" />
    </View>
  );
};

export default App;
