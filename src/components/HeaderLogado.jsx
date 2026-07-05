import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from "react-native";
import { useRef, useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderLogado({ title }) {
  const router = useRouter();

  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;

  const slideAnim = useRef(new Animated.Value(-300)).current;

  const [open, setOpen] = useState(false);

  function openMenu() {
    if (isDesktop) return;

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
      <View style={styles.container}>
        <View
          style={[
            styles.header,
            {
              maxWidth: isDesktop ? 1400 : "100%",
            },
          ]}
        >
          {/* ESQUERDA */}
          <View style={styles.left}>
            {!isDesktop && (
              <Pressable
                onPress={openMenu}
                style={styles.iconButton}
              >
                <Ionicons
                  name="menu"
                  size={28}
                  color="#1F2937"
                />
              </Pressable>
            )}

            <View>
              <Text style={styles.title}>{title}</Text>

              {isDesktop && (
                <Text style={styles.subtitle}>
                  Bem-vindo de volta
                </Text>
              )}
            </View>
          </View>

          {/* DIREITA */}
          <View style={styles.right}>
            <Pressable
              style={styles.notification}
              onPress={() =>
                router.push("/notificacoes")
              }
            >
              <Ionicons
                name="notifications-outline"
                size={22}
                color="#444"
              />
            </Pressable>

            {isDesktop && (
              <Pressable style={styles.profile}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>
                    J
                  </Text>
                </View>

                <View>
                  <Text style={styles.user}>
                    João Silva
                  </Text>

                  <Text style={styles.role}>
                    Administrador
                  </Text>
                </View>

                <Ionicons
                  name="chevron-down"
                  size={18}
                  color="#666"
                />
              </Pressable>
            )}
          </View>
        </View>
      </View>

      {!isDesktop && open && (
        <Pressable
          style={styles.overlay}
          onPress={closeMenu}
        />
      )}

      {!isDesktop && (
        <Animated.View
          style={[
            styles.drawer,
            {
              transform: [
                {
                  translateX: slideAnim,
                },
              ],
            },
          ]}
        >
          <Text style={styles.menuTitle}>
            CRM
          </Text>

          <MenuItem
            icon="grid-outline"
            label="Dashboard"
            onPress={() =>
              navigate("/crm/inicialCrm")
            }
          />

          <MenuItem
            icon="people-outline"
            label="Clientes"
            onPress={() =>
              navigate("/crm/clientes")
            }
          />

          <MenuItem
            icon="person-add-outline"
            label="Leads"
            onPress={() =>
              navigate("/crm/leads")
            }
          />

          <MenuItem
            icon="cash-outline"
            label="Vendas"
            onPress={() =>
              navigate("/crm/vendas")
            }
          />

          <MenuItem
            icon="calendar-outline"
            label="Atividades"
            onPress={() =>
              navigate("/crm/atividades")
            }
          />

          <MenuItem
            icon="stats-chart-outline"
            label="Pipeline"
            onPress={() =>
              navigate("/crm/pipeline")
            }
          />

          <MenuItem
            icon="bar-chart-outline"
            label="Relatórios"
            onPress={() =>
              navigate("/crm/relatorios")
            }
          />

          <MenuItem
            icon="settings-outline"
            label="Configurações"
            onPress={() =>
              navigate("/crm/configuracoes")
            }
          />

          <View style={styles.divider} />

          <MenuItem
            icon="log-out-outline"
            label="Sair"
            onPress={() =>
              navigate("/login")
            }
          />
        </Animated.View>
      )}
    </>
  );
}

function MenuItem({ icon, label, onPress }) {
  return (
    <Pressable
      style={styles.menuItem}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={22}
        color="#444"
      />

      <Text style={styles.menuText}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F9FD",
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  header: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    minHeight: 72,

    paddingHorizontal: 24,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    shadowColor: "#000",

    shadowOpacity: 0.05,

    shadowRadius: 15,

    elevation: 4,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconButton: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    color: "#6B7280",
    marginTop: 3,
    fontSize: 14,
  },

  notification: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 18,
    gap: 12,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#4F8EF7",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 18,
  },

  user: {
    fontWeight: "700",
    fontSize: 15,
    color: "#111827",
  },

  role: {
    color: "#6B7280",
    fontSize: 12,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.35)",
    zIndex: 10,
  },

  drawer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,

    width: 290,

    backgroundColor: "#FFF",

    paddingTop: 70,

    paddingHorizontal: 22,

    zIndex: 20,

    shadowColor: "#000",

    shadowOpacity: 0.18,

    shadowRadius: 12,

    elevation: 10,
  },

  menuTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 30,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    gap: 14,
  },

  menuText: {
    fontSize: 16,
    color: "#374151",
  },

  divider: {
    height: 1,
    backgroundColor: "#ECECEC",
    marginVertical: 20,
  },
});