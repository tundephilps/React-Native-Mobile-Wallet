import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import * as Clipboard from "expo-clipboard";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function TopUp() {
  const textToCopy = "20035462419";

  const copyToClipboard = async () => {
    await Clipboard.setString(textToCopy);
  };

  function showToast() {
    ToastAndroid.show("Copied Sucessfully", ToastAndroid.SHORT);
  }

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-zinc-900">
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.alert}>
          <View style={styles.alertIcon} className="pt-9">
            <Image
              style={{ height: 150, width: 150 }}
              source={require("../assets/topup.png")}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.alertTitle} className="pt-9">
            Hi Jay
          </Text>

          <Text style={styles.alertMessage}>
            Receive money from your friends on OptimumPay with your account
            number
          </Text>

          <TouchableOpacity onPress={copyToClipboard} onPressIn={showToast}>
            <View style={styles.btn}>
              <View
                style={{
                  display: "flex",
                  gap: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.btnText}>{textToCopy}</Text>

                <Feather name="copy" size={24} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingTop: "40%",
  },
  alert: {
    position: "relative",
    flexDirection: "column",
    alignItems: "stretch",
  },
  alertIcon: {
    width: 80,
    height: 80,
    borderRadius: 16,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  alertTitle: {
    marginBottom: 16,
    fontSize: 32,
    fontWeight: "700",
    color: "#343e54",
    textAlign: "center",
  },
  alertMessage: {
    marginBottom: 24,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    color: "#9a9a9a",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: "#000",
    borderColor: "#000",
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
  },
});
