import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ResumoCard({
  icon,
  titulo,
  valor,
  cor,
}) {
  return (
    <View style={styles.card}>
      <Ionicons
        name={icon}
        size={28}
        color={cor}
      />

      <Text style={styles.valor}>{valor}</Text>

      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    alignItems: "center",
    elevation: 3,
  },

  valor: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
  },

  titulo: {
    marginTop: 5,
    color: "#666",
  },
});