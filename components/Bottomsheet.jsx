import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function BottomSheet() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectNetwork = (network) => {
    setSelectedNetwork(network);
    toggleModal();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "white",
            height: 52,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "black", fontWeight: 200 }}>
            {selectedNetwork || "Choose Network"}
          </Text>
          <View>
            <EvilIcons name="chevron-down" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <View style={{ display: "flex", alignItems: "flex-end" }}>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={{ color: "blue" }}>
                <Ionicons name="ios-close-outline" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require("../assets/mtn.png")}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={{ fontWeight: 400, fontSize: 25 }}
                onPress={() => selectNetwork("MTN")}
              >
                MTN
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require("../assets/airtel.png")}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={{ fontWeight: 400, fontSize: 25 }}
                onPress={() => selectNetwork("Airtel")}
              >
                Airtel
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require("../assets/glo.jpg")}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={{ fontWeight: 400, fontSize: 25 }}
                onPress={() => selectNetwork("Glo")}
              >
                Glo
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require("../assets/eti.png")}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={{ fontWeight: 400, fontSize: 25 }}
                onPress={() => selectNetwork("9Mobile")}
              >
                9Mobile
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default BottomSheet;
