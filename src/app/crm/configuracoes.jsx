import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import UserCard from "../../components/configuracoes/UserCard";
import ConfigSection from "../../components/configuracoes/ConfigSection";
import ConfigItem from "../../components/configuracoes/ConfigItem";

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Configurações</Text>

        <Text style={styles.subtitle}>
          Gerencie sua conta e personalize seu CRM.
        </Text>

        <UserCard />

        <ConfigSection title="Conta">
          <ConfigItem
            icon="person-outline"
            title="Meu Perfil"
          />

          <ConfigItem
            icon="business-outline"
            title="Empresa"
          />

          <ConfigItem
            icon="people-outline"
            title="Usuários"
          />
        </ConfigSection>

        <ConfigSection title="Preferências">
          <ConfigItem
            icon="notifications-outline"
            title="Notificações"
          />

          <ConfigItem
            icon="moon-outline"
            title="Modo Escuro"
            switchEnabled
          />

          <ConfigItem
            icon="language-outline"
            title="Idioma"
          />
        </ConfigSection>

        <ConfigSection title="Segurança">
          <ConfigItem
            icon="lock-closed-outline"
            title="Alterar Senha"
          />

          <ConfigItem
            icon="shield-checkmark-outline"
            title="Autenticação em Dois Fatores"
            switchEnabled
          />
        </ConfigSection>

        <ConfigSection title="Sistema">
          <ConfigItem
            icon="cloud-upload-outline"
            title="Backup"
          />

          <ConfigItem
            icon="information-circle-outline"
            title="Sobre o Sistema"
          />

          <ConfigItem
            icon="log-out-outline"
            title="Sair"
            danger
          />
        </ConfigSection>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F4F9FD"
  },

  content:{
    padding:16,
    paddingBottom:40
  },

  title:{
    fontSize:28,
    fontWeight:"700"
  },

  subtitle:{
    color:"#666",
    marginTop:5,
    marginBottom:20
  }

});