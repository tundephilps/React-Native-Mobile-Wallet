import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  Button,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import BottomSheet from "../components/Bottomsheet";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Contacts from "expo-contacts";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ContactPicker from "../components/Airtime/ContactPicker";

const Airtime = () => {
  const showToast = () => {
    ToastAndroid.show("Transaction Sucessfull!", ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "All Your Base Are Belong To Us",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Transaction Sucessfull !",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      400
    );
  };

  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // Get the navigation object
  const items = [100, 200, 500, 1000, 2000, 3000];
  const [checkedItem, setCheckedItem] = useState(null);

  const [selectedAmount, setSelectedAmount] = useState("");

  const openContactPicker = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync();
      setContacts(data);
      setModalVisible(true);
    }
  };

  const pickContact = (contact) => {
    setSelectedContact(contact);
    setModalVisible(false);
  };

  const handleItemPress = (item) => {
    setCheckedItem(item);
    setSelectedAmount(item.toString());
  };

  const handleAmountChange = (amount) => {
    setCheckedItem(null);
    setSelectedAmount(amount);
  };
  return (
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
              Airtime
            </Text>
          </View>
        </View>
      </View>

      {/* Body */}
      <View style={{ padding: 15 }}>
        <Text className="text-white">Choose an amount</Text>
        <View className="flex  gap-3 pt-6 flex-wrap flex-row items-center ">
          {items.map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => handleItemPress(number)}
            >
              <View
                style={{ width: 100 }}
                className={`bg-slate-800 py-4  rounded-md flex items-center justify-center ${
                  checkedItem === number ? "border-blue-2" : "border-black-2"
                }`}
              >
                <Text
                  className={`text-white font-medium ${
                    checkedItem === number ? "text-blue-600" : ""
                  }`}
                >
                  N{number}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View
            style={{
              paddingTop: 12,
              display: "flex",
              gap: 12,
            }}
          >
            <View>
              <Text className="text-white font-medium">Amount</Text>

              <TextInput
                className="border-2 p-2  text-black bg-white"
                style={{ borderRadius: 8, height: 52 }}
                value={selectedAmount}
                onChangeText={(text) => handleAmountChange(text)}
                onFocus={(event) => {
                  // `bind` the function if you're using ES6 classes
                }}
              />
            </View>
            <View>
              <Text className="text-white font-medium">Network</Text>

              <BottomSheet />
            </View>
            <View>
              <ContactPicker />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity
          onPress={() => showToastWithGravityAndOffset()}
          style={{ paddingTop: "35%" }}
        >
          <View
            style={{
              backgroundColor: "#0569FF", // Background color
              marginTop: 6, // Margin top
              height: 54,
              paddingHorizontal: 18,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16, // Font size
                fontWeight: "normal", // Font weight
                color: "#fff", // Text color
              }}
            >
              Buy
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Airtime;

const styles = StyleSheet.create({});
