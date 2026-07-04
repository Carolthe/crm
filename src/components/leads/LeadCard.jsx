import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LeadCard({
  name,
  company,
  stage,
}) {
  const colors = {
    "Novo Lead": "#4F8EF7",
    Contato: "#FFB443",
    Proposta: "#A35CFF",
    Negociação: "#34C759",
  };

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Ionicons
          name="briefcase-outline"
          size={20}
          color="#FFF"
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>
          {name}
        </Text>

        <Text style={styles.company}>
          {company}
        </Text>
      </View>

      <View
        style={[
          styles.badge,
          {
            backgroundColor:
              colors[stage] || "#999",
          },
        ]}
      >
        <Text style={styles.badgeText}>
          {stage}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: "#4F8EF7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
  },

  company: {
    color: "#666",
    marginTop: 3,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  badgeText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
});