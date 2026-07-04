import { View, Text, StyleSheet } from "react-native";

export default function Client({ name, status }) {
  return (
    <View style={styles.row}>
      <Text>{name}</Text>
      <Text>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
});