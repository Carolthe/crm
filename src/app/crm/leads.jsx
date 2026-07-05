import { View, ScrollView, StyleSheet } from "react-native";
import LeadsHeader from "../../components/leads/LeadsHeader";
import LeadSummaryCard from "../../components/leads/LeadSummaryCard";
import LeadCard from "../../components/leads/LeadCard";

export default function Leads() {
  return (
    <View style={styles.container}>
      <LeadsHeader />

      <View style={styles.summaryRow}>
        <LeadSummaryCard
          title="Total"
          value="186"
          color="#4F8EF7"
        />

        <LeadSummaryCard
          title="Quentes"
          value="48"
          color="#34C759"
        />

        <LeadSummaryCard
          title="Frios"
          value="138"
          color="#FFB443"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <LeadCard
          name="Carlos Henrique"
          company="Tech Solutions"
          stage="Novo Lead"
        />

        <LeadCard
          name="Fernanda Souza"
          company="Alpha Sistemas"
          stage="Contato"
        />

        <LeadCard
          name="João Oliveira"
          company="Vision TI"
          stage="Proposta"
        />

        <LeadCard
          name="Mariana Lima"
          company="NextSoft"
          stage="Negociação"
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
    marginBottom: 18,
  },
});