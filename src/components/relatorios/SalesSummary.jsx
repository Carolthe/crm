import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SalesSummary({
  titulo,
  vendas,
  abertas,
  perdidas,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {titulo}
      </Text>

      <View style={styles.row}>
        <Text>✅ Concluídas</Text>
        <Text style={styles.green}>
          {vendas}
        </Text>
      </View>

      <View style={styles.row}>
        <Text>🟡 Em andamento</Text>
        <Text style={styles.orange}>
          {abertas}
        </Text>
      </View>

      <View style={styles.row}>
        <Text>🔴 Perdidas</Text>
        <Text style={styles.red}>
          {perdidas}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    marginTop: 20,
    borderRadius: 18,
    padding: 20,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },

  green: {
    color: "#22C55E",
    fontWeight: "700",
  },

  orange: {
    color: "#F59E0B",
    fontWeight: "700",
  },

  red: {
    color: "#EF4444",
    fontWeight: "700",
  },
});