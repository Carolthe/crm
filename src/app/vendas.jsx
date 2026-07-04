import { View, ScrollView, StyleSheet } from "react-native";
import SalesHeader from "../components/vendas/SalesHeader";
import SalesSummaryCard from "../components/vendas/SalesSummaryCard";
import SaleCard from "../components/vendas/SaleCard";
import HeaderLogado from "../components/HeaderLogado";


export default function Vendas() {
  return (
    <View style={styles.container}>
      <HeaderLogado title="Vendas" />
      <SalesHeader />

      <View style={styles.summaryRow}>
        <SalesSummaryCard
          title="Hoje"
          value="R$ 4.850"
          color="#34C759"
        />

        <SalesSummaryCard
          title="Mês"
          value="R$ 98.000"
          color="#4F8EF7"
        />

        <SalesSummaryCard
          title="Pedidos"
          value="43"
          color="#FFB443"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <SaleCard
          client="João Silva"
          product="Sistema CRM Premium"
          value="R$ 2.500"
          status="Pago"
        />

        <SaleCard
          client="Maria Oliveira"
          product="Plano Enterprise"
          value="R$ 5.200"
          status="Pendente"
        />

        <SaleCard
          client="Pedro Santos"
          product="Consultoria"
          value="R$ 1.800"
          status="Pago"
        />

        <SaleCard
          client="Ana Costa"
          product="Implantação"
          value="R$ 3.400"
          status="Em análise"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F9FD",
    padding: 16,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});