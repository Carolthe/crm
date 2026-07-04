import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ClientsHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Clientes</Text>

      <Pressable style={styles.addButton}>
        <Ionicons name="add" size={22} color="#FFF" />
      </Pressable>
    </View>
  );
}

/* 🎨 STYLE DO HEADER */
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
  },

  addButton: {
    backgroundColor: "#4F8EF7",
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});