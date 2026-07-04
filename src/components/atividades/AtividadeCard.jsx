import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AtividadeCard({
  atividade,
}) {

  function corPrioridade(prioridade) {
    switch (prioridade) {
      case "Alta":
        return "#EF4444";

      case "Média":
        return "#F59E0B";

      default:
        return "#22C55E";
    }
  }

  return (
    <View style={styles.card}>
      <Ionicons
        name={
          atividade.concluida
            ? "checkmark-circle"
            : "ellipse-outline"
        }
        size={26}
        color={
          atividade.concluida
            ? "#22C55E"
            : "#3B82F6"
        }
      />

      <View style={styles.info}>
        <Text style={styles.nome}>
          {atividade.titulo}
        </Text>

        <View style={styles.row}>
          <Ionicons
            name="time-outline"
            size={16}
            color="#777"
          />

          <Text style={styles.hora}>
            {atividade.horario}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.badge,
          {
            backgroundColor: corPrioridade(
              atividade.prioridade
            ),
          },
        ]}
      >
        <Text style={styles.badgeText}>
          {atividade.prioridade}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  nome: {
    fontSize: 16,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  hora: {
    marginLeft: 6,
    color: "#666",
  },

  badge: {
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  badgeText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 12,
  },
});