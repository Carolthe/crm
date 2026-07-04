import Header from '@/components/Header';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Servicos() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;

  const servicos = [
    'CRM Completo',
    'Gestão de Clientes',
    'Funil de Vendas',
    'Agenda Inteligente',
    'Financeiro',
    'Emissão de Orçamentos',
    // 'Marketing',
    // 'Relatórios',
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Header />

      {/* HERO */}
      <View style={[styles.hero, isDesktop && styles.heroDesktop]}>
        <Text style={styles.badge}>PLANO ÚNICO</Text>

        <Text style={styles.title}>
          Toda estrutura que seu negócio precisa.
        </Text>

        <Text style={styles.subtitle}>
          Esqueça vários sistemas. Tenha CRM, vendas, financeiro,
          desempenho e gestão completos por um único valor mensal.
        </Text>
      </View>

      {/* CONTEÚDO */}
      <View
        style={[
          styles.content,
          {
            flexDirection: isDesktop ? 'row' : 'column',
          },
        ]}
      >
        {/* CARD PREÇO */}
        <View
          style={[
            styles.priceCard,
            isDesktop && styles.priceCardDesktop,
          ]}
        >
          <Text style={styles.plan}>Plano Completo</Text>

          <Text style={styles.price}>
            R$ 29,90
            <Text style={styles.month}> /mês</Text>
          </Text>

          <Text style={styles.description}>
            Um único plano com acesso a todas as funcionalidades.
          </Text>

          <View style={styles.list}>
            <Text style={styles.item}>✔ CRM Completo</Text>
            <Text style={styles.item}>✔ Clientes ilimitados</Text>
            <Text style={styles.item}>✔ Vendas e Orçamentos</Text>
            <Text style={styles.item}>✔ Agenda integrada</Text>
            <Text style={styles.item}>✔ Financeiro completo</Text>
            <Text style={styles.item}>✔ Marketing</Text>
            <Text style={styles.item}>✔ Relatórios</Text>
            <Text style={styles.item}>✔ Atualizações gratuitas</Text>
            <Text style={styles.item}>✔ Suporte incluso</Text>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => router.push('/checkout')}
          >
            <Text style={styles.buttonText}>
              Começar Agora
            </Text>
          </Pressable>
        </View>

        {/* GRID DE SERVIÇOS */}
        <View style={styles.grid}>
          {servicos.map((item) => (
            <Pressable
              key={item}
              style={[
                styles.serviceCard,
                {
                  width: isDesktop ? '48%' : '100%',
                },
              ]}
            >
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>✓</Text>
              </View>

              <Text style={styles.serviceTitle}>{item}</Text>

              <Text style={styles.serviceDescription}>
                Ferramenta integrada para aumentar a produtividade da sua empresa.
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9FD',
  },

  scrollContent: {
    paddingBottom: 60,
  },

  hero: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },

  badge: {
    backgroundColor: '#EAF3FF',
    color: '#0076D3',
    fontWeight: '700',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
    fontSize: 13,
  },

  title: {
    marginTop: 10,
    fontSize: 42,
    fontWeight: '800',
    color: '#0A2540',
    textAlign: 'center',
    maxWidth: 750,
  },

  subtitle: {
    marginTop: 18,
    fontSize: 18,
    color: '#5B6574',
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: 700,
  },

  content: {
    paddingHorizontal: 25,
    gap: 25,
    width: '100%',
    maxWidth: 1400,
    alignSelf: 'center',
  },

  priceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 30,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 5,
  },

  priceCardDesktop: {
    flex: 1,
    maxWidth: 420,
    height: '97%',
  },

  plan: {
    color: '#0076D3',
    fontSize: 24,
    fontWeight: '700',
  },

  price: {
    fontSize: 50,
    fontWeight: '800',
    color: '#0A2540',
    marginTop: 10,
  },

  month: {
    fontSize: 22,
    fontWeight: '400',
    color: '#5B6574',
  },

  description: {
    color: '#5B6574',
    marginTop: 15,
    fontSize: 16,
    lineHeight: 24,
  },

  list: {
    marginTop: 25,
    gap: 12,
  },

  item: {
    fontSize: 16,
    color: '#0A2540',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#0076D3',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  grid: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
  },

  serviceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    marginBottom: 18,

    borderWidth: 1,
    borderColor: '#E8EEF5',

    shadowColor: '#0A2540',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 2,
  },

  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#EAF4FF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 24,
    color: '#0076D3',
    fontWeight: '700',
  },

  serviceTitle: {
    marginTop: 18,
    fontSize: 19,
    fontWeight: '700',
    color: '#0A2540',
  },

  serviceDescription: {
    marginTop: 10,
    fontSize: 15,
    color: '#667085',
    lineHeight: 24,
  },
});