import React from "react";
import { View, Text, StyleSheet } from "react-native";

const features = [
  "CRM completo",
  "Gestão de clientes",
  "Funil de vendas",
  "Agenda integrada",
  "Financeiro",
  "Relatórios",
];

export default function FeaturesGrid() {
  return (
    <View style={styles.container}>
      {features.map((item) => (
        <View key={item} style={styles.card}>
          <Text style={styles.icon}>✓</Text>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 12,
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8EEF5",
  },
  icon: {
    color: "#0076D3",
    fontWeight: "700",
  },
  text: {
    marginTop: 8,
    color: "#0A2540",
  },
});