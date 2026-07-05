import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menus = [
    {
      icon: "grid-outline",
      label: "Dashboard",
      route: "/crm/inicialCrm",
    },
    {
      icon: "people-outline",
      label: "Clientes",
      route: "/crm/clientes",
    },
    {
      icon: "person-add-outline",
      label: "Leads",
      route: "/crm/leads",
    },
    {
      icon: "cash-outline",
      label: "Vendas",
      route: "/crm/vendas",
    },
    {
      icon: "calendar-outline",
      label: "Atividades",
      route: "/crm/atividades",
    },
    {
      icon: "stats-chart-outline",
      label: "Pipeline",
      route: "/crm/pipeline",
    },
    {
      icon: "bar-chart-outline",
      label: "Relatórios",
      route: "/crm/relatorios",
    },
    {
      icon: "settings-outline",
      label: "Configurações",
      route: "/crm/configuracoes",
    },
  ];

  return (
    <View style={styles.sidebar}>
      <Text style={styles.logo}>CRM</Text>

      {menus.map((item) => {
        const active = pathname === item.route;

        return (
          <Pressable
            key={item.route}
            style={[
              styles.item,
              active && styles.activeItem,
            ]}
            onPress={() => router.push(item.route)}
          >
            <Ionicons
              name={item.icon}
              size={22}
              color={active ? "#fff" : "#4B5563"}
            />

            <Text
              style={[
                styles.label,
                active && styles.activeLabel,
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}

      <View style={styles.bottom}>
        <Pressable
          style={styles.item}
          onPress={() => router.push("/login")}
        >
          <Ionicons
            name="log-out-outline"
            size={22}
            color="#EF4444"
          />

          <Text
            style={[
              styles.label,
              { color: "#EF4444" },
            ]}
          >
            Sair
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 260,
    backgroundColor: "#FFF",
    paddingTop: 30,
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderRightColor: "#ECECEC",
  },

  logo: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 35,
    color: "#2563EB",
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    marginBottom: 8,
  },

  activeItem: {
    backgroundColor: "#2563EB",
  },

  label: {
    marginLeft: 15,
    fontSize: 16,
    color: "#374151",
    fontWeight: "500",
  },

  activeLabel: {
    color: "#FFF",
  },

  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});