import { Stack } from "expo-router";
import { View, StyleSheet, useWindowDimensions } from "react-native";

import Sidebar from "../../components/crm/Sidebar";
import HeaderLogado from "../../components/HeaderLogado";

export default function Layout() {
  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;

  return (
    <View style={styles.container}>
      {isDesktop && <Sidebar />}

      <View style={styles.content}>
        <HeaderLogado />

        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade",
            contentStyle: {
              backgroundColor: "#F4F9FD",
            },
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F4F9FD",
  },

  content: {
    flex: 1,
  },
});