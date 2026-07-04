import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function criarConta() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const criarConta = () => {
    console.log({
      nome,
      empresa,
      email,
      senha,
      confirmarSenha,
    });

    // Aqui depois você fará a chamada da API
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>CRM</Text>

        <Text style={styles.title}>Criar conta</Text>

        <Text style={styles.subtitle}>
          Comece gratuitamente e gerencie seus clientes em um só lugar.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Empresa"
          value={empresa}
          onChangeText={setEmpresa}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <Pressable style={styles.button} onPress={criarConta}>
          <Text style={styles.buttonText}>
            Criar conta gratuitamente
          </Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Já possui uma conta?
          </Text>

          <Pressable onPress={() => router.push('/login')}>
            <Text style={styles.link}> Entrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9FD',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 430,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 30,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 5,
  },

  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0076D3',
    textAlign: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0A2540',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 8,
    marginBottom: 25,
    textAlign: 'center',
    color: '#5B6574',
    lineHeight: 22,
  },

  input: {
    borderWidth: 1,
    borderColor: '#DCE6EF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 14,
    marginBottom: 15,
    fontSize: 15,
    backgroundColor: '#FFF',
  },

  button: {
    marginTop: 10,
    backgroundColor: '#0076D3',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },

  footerText: {
    color: '#5B6574',
    fontSize: 14,
  },

  link: {
    color: '#0076D3',
    fontWeight: '700',
    fontSize: 14,
  },
});