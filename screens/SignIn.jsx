import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginForm from "../components/LoginForm";

const SignIn = () => {
  return (
    <View className="flex-1 bg-zinc-900">
      <SafeAreaView>
        <View className="relative">
          <Image
            source={require("../assets/lock.jpg")}
            style={{
              height: 300,
              width: "100",
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
          />
        </View>
        <LoginForm />
      </SafeAreaView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
