import FeatherIcon from "react-native-vector-icons/Feather";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    text: "Commodities",
    imageSource: require("../assets/commodities.png"),
  },
  { id: 2, text: "ETF", imageSource: require("../assets/cloud.png") },

  { id: 3, text: "Oil & Gas", imageSource: require("../assets/oil.png") },

  { id: 4, text: "Gold", imageSource: require("../assets/gold.png") },

  { id: 5, text: "BlockChain", imageSource: require("../assets/bitcoin.png") },

  { id: 6, text: "Tech & AI", imageSource: require("../assets/tech.png") },

  { id: 7, text: "Health", imageSource: require("../assets/Health.png") },

  { id: 8, text: "Agriculture", imageSource: require("../assets/agric.png") },
  // Add more data items as needed
];

const Investment: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const filteredData = data.filter((item) =>
    item.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView className="bg-zinc-900 flex-1">
      {/* Header */}
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
              Find a Stock
            </Text>
          </View>
        </View>
      </View>

      <View style={{ padding: 15 }}>
        {/* Search */}
        <View>
          <TextInput
            placeholder="Search by name or Stock Symbol"
            placeholderTextColor="#9695b0"
            style={styles.searchInput}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <View style={styles.searchFloating}>
            <TouchableOpacity>
              <View style={styles.searchButton}>
                <FeatherIcon name="search" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            color: "white",
            paddingTop: 12,
            fontSize: 18,
            paddingBottom: 12,
          }}
        >
          Categories
        </Text>
        <ScrollView>
          <View
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: 25,
            }}
          >
            {filteredData.map((item) => (
              <TouchableOpacity
                key={item.id}
                className=" bg-slate-800"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  width: "46%",
                  paddingVertical: 20,
                  borderRadius: 15,
                }}
              >
                <View
                  className=" bg-slate-800"
                  style={{
                    padding: 8,

                    shadowColor: "#90a0ca",
                    shadowOffset: {
                      width: 4,
                      height: 7,
                    },
                    shadowOpacity: 0.7,
                    shadowRadius: 60,
                    elevation: 9,
                  }}
                >
                  <Image
                    style={{ height: 20, width: 20 }}
                    source={item.imageSource}
                    resizeMode="cover"
                  />
                </View>
                <Text style={{ color: "white", fontWeight: 200 }}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            ))}

            {/* <TouchableOpacity
              className=" bg-slate-800"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                width: "46%",
                paddingVertical: 20,
                borderRadius: 15,
              }}
            >
              <View
                className=" bg-slate-800"
                style={{
                  padding: 8,

                  shadowColor: "#90a0ca",
                  shadowOffset: {
                    width: 4,
                    height: 7,
                  },
                  shadowOpacity: 0.7,
                  shadowRadius: 60,
                  elevation: 9,
                }}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../assets/commodities.png")}
                  resizeMode="cover"
                />
              </View>
              <Text style={{ color: "white" }}>Commodities</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className=" bg-slate-800"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                width: "46%",
                borderRadius: 15,
              }}
            >
              <View
                className=" bg-slate-800"
                style={{
                  padding: 8,

                  shadowColor: "#90a0ca",
                  shadowOffset: {
                    width: 4,
                    height: 7,
                  },
                  shadowOpacity: 0.7,
                  shadowRadius: 60,
                  elevation: 9,
                }}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../assets/cloud.png")}
                  resizeMode="cover"
                />
              </View>
              <Text style={{ color: "white" }}>ETF</Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Investment;

const styles = StyleSheet.create({
  searchInput: {
    height: 56,
    backgroundColor: "#f3f3f6",
    paddingHorizontal: 16,
    color: "#1a2525",
    fontSize: 18,
    borderRadius: 9999,
  },
  searchFloating: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  searchButton: {
    alignSelf: "center",
    width: 44,
    height: 44,
    borderRadius: 9999,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
