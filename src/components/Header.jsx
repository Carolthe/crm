import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useWindowDimensions } from 'react-native';

export default function App() {

  const router = useRouter();

  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;

  return (
    <View style={[styles.container, isDesktop && styles.containerDesktop]}>
      <View style={[styles.header, isDesktop && styles.headerDesktop]}>
        <Pressable onPress={() => router.push('/')} style={styles.button}>
          <Text style={[
            styles.text, isDesktop && styles.textDesktop
          ]}>Home</Text>
        </Pressable>

        <Pressable onPress={() => router.push('/servicos')} style={styles.button}>
          <Text style={styles.text}>Serviços</Text>
        </Pressable>

        <Pressable onPress={() => router.push('/inicialCrm')} style={styles.button}>
          <Text style={styles.text}>Começar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F9FD',
    paddingTop: 20,
    alignItems: 'center',
  },
  containerDesktop: {
    
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingHorizontal: 8,
    paddingVertical: 8,
    gap: 10,
  },
  headerDesktop: {
    width: '40%',
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  textDesktop: {
   
  },
});