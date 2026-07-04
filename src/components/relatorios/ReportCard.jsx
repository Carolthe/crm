import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ReportCard({
  icon,
  title,
  value,
  color,
}) {
  return (
    <View style={styles.card}>
      <Ionicons
        name={icon}
        size={30}
        color={color}
      />

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    elevation: 3,
  },

  title: {
    marginTop: 12,
    color: "#666",
  },

  value: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: "700",
  },
});