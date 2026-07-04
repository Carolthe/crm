import { View, Text, StyleSheet } from "react-native";

export default function SalesSummaryCard({
  title,
  value,
  color,
}) {
  return (
    <View
      style={[
        styles.card,
        { borderLeftColor: color },
      ]}
    >
      <Text style={styles.label}>{title}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    marginHorizontal: 4,
    padding: 14,
    borderRadius: 14,
    borderLeftWidth: 5,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  label: {
    color: "#777",
    fontSize: 12,
  },

  value: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 5,
  },
});