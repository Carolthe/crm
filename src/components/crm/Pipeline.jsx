import { View, Text, StyleSheet } from "react-native";

export default function Pipeline({ label, value, color }) {
  return (
    <View style={styles.pipelineRow}>
      <Text>{label}</Text>

      <View style={styles.bar}>
        <View
          style={[
            styles.fill,
            {
              width: `${value * 2.5}%`,
              backgroundColor: color,
            },
          ]}
        />
      </View>

      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pipelineRow: {
    marginBottom: 14,
  },
  bar: {
    height: 10,
    backgroundColor: "#ECECEC",
    borderRadius: 8,
    marginVertical: 5,
  },
  fill: {
    height: 10,
    borderRadius: 8,
  },
});