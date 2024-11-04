import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/250?u=12" }}
            style={styles.userImg}
          />
          <View style={styles.userTxtWrapper}>
            <Text style={[styles.userText, { fontSize: 12 }]}>Hi, Annie!</Text>
            <Text style={[styles.userText, { fontSize: 16 }]}>
              Your <Text style={styles.boldText}>Budget</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.btnWrapper}>
          <Text style={styles.btnText}>My Transactiopns</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  userInfoWrapper: { flexDirection: "row", alignItems: "center" },
  userImg: { height: 50, width: 50, borderRadius: 30 },
  userTxtWrapper: { marginLeft: 10 },
  boldText: { fontWeight: "700" },
  userText: { color: Colors.white },
  btnWrapper: {
    borderColor: "#666",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  btnText: { color: Colors.white, fontSize: 12 },
});
