import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function CustomerCare() {
  return (
    <SafeAreaView className="bg-zinc-900 flex-1">
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title} className="text-blue-400">
          Get Help 💪
        </Text>

        <TouchableOpacity
          onPress={() => {
            // handle onPress for the first item
          }}
        >
          <View style={styles.card}>
            <Image
              alt=""
              resizeMode="cover"
              style={styles.cardImg}
              source={{
                uri: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2404&q=80",
              }}
            />

            <View>
              <Text style={styles.cardTitle}>Squat</Text>

              <View style={styles.cardStats}>
                <View style={styles.cardStatsItem}>
                  <FeatherIcon color="#636a73" name="clock" />

                  <Text style={styles.cardStatsItemText}>10 mins</Text>
                </View>

                <View style={styles.cardStatsItem}>
                  <FeatherIcon color="#636a73" name="zap" />

                  <Text style={styles.cardStatsItemText}>22 cals</Text>
                </View>
              </View>
            </View>

            <View style={styles.cardAction}>
              <FeatherIcon color="#9ca3af" name="chevron-right" size={22} />
            </View>
          </View>
        </TouchableOpacity>

        {/* Repeat the above structure for other items */}

        {/* Second item */}
        <TouchableOpacity
          onPress={() => {
            // handle onPress for the first item
          }}
        >
          <View style={styles.card}>
            <Image
              alt=""
              resizeMode="cover"
              style={styles.cardImg}
              source={{
                uri: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2404&q=80",
              }}
            />

            <View>
              <Text style={styles.cardTitle}>Squat</Text>

              <View style={styles.cardStats}>
                <View style={styles.cardStatsItem}>
                  <FeatherIcon color="#636a73" name="clock" />

                  <Text style={styles.cardStatsItemText}>10 mins</Text>
                </View>

                <View style={styles.cardStatsItem}>
                  <FeatherIcon color="#636a73" name="zap" />

                  <Text style={styles.cardStatsItemText}>22 cals</Text>
                </View>
              </View>
            </View>

            <View style={styles.cardAction}>
              <FeatherIcon color="#9ca3af" name="chevron-right" size={22} />
            </View>
          </View>
        </TouchableOpacity>

        {/* Third item */}
        <TouchableOpacity
          onPress={() => {
            // handle onPress for the first item
          }}
        >
          <View style={styles.card}>
            <Image
              alt=""
              resizeMode="cover"
              style={styles.cardImg}
              source={{
                uri: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2404&q=80",
              }}
            />

            <View>
              <Text style={styles.cardTitle}>Squat</Text>

              <View style={styles.cardStats}>
                <View style={styles.cardStatsItem}>
                  <FeatherIcon color="#636a73" name="clock" />

                  <Text style={styles.cardStatsItemText}>10 mins</Text>
                </View>

                <View style={styles.cardStatsItem}>
                  <FeatherIcon color="#636a73" name="zap" />

                  <Text style={styles.cardStatsItemText}>22 cals</Text>
                </View>
              </View>
            </View>

            <View style={styles.cardAction}>
              <FeatherIcon color="#9ca3af" name="chevron-right" size={22} />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 12,
  },
  card: {
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardImg: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
    marginBottom: 8,
  },
  cardStats: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardStatsItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  cardStatsItemText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#636a73",
    marginLeft: 2,
  },
  cardAction: {
    marginLeft: "auto",
  },
});
