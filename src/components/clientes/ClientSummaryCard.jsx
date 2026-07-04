import { View, Text, StyleSheet } from "react-native";

export default function ClientSummaryCard({ label, value, color }) {
  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

/* 🎨 STYLE DO CARD */
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 14,
    borderLeftWidth: 4,
  },

  label: {
    color: "#777",
    fontSize: 12,
  },

  value: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 4,
  },
});