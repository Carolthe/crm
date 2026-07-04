import { View, Text, StyleSheet } from "react-native";

export default function Task({ text, time }) {
  return (
    <View style={styles.row}>
      <Text>{text}</Text>
      <Text>{time}</Text>
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