import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Notifications() {
  return (
    <View>
      <Text style={styles.title}>Notifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginHorizontal: 20,
  },
});
