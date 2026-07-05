import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

import ReportCard from "../../components/relatorios/ReportCard";
import SalesSummary from "../../components/relatorios/SalesSummary";

export default function Relatorios() {
  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Relatórios</Text>

        <Text style={styles.subtitle}>
          Acompanhe o desempenho do seu CRM.
        </Text>

        <View style={styles.cards}>
          <ReportCard
            icon="cash-outline"
            color="#22C55E"
            title="Faturamento"
            value="R$ 184.250"
          />

          <ReportCard
            icon="people-outline"
            color="#2563EB"
            title="Clientes"
            value="1.245"
          />

          <ReportCard
            icon="briefcase-outline"
            color="#F59E0B"
            title="Leads"
            value="328"
          />

          <ReportCard
            icon="trending-up-outline"
            color="#8B5CF6"
            title="Conversão"
            value="34%"
          />
        </View>

        <SalesSummary
          titulo="Resumo de Vendas"
          vendas="98"
          abertas="27"
          perdidas="13"
        />

        <SalesSummary
          titulo="Resumo de Clientes"
          vendas="58"
          abertas="14"
          perdidas="6"
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
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});