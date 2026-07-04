import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SaleCard({
  client,
  product,
  value,
  status,
}) {
  const colors = {
    Pago: "#34C759",
    Pendente: "#FFB443",
    "Em análise": "#A35CFF",
  };

  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Ionicons
          name="cash-outline"
          size={22}
          color="#FFF"
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.client}>
          {client}
        </Text>

        <Text style={styles.product}>
          {product}
        </Text>

        <Text style={styles.value}>
          {value}
        </Text>
      </View>

      <View
        style={[
          styles.badge,
          {
            backgroundColor:
              colors[status] || "#999",
          },
        ]}
      >
        <Text style={styles.badgeText}>
          {status}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  icon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#34C759",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  info: {
    flex: 1,
  },

  client: {
    fontWeight: "700",
    fontSize: 16,
  },

  product: {
    color: "#666",
    marginTop: 3,
  },

  value: {
    marginTop: 5,
    fontWeight: "700",
    color: "#34C759",
    fontSize: 16,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  badgeText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
});