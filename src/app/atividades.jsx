import React from "react";
import {
  View,
  Text,
 StyleSheet,
  ScrollView,
} from "react-native";

import HeaderLogado from "../components/HeaderLogado";
import ResumoCard from "../components/atividades/ResumoCard";
import AtividadeCard from "../components/atividades/AtividadeCard";
import AddActivityButton from "../components/atividades/AddActivityButton";


export default function Atividades() {

  const atividades = [
    {
      id: 1,
      titulo: "Ligar para João",
      horario: "09:00",
      prioridade: "Alta",
      concluida: false,
    },
    {
      id: 2,
      titulo: "Enviar proposta",
      horario: "10:30",
      prioridade: "Média",
      concluida: false,
    },
    {
      id: 3,
      titulo: "Reunião com Maria",
      horario: "14:00",
      prioridade: "Alta",
      concluida: false,
    },
    {
      id: 4,
      titulo: "Follow-up Pedro",
      horario: "16:00",
      prioridade: "Baixa",
      concluida: true,
    },
  ];

  return (
    <View style={styles.container}>

      <HeaderLogado title="Atividades" />

      <ScrollView
        contentContainerStyle={styles.content}
      >

        <Text style={styles.title}>
          Minhas Atividades
        </Text>

        <Text style={styles.subtitle}>
          Organize seu dia.
        </Text>

        <View style={styles.cards}>
          <ResumoCard
            icon="time-outline"
            titulo="Pendentes"
            valor="3"
            cor="#2563EB"
          />

          <ResumoCard
            icon="checkmark-circle-outline"
            titulo="Concluídas"
            valor="1"
            cor="#22C55E"
          />
        </View>

        {atividades.map((atividade) => (
          <AtividadeCard
            key={atividade.id}
            atividade={atividade}
          />
        ))}

        <AddActivityButton
          onPress={() => {}}
        />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F9FD",
  },

  content: {
    padding: 16,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
  },

  subtitle: {
    color: "#666",
    marginTop: 5,
    marginBottom: 20,
  },

  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});