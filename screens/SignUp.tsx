import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, View } from "react-native";
import SignupForm from "../components/SignUp/SignupForm";

const SignUp = () => {
  return (
    <View className="flex-1 bg-zinc-900">
      <SafeAreaView>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../assets/atm2.jpg")}
            style={{
              height: 120,
              width: "100",
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
          />
        </View>
        <SignupForm />
      </SafeAreaView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
