import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  console.log('App carregando')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 // ocupa a tela inteira
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center',     // centraliza horizontalmente
    backgroundColor: '#fff', // cor de fundo só para verificar
  },
  title: {
    fontSize: 20,           // tamanho da fonte
    color: '#333',          // cor da fonte
  },
});