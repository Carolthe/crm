import { View, Text, StyleSheet } from "react-native";

export default function LeadSummaryCard({
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
    flex: 1,
    backgroundColor: "#FFF",
    marginHorizontal: 5,
    padding: 14,
    borderRadius: 14,
    borderLeftWidth: 5,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  title: {
    color: "#777",
    fontSize: 12,
  },

  value: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 4,
  },
});