import { View, ScrollView, StyleSheet } from "react-native";
import ClientsHeader from "../components/clientes/ClientHeader";
import ClientSummaryCard from "../components/clientes/ClientSummaryCard";
import ClientCard from "../components/clientes/ClientCard";
import HeaderLogado from "../components/HeaderLogado";

export default function Clientes() {
  return (
    <View style={styles.container}>
      <HeaderLogado title="Clientes" />
      <ClientsHeader />

      {/* RESUMO */}
      <View style={styles.summaryRow}>
        <ClientSummaryCard label="Total" value="1.245" color="#4F8EF7" />
        <ClientSummaryCard label="Ativos" value="820" color="#34C759" />
        <ClientSummaryCard label="Leads" value="312" color="#FFB443" />
      </View>

      {/* LISTA */}
      <ScrollView contentContainerStyle={styles.list}>
        <ClientCard name="João Silva" email="joao@email.com" status="Ativo" />
        <ClientCard name="Maria Oliveira" email="maria@email.com" status="Lead" />
        <ClientCard name="Pedro Santos" email="pedro@email.com" status="Negociação" />
        <ClientCard name="Ana Costa" email="ana@email.com" status="Ativo" />
      </ScrollView>
    </View>
  );
}

/* 🎨 STYLE DA PÁGINA */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F9FD",
    padding: 16,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  list: {
    paddingBottom: 40,
  },
});