import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

// Importações de Pessoas
import PessoaListScreen from './src/screens/PessoaListScreen';
import PessoaFormScreen from './src/screens/PessoaFormScreen';
import PessoaDetailScreen from './src/screens/PessoaDetailScreen';

// Importações de Produtos
import ProdutoListScreen from './src/screens/ProdutoListScreen';
import ProdutoFormScreen from './src/screens/ProdutoFormScreen';
import ProdutoDetailScreen from './src/screens/ProdutoDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Fluxo de Telas de Pessoas
function PessoasStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#ffffff' },
        headerTitleStyle: { fontWeight: '700', color: '#0f172a' },
        headerTintColor: '#2563eb',
        contentStyle: { backgroundColor: '#f8fafc' },
      }}
    >
      <Stack.Screen name="PessoaList" component={PessoaListScreen} options={{ title: 'Pessoas' }} />
      <Stack.Screen name="PessoaDetail" component={PessoaDetailScreen} options={{ title: 'Detalhes' }} />
      <Stack.Screen name="PessoaForm" component={PessoaFormScreen} options={{ title: 'Cadastro' }} />
    </Stack.Navigator>
  );
}

// Fluxo de Telas de Produtos
function ProdutosStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#ffffff' },
        headerTitleStyle: { fontWeight: '700', color: '#0f172a' },
        headerTintColor: '#2563eb',
      }}
    >
      <Stack.Screen name="ProdutoList" component={ProdutoListScreen} options={{ title: 'Produtos' }} />
      <Stack.Screen name="ProdutoForm" component={ProdutoFormScreen} options={{ title: 'Cadastro de Produto' }} />
      <Stack.Screen name="ProdutoDetail" component={ProdutoDetailScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#2563eb',
            tabBarInactiveTintColor: '#94a3b8',
            tabBarStyle: { height: 60, paddingBottom: 8 },
            tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
          }}
        >
          <Tab.Screen 
            name="AbaPessoas" 
            component={PessoasStack} 
            options={{ tabBarLabel: 'Pessoas' }} 
          />
          <Tab.Screen 
            name="AbaProdutos" 
            component={ProdutosStack} 
            options={{ tabBarLabel: 'Produtos' }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}