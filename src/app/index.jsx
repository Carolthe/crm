import Header from '@/components/Header';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import CardServico from '../components/CardServico';
import { useRouter } from 'expo-router'
import InicialCrm from './inicialCrm';
import Clientes from './clientes';
import Leads from './leads';
import { useWindowDimensions } from 'react-native';

export default function TabLayout() {
  const router = useRouter();

  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;

  return (
    <ScrollView style={styles.container}>
      <Header />

      <Text style={[
        styles.title,
        isDesktop && styles.titleDesktop
      ]}>
        Comece a usar o CRM e maximize seu potencial
      </Text>

      <Text style={[
        styles.subtitle,
        isDesktop && styles.subtitleDesktop
      ]}>
        Automatize suas vendas, serviços, marketing e tarefas diárias.
      </Text>

      <View style={styles.buttons}>
        <Pressable
          style={[styles.buttonPrimary, isDesktop && styles.buttonPrimaryDesktop]}
          onPress={() => router.push('/login')}

        >
          <Text style={[styles.buttonPrimaryText, isDesktop && styles.buttonPrimaryTextDesktop]}>
            Experimente um mês grátis
          </Text>
        </Pressable>

        <Pressable
          style={[styles.buttonSecondary, isDesktop && styles.buttonSecondaryDesktop]}
          onPress={() => console.log('Começar')}
        >
          <Text style={styles.buttonSecondaryText}>
            Começar agora!
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.cardsContainer,
          isDesktop && styles.cardsContainerDesktop,
        ]}
      >
        <CardServico />
        <CardServico />
        <CardServico />
        <CardServico />
        <CardServico />
        <CardServico />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9FD',
    paddingHorizontal: 40,
    paddingTop: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#0A2540',
    maxWidth: 650,
    marginTop: 30,
    lineHeight: 52,
  },
  titleDesktop: {
    fontSize: 48,
    alignSelf: 'center',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    color: '#5B6574',
    maxWidth: 550,
    marginTop: 20,
    lineHeight: 28,
  },
  subtitleDesktop: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },

  buttons: {
    flexDirection: 'column',
    marginTop: 35,
    gap: 20,
  },

  buttonPrimary: {
    backgroundColor: '#0076D3',
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimaryDesktop: {
    alignSelf: 'center',
    width: '20%',
  },

  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#0076D3',
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondaryDesktop: {
    alignSelf: 'center',
    width: '20%',
  },

  buttonSecondaryText: {
    color: '#0076D3',
    fontSize: 16,
    fontWeight: '700',
  },
  cardsContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  cardsContainerDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 30,
  },
});