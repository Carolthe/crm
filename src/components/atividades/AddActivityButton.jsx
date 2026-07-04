import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddActivityButton({
  onPress,
}) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      <Ionicons
        name="add"
        size={24}
        color="#FFF"
      />

      <Text style={styles.text}>
        Nova Atividade
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 25,
    backgroundColor: "#2563EB",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  text: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 8,
  },
});