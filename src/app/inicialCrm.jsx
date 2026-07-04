import { ScrollView, View, Text, StyleSheet } from "react-native";
import HeaderLogado from "@/components/HeaderLogado";

import Card from "@/components/crm/Card";
import Pipeline from "@/components/crm/Pipeline";
import Task from "@/components/crm/Task";
import Client from "@/components/crm/Client";

export default function InicialCrm() {
  return (
    <View style={styles.container}>
      <HeaderLogado title="Dashboard" />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Saudação */}
        <View style={styles.welcome}>
          <Text style={styles.title}>Bom dia, João 👋</Text>
          <Text style={styles.subtitle}>
            Aqui está um resumo do seu CRM hoje.
          </Text>
        </View>

        {/* Cards */}
        <View style={styles.cardGrid}>
          <Card icon="people-outline" color="#4F8EF7" title="Clientes" value="1.245" />
          <Card icon="person-add-outline" color="#44C98A" title="Novos" value="312" />
          <Card icon="briefcase-outline" color="#A35CFF" title="Leads" value="186" />
          <Card icon="cash-outline" color="#FFB443" title="Vendas" value="R$98k" />
        </View>

        {/* Pipeline */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Funil de vendas</Text>

          <Pipeline label="Leads" value={35} color="#4F8EF7" />
          <Pipeline label="Contato" value={21} color="#7B61FF" />
          <Pipeline label="Proposta" value={12} color="#FFB443" />
          <Pipeline label="Negociação" value={8} color="#FF9D2E" />
          <Pipeline label="Fechado" value={4} color="#34C759" />
        </View>

        {/* Atividades */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Próximas atividades</Text>

          <Task text="Ligar para João" time="09:00" />
          <Task text="Enviar proposta" time="10:30" />
          <Task text="Reunião com Maria" time="14:00" />
          <Task text="Follow-up Pedro" time="16:00" />
        </View>

        {/* Clientes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimos clientes</Text>

          <Client name="João Silva" status="Ativo" />
          <Client name="Maria Oliveira" status="Lead" />
          <Client name="Pedro Santos" status="Negociação" />
        </View>
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
  welcome: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
  },
  subtitle: {
    color: "#666",
    marginTop: 4,
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  section: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 18,
    marginTop: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },
});