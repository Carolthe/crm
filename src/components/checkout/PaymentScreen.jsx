import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

export default function PaymentScreen({ navigation }) {
  const handlePayment = () => {
    // Futuramente:
    // 1 - Chamar backend
    // 2 - Criar preferência Mercado Pago
    // 3 - Abrir checkout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>

      <View style={styles.card}>
        <Text style={styles.plan}>Plano CRM Completo</Text>

        <Text style={styles.price}>
          R$ 29,90
          <Text style={styles.month}> /mês</Text>
        </Text>

        <View style={styles.divider} />

        <Text style={styles.subtitle}>Pagamento processado por</Text>

        <Image
          source={{
            uri: "https://http2.mlstatic.com/frontend-assets/mp-web-navigation/ui-navigation/6.6.135/mercadopago/logo__large_plus.png",
          }}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.description}>
          Você será redirecionado para um ambiente seguro do Mercado Pago para
          concluir sua assinatura.
        </Text>

        <View style={styles.methods}>
          <Text>✓ Cartão de Crédito</Text>
          <Text>✓ Pix</Text>
          <Text>✓ Boleto Bancário</Text>
        </View>

        <Pressable style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>
            Continuar para o Mercado Pago
          </Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        Seus dados de pagamento não são armazenados pelo nosso sistema.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F9FD",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 25,
    color: "#0A2540",
    textAlign: "center",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

  plan: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0076D3",
  },

  price: {
    fontSize: 42,
    fontWeight: "800",
    color: "#0A2540",
    marginTop: 10,
  },

  month: {
    fontSize: 18,
    color: "#667085",
    fontWeight: "400",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 20,
  },

  subtitle: {
    textAlign: "center",
    color: "#667085",
    marginBottom: 15,
  },

  logo: {
    width: 220,
    height: 60,
    alignSelf: "center",
  },

  description: {
    marginTop: 15,
    textAlign: "center",
    color: "#667085",
    lineHeight: 22,
  },

  methods: {
    marginTop: 20,
    gap: 10,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#009EE3",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },

  footer: {
    marginTop: 20,
    textAlign: "center",
    color: "#667085",
    fontSize: 13,
  },
});