import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

const items = [
  {
    icon: "user-check",
    backgroundColor: "black",
    color: "skyblue",

    value: "Personal",
  },
  {
    icon: "eye",
    backgroundColor: "black",
    color: "skyblue",

    value: "Privacy & Security",
  },
  {
    icon: "gift",
    backgroundColor: "black",
    color: "skyblue",

    value: "Offers and Rewards",
  },
  {
    icon: "help-circle",
    backgroundColor: "black",
    color: "skyblue",

    value: "Help",
  },
  {
    icon: "log-out",
    backgroundColor: "black",
    color: "skyblue",

    value: "LogOut",
  },
];

export default function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        {items.map(({ icon, backgroundColor, color, value }, index) => (
          <TouchableOpacity
            key={value} // Use 'value' instead of 'label' as the key
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={[styles.statsItem, index === 0 && { marginTop: 0 }]}>
              <View style={[styles.statsItemIcon, { backgroundColor }]}>
                <FeatherIcon color={color} name={icon} size={22} />
              </View>

              <View style={styles.statsItemBody}>
                <Text style={styles.statsItemValue}>{value}</Text>
              </View>

              <FeatherIcon color="#b9bac3" name="chevron-right" size={24} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 12,
  },
  stats: {
    flexDirection: "column",
    alignItems: "stretch",
    borderWidth: 1,
    borderColor: "#3c404a",
    borderRadius: 12,
    padding: 12,
  },
  statsItem: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  statsItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  statsItemBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  statsItemText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#b9bac3",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  statsItemValue: {
    fontSize: 17,
    fontWeight: "600",
    color: "#fff",
  },
});
