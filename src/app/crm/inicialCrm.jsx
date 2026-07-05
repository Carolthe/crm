import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import Card from "@/components/crm/Card";
import Pipeline from "@/components/crm/Pipeline";
import Task from "@/components/crm/Task";
import Client from "@/components/crm/Client";

export default function InicialCrm() {
  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;
  const isTablet = width >= 768;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View
          style={[
            styles.content,
            {
              maxWidth: isDesktop ? 1400 : 900,
            },
          ]}
        >
          {/* SAUDAÇÃO */}
          <View style={styles.welcome}>
            <Text style={styles.title}>Bom dia, João </Text>

            <Text style={styles.subtitle}>
              Aqui está um resumo do seu CRM hoje.
            </Text>
          </View>

          {/* CARDS */}
          <View style={styles.cardGrid}>
            <Card
              icon="people-outline"
              color="#4F8EF7"
              title="Clientes"
              value="1.245"
            />

            <Card
              icon="person-add-outline"
              color="#44C98A"
              title="Novos"
              value="312"
            />

            <Card
              icon="briefcase-outline"
              color="#A35CFF"
              title="Leads"
              value="186"
            />

            <Card
              icon="cash-outline"
              color="#FFB443"
              title="Vendas"
              value="R$98k"
            />
          </View>

          {/* CONTEÚDO PRINCIPAL */}
          <View
            style={[
              styles.mainGrid,
              {
                flexDirection: isTablet ? "row" : "column",
              },
            ]}
          >
            {/* COLUNA ESQUERDA */}
            <View style={styles.leftColumn}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  Funil de vendas
                </Text>

                <Pipeline label="Leads" value={35} color="#4F8EF7" />
                <Pipeline label="Contato" value={21} color="#7B61FF" />
                <Pipeline label="Proposta" value={12} color="#FFB443" />
                <Pipeline label="Negociação" value={8} color="#FF9D2E" />
                <Pipeline label="Fechado" value={4} color="#34C759" />
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  Últimos clientes
                </Text>

                <Client name="João Silva" status="Ativo" />
                <Client name="Maria Oliveira" status="Lead" />
                <Client name="Pedro Santos" status="Negociação" />
              </View>
            </View>

            {/* COLUNA DIREITA */}
            <View style={styles.rightColumn}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  Próximas atividades
                </Text>

                <Task text="Ligar para João" time="09:00" />
                <Task text="Enviar proposta" time="10:30" />
                <Task text="Reunião com Maria" time="14:00" />
                <Task text="Follow-up Pedro" time="16:00" />
              </View>
            </View>
          </View>
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

  scroll: {
    paddingVertical: 20,
  },

  content: {
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  welcome: {
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 5,
    color: "#6B7280",
    fontSize: 16,
  },

  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    marginBottom: 20,
  },

  mainGrid: {
    gap: 20,
  },

  leftColumn: {
    flex: 2,
    gap: 20,
  },

  rightColumn: {
    flex: 1,
    gap: 20,
  },

  section: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 18,
    color: "#111827",
  },
});