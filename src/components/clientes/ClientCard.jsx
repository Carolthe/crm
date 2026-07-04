import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ClientCard({ name, email, status }) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Ionicons name="person" size={18} color="#FFF" />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      <View
        style={[
          styles.status,
          status === "Ativo" && { backgroundColor: "#34C759" },
          status === "Lead" && { backgroundColor: "#4F8EF7" },
          status === "Negociação" && { backgroundColor: "#FFB443" },
        ]}
      >
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </View>
  );
}

/* 🎨 STYLE DO CARD CLIENTE */
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#4F8EF7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  email: {
    fontSize: 12,
    color: "#777",
  },

  status: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  statusText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
});