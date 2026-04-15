import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import FormScreen from './FormScreen';
import ListScreen from './ListScreen';
import WelcomeScreen from '../src/screens/WelcomeScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={WelcomeScreen} options={{ title: 'Início' }} />
      <Drawer.Screen name="NovoAluguel" component={FormScreen} options={{ title: 'Cadastrar Aluguel' }} />
      <Drawer.Screen name="Listagem" component={ListScreen} options={{ title: 'Consultar Alugueis' }} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}