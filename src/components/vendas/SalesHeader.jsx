import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SalesHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Vendas</Text>

      <Pressable style={styles.button}>
        <Ionicons
          name="add"
          size={22}
          color="#FFF"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
  },

  button: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4F8EF7",
  },
});