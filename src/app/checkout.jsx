import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import Header from "../components/Header";
import FeaturesGrid from "../components/checkout/FeaturesGrid";
import PaymentScreen from "../components/checkout/PaymentScreen";

export default function Checkout() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      <Header />
      <PaymentScreen />
      <FeaturesGrid />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F9FD",
  },

  content: {
    paddingBottom: 60,
  },
});