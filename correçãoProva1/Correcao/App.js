import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import Questao5 from './components/Questao5';
import Questao10 from './components/Questao10';
import Questao12 from './components/Questao12';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Drawer.Screen
          name="Questao5"
          component={Questao5}
          options={{ title: 'Mensagem' }}
        />
        <Drawer.Screen
          name="Questao10"
          component={Questao10}
          options={{ title: 'Pilha' }}
        />
        <Drawer.Screen
          name="Questao12"
          component={Questao12}
          options={{ title: 'Tabs' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}