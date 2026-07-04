import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { useRef, useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderLogado(props) {
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(-300)).current;

  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }

  function closeMenu() {
    Animated.timing(slideAnim, {
      toValue: -300,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setOpen(false));
  }

  function navigate(route) {
    closeMenu();
    router.push(route);
  }

  return (
    <>
      {/* HEADER */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={openMenu} style={styles.iconButton}>
            <Ionicons name="menu" size={28} color="#000" />
          </Pressable>

          <Text style={styles.title}>{props.title}</Text>

          <Pressable
            onPress={() => router.push("/notificacoes")}
            style={styles.iconButton}
          >
            <Ionicons name="notifications-outline" size={26} color="#000" />
          </Pressable>
        </View>
      </View>

      {/* OVERLAY */}
      {open && (
        <Pressable style={styles.overlay} onPress={closeMenu} />
      )}

      {/* DRAWER */}
      <Animated.View
        style={[
          styles.drawer,
          { transform: [{ translateX: slideAnim }] },
        ]}
      >
        <Text style={styles.menuTitle}>CRM Menu</Text>

        <MenuItem
          icon="grid-outline"
          label="Dashboard"
          onPress={() => navigate("/inicialCrm")}
        />

        <MenuItem
          icon="people-outline"
          label="Clientes"
          onPress={() => navigate("/clientes")}
        />

        <MenuItem
          icon="person-add-outline"
          label="Leads"
          onPress={() => navigate("/leads")}
        />

        <MenuItem
          icon="cash-outline"
          label="Vendas"
          onPress={() => navigate("/vendas")}
        />

        <MenuItem
          icon="calendar-outline"
          label="Atividades"
          onPress={() => navigate("/atividades")}
        />

        <MenuItem
          icon="stats-chart-outline"
          label="Pipeline"
          onPress={() => navigate("/pipeline")}
        />

        <MenuItem
          icon="bar-chart-outline"
          label="Relatórios"
          onPress={() => navigate("/relatorios")}
        />

        <MenuItem
          icon="settings-outline"
          label="Configurações"
          onPress={() => navigate("/configuracoes")}
        />

        <View style={styles.divider} />

        <MenuItem
          icon="log-out-outline"
          label="Sair"
          onPress={() => navigate("/login")}
        />
      </Animated.View>
    </>
  );
}

/* ITEM DO MENU */
function MenuItem({ icon, label, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.menuItem}>
      <Ionicons name={icon} size={22} color="#333" />
      <Text style={styles.menuText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F9FD",
    paddingTop: 20,
    paddingHorizontal: 16,
  },

  header: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  iconButton: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 10,
  },

  drawer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 280,
    backgroundColor: "#FFF",
    paddingTop: 60,
    paddingHorizontal: 20,
    zIndex: 20,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },

  menuTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    gap: 12,
  },

  menuText: {
    fontSize: 16,
    color: "#333",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 15,
  },
});