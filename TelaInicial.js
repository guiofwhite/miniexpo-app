// TelaInicial.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// Recebemos a prop 'navigation' do Stack Navigator
export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      {/* O título já está centralizado pelo cabeçalho do Stack Navigator (veja App.js) */}
      <Text style={styles.mainTitle}>
        Bem-vindo ao Meu App!
      </Text>
      
      {/* O Botão para a Segunda Página */}
      <Button
        title="Ir para a Segunda Tela"
        // 'navigation.navigate()' é usado para ir para a rota definida em App.js
        onPress={() => navigation.navigate('Secundaria')}
        color="#841584"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
  }
});