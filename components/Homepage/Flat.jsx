import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    imageSource: require("../../assets/promo.jpg"), // Replace with your image source
    text: "Double your Deposit",
    text2: "100% on real account with deposit from $10- $500",
    time: "00:42:51",
  },
  {
    id: "2",
    imageSource: require("../../assets/promo2.jpg"), // Replace with your image source
    text: "Low intrest Loans",
    text2: "100% on real account with deposit from $10- $500",
    time: "05:07:08",
  },
  {
    id: "3",
    imageSource: require("../../assets/promo3.jpg"), // Replace with your image source
    text: "Asset Managment",
    text2: "100% on real account with deposit from $10- $500",
    time: "28:46:00",
  },
];

const HorizontalFlatList = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image source={item.imageSource} style={styles.image} />
        <Text className="text-white font-extrabold text-lg absolute left-2 top-2">
          {item.text}
        </Text>

        <Text className="text-white font-extralight text-sm absolute top-9">
          {item.text2}
        </Text>
        <Text className="text-white font-bold text-sm absolute bottom-3">
          <FontAwesome5 name="stopwatch" size={24} color="white" /> {item.time}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    position: "relative",
    marginLeft: 20,
    alignItems: "center",
  },
  image: {
    width: 240,
    height: 140,
    borderRadius: 8,
  },
  text: {
    position: "absolute",
    marginTop: 8,
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default HorizontalFlatList;
