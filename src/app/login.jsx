import Header from '../components/Header';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';


export default function login() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <ScrollView style={{ backgroundColor: '#F4F9FD' }} >
            <Header />

            <View style={styles.container}>

                <View style={styles.card}>
                    {/* Header */}
                    <Text style={styles.logo}>CRM</Text>
                    <Text style={styles.title}>Bem-vindo de volta</Text>
                    <Text style={styles.subtitle}>
                        Entre na sua conta para continuar
                    </Text>

                    {/* Inputs */}
                    <View style={styles.form}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="exemplo@email.com"
                            placeholderTextColor="#9AA6B2"
                            style={styles.input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="••••••••"
                            placeholderTextColor="#9AA6B2"
                            style={styles.input}
                            secureTextEntry
                        />

                        <Pressable style={styles.forgot}>
                            <Text style={styles.forgotText}>Esqueci minha senha</Text>
                        </Pressable>

                        {/* Button */}
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                pressed && styles.pressed,
                            ]}
                            onPress={() => console.log({ email, password })}
                        >
                            <Text style={styles.buttonText}>Entrar</Text>
                        </Pressable>
                    </View>

                    {/* Footer */}
                    <Pressable onPress={() => router.push('/criarConta')}>
                        <Text style={styles.footer}>
                            Não tem conta? <Text style={styles.link}>Criar conta</Text>
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F9FD',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    card: {
        width: '100%',
        maxWidth: 420,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 28,

        shadowColor: '#0A2540',
        shadowOpacity: 0.08,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 10 },
        elevation: 4,
    },

    logo: {
        fontSize: 22,
        fontWeight: '900',
        color: '#0076D3',
        textAlign: 'center',
        marginBottom: 10,
    },

    title: {
        fontSize: 22,
        fontWeight: '800',
        color: '#0A2540',
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 14,
        color: '#5B6574',
        textAlign: 'center',
        marginTop: 6,
        marginBottom: 20,
    },

    form: {
        marginTop: 10,
    },

    label: {
        fontSize: 13,
        color: '#0A2540',
        fontWeight: '600',
        marginTop: 14,
        marginBottom: 6,
    },

    input: {
        backgroundColor: '#F4F9FD',
        borderWidth: 1,
        borderColor: '#E3EAF2',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 14,
        color: '#0A2540',
    },

    forgot: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },

    forgotText: {
        fontSize: 12,
        color: '#0076D3',
        fontWeight: '600',
    },

    button: {
        marginTop: 18,
        backgroundColor: '#0076D3',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',

        shadowColor: '#0076D3',
        shadowOpacity: 0.25,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },

    pressed: {
        opacity: 0.85,
        transform: [{ scale: 0.98 }],
    },

    footer: {
        marginTop: 18,
        textAlign: 'center',
        fontSize: 13,
        color: '#5B6574',
    },

    link: {
        color: '#0076D3',
        fontWeight: '700',
    },
});