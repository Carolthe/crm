import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CardServico() {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.shadow,
        pressed && { transform: [{ scale: 0.98 }] },
      ]}
    >
      <LinearGradient
        colors={["#0076D3", "#0095FF", "#5CC4FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* Círculos decorativos */}
        <View style={styles.circleOne} />
        <View style={styles.circleTwo} />

        {/* Conteúdo */}
        <View>
          <Text style={styles.title}>
            Serviços{"\n"}Financeiros
          </Text>

          <Text style={styles.description}>
            Conecte-se proativamente com os clientes para oferecer experiências
            inteligentes e personalizadas.
          </Text>
        </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.link}>Saber mais</Text>

          <View style={styles.iconButton}>
            <Text style={styles.arrow}>→</Text>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadow: {
    width: 345,
    borderRadius: 24,
    overflow: "hidden",

    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 8,
  },

  card: {
    height: 270,
    padding: 22,
    justifyContent: "space-between",
  },

  circleOne: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.12)",
    top: -60,
    right: -40,
  },

  circleTwo: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: "rgba(255,255,255,0.08)",
    bottom: -170,
    right: -120,
  },

  title: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 36,
    marginBottom: 14,
  },

  description: {
    color: "rgba(255,255,255,0.95)",
    fontSize: 14,
    lineHeight: 22,
    width: 190,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  link: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 15,
  },

  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },

  arrow: {
    color: "#0076D3",
    fontSize: 26,
    fontWeight: "bold",
  },
});