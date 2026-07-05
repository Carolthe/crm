import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

export default function Card({ icon, title, value, color }) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  return (
    <View style={[styles.card, styles.cardDesktop]}>
      <Ionicons name={icon} size={28} color={color} />

      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "43%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardDesktop: {
    width: "49%",
  },
  cardTitle: {
    marginTop: 10,
    color: "#777",
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 4,
  },
});