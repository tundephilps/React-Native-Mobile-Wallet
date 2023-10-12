import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Payment = () => {
  const navigation = useNavigation(); // Get the navigation object
  const [selected, setSelected] = React.useState("");
  const [categories, setCategories] = React.useState([]);

  const bankData = [
    { key: "Access Bank", value: "Access Bank" },
    { key: "Ecobank", value: "Ecobank" },
    { key: "FairMoney", value: "FairMoney" },
    { key: "Fidelity", value: "Fidelity" },
    { key: "FirstBank", value: "FirstBank" },
  ];

  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <>
      <SafeAreaView className="bg-zinc-900 flex-1">
        <View
          className="bg-zinc-900"
          style={{
            height: 48,
            display: "flex",
            justifyContent: "center",
            paddingHorizontal: 15,
            borderBottomWidth: 1,
            borderBottomColor: "lightgray",
          }}
        >
          <View
            style={{
              height: 27,
              width: 209,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("BottomTabs")}>
              <View>
                <MaterialIcons name="arrow-back-ios" size={24} color="white" />
              </View>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 300,
                  lineHeight: 27,
                  color: "white",
                }}
              >
                Add Recipient
              </Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 15 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 7,
              position: "relative",
              zIndex: 4,
            }}
          >
            <View style={{ height: 24 }}>
              <Text style={{ fontSize: 18, fontWeight: 300, color: "white" }}>
                Bank
              </Text>
            </View>
            <SelectList
              setSelected={setSelected}
              data={bankData}
              boxStyles={{
                backgroundColor: "#Eeeeee",
                height: 56,
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
              placeholder="Select Bank"
              dropdownStyles={{
                backgroundColor: "#eeeeee",
                position: "absolute",
                zIndex: 10,
                width: "100%",
                top: "100%",
              }}
              inputStyles={{
                color: "#545454",
                fontWeight: "100",
                fontSize: 16,
                marginTop: 4,
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 300,
              color: "white",
              paddingTop: 12,
              height: 42,
            }}
          >
            Account number
          </Text>
          <View
            style={{
              display: "flex",
              backgroundColor: "white",
              borderBottomColor: "#000000",
              borderBottomWidth: 1,
              borderRadius: 10,
            }}
          >
            <TextInput
              placeholder="Enter Account Number"
              editable
              multiline
              onChangeText={onChangeNumber}
              numberOfLines={2}
              maxLength={40}
              type="number"
              inputMode="numeric"
              style={{ paddingHorizontal: 20, height: 58 }}
            />
          </View>
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: "95%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <View
              style={{
                backgroundColor: "#4460EF", // Background color
                marginTop: 6, // Margin top
                height: 56,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#fff", // Text color
                }}
              >
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Payment;

const styles = StyleSheet.create({});
