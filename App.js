// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './TelaInicial'; // Importa a primeira tela
import TelaSecundaria from './TelaSecundaria'; // Importa a segunda tela

// Cria o Navegador de Pilha
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // O NavigationContainer gerencia o estado de navegação
    <NavigationContainer>
      {/* O Stack.Navigator define a ordem das telas */}
      <Stack.Navigator 
        initialRouteName="Inicial" 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e', // Cor do cabeçalho
          },
          headerTintColor: '#fff', // Cor do texto do cabeçalho
          headerTitleAlign: 'center', // Centraliza o título em todas as telas
        }}
      >
        <Stack.Screen 
          name="Inicial" 
          component={TelaInicial} 
          options={{ title: 'Tela Inicial' }} // Título do cabeçalho
        />
        <Stack.Screen 
          name="Secundaria" 
          component={TelaSecundaria} 
          options={{ title: 'Detalhes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
