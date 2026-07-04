import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import HeaderLogado from "../components/HeaderLogado";
import PipelineHeader from "../components/pipeline/PipelineHeader";
import PipelineColumn from "../components/pipeline/PipelineColumn";

export default function Pipeline() {

  const pipeline = {
    leads: [
      {
        id: 1,
        cliente: "João Silva",
        empresa: "Loja Alfa",
        valor: "R$ 8.500"
      },
      {
        id: 2,
        cliente: "Maria Souza",
        empresa: "TechPlus",
        valor: "R$ 12.000"
      }
    ],

    contato: [
      {
        id: 3,
        cliente: "Carlos Lima",
        empresa: "Mercado XP",
        valor: "R$ 3.500"
      }
    ],

    proposta: [
      {
        id: 4,
        cliente: "Pedro Santos",
        empresa: "Construtora LS",
        valor: "R$ 24.000"
      }
    ],

    negociacao: [
      {
        id: 5,
        cliente: "Ana Costa",
        empresa: "Academia Fit",
        valor: "R$ 6.200"
      }
    ],

    fechado: [
      {
        id: 6,
        cliente: "Lucas Rocha",
        empresa: "Farmácia Vida",
        valor: "R$ 14.300"
      }
    ]
  };

  return (
    <View style={styles.container}>

      <HeaderLogado title="Pipeline" />

      <PipelineHeader />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >

        <PipelineColumn
          title="Leads"
          color="#2563EB"
          data={pipeline.leads}
        />

        <PipelineColumn
          title="Contato"
          color="#8B5CF6"
          data={pipeline.contato}
        />

        <PipelineColumn
          title="Proposta"
          color="#F59E0B"
          data={pipeline.proposta}
        />

        <PipelineColumn
          title="Negociação"
          color="#F97316"
          data={pipeline.negociacao}
        />

        <PipelineColumn
          title="Fechado"
          color="#22C55E"
          data={pipeline.fechado}
        />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F4F9FD"
  },

  scroll:{
    padding:15,
    gap:15
  }

});