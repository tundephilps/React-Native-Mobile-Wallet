import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

const items = [
  {
    icon: "twitch",
    color: "#9146ff",
    label: "Stamp Duty",
    company: "UBA",
    location: "ETF",
    type: "Successful",
    salary: -500,
    date: "21/9/22",
  },
  {
    icon: "slack",
    color: "#e5ac2c",
    label: "Airtime",
    company: "MTN",
    location: "Mobile Payment",
    type: "Successful",
    salary: -2500,
    date: "23/9/22",
  },
  {
    icon: "linkedin",
    color: "#0d65c2",
    label: "Electricity",
    company: "PHCN",
    location: "Mobile Payment",
    type: "Bill",
    salary: -76000,
    date: "3 days ago",
  },
  {
    icon: "twitter",
    color: "#1ca2f1",
    label: "Felix OlaWale",
    company: "Fidelity",
    location: "Inward Transfer",
    type: "Successfull",
    salary: +310000,
    date: "5 day ago",
  },
  {
    icon: "figma",
    color: "#f24d1e",
    label: "Internet Subscription",
    company: "Globalcom",
    location: "Mobile Payment",
    type: "Sucessfull",
    salary: -16500,
    date: "7 days ago",
  },
  {
    icon: "github",
    color: "#161b22",
    label: "Peter Ducan",
    company: "UBA",
    location: "POS Transfer",
    type: "Pending",
    salary: 225000,
    date: "8 days ago",
  },
  {
    icon: "facebook",
    color: "#4267B2",
    label: "Health Insurance",
    company: "UCH",
    location: "ETF",
    type: "Sucessfull",
    salary: 130000,
    date: "2 days ago",
  },
];

export default function () {
  return (
    <SafeAreaView className="bg-zinc-900">
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Transaction History</Text>

        {items.map(
          (
            { icon, color, label, company, location, type, salary, date },
            index
          ) => {
            return (
              <View
                key={index}
                style={[
                  styles.cardWrapper,
                  index === 0 && { borderTopWidth: 0 },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                >
                  <View style={styles.card}>
                    <View style={styles.cardTop}>
                      <View
                        style={[styles.cardLogo, { backgroundColor: color }]}
                      >
                        <FeatherIcon color="#fff" name={icon} size={24} />
                      </View>

                      <View style={styles.cardBody}>
                        <View>
                          <Text style={styles.cardTitle}>{label}</Text>

                          <Text style={styles.cardCompany}>{company}</Text>
                        </View>

                        <Text style={styles.cardSalary}>
                          {salary.toLocaleString("en-NG")}N /yr
                        </Text>
                      </View>
                    </View>

                    <View style={styles.cardFooter}>
                      <View style={styles.cardFooterItem}>
                        <FeatherIcon color="#464646" name="map-pin" size={14} />

                        <Text style={styles.cardFooterItemText}>
                          {location}
                        </Text>
                      </View>

                      <View style={styles.cardFooterItem}>
                        <FeatherIcon
                          color="#464646"
                          name="briefcase"
                          size={14}
                        />

                        <Text style={styles.cardFooterItemText}>{type}</Text>
                      </View>

                      <View
                        style={[styles.cardFooterItem, { marginLeft: "auto" }]}
                      >
                        <FeatherIcon color="#464646" name="clock" size={14} />

                        <Text style={styles.cardFooterItemText}>{date}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }
        )}
        <View className="h-40"></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 3,
  },
  card: {
    paddingVertical: 14,
  },
  cardWrapper: {
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    marginTop: 4,
    marginHorizontal: -8,
  },
  cardFooterItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  cardFooterItemText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ccc",
    marginLeft: 4,
  },
  cardLogo: {
    width: 48,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "cyan",
    marginBottom: 4,
  },
  cardCompany: {
    fontSize: 14,
    fontWeight: "500",
    color: "#818181",
  },
  cardSalary: {
    fontSize: 15,
    fontWeight: "700",
    color: "#959796",
  },
});
