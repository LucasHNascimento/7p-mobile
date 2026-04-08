/*

import React from 'react';
import { Text, View } from 'react-native';
import styles from './src/styles/homeStyles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seja bem vindo!</Text>
      <Text style={styles.text}>Selecione uma opção para continuar</Text>
    </View>
  );
}
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importamos nosso componente externo
import CustomModalScreen from './CustomModalScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: '#000',
            tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' }
          }}
        >
          {/* 
              ATO FINAL: Criamos as três abas.
              Cada uma reutiliza o CustomModalScreen, mas com animações distintas.
          */}
          
          <Tab.Screen name="SLIDE">
            {() => <CustomModalScreen animation="slide" themeColor="#2196F3" />}
          </Tab.Screen>
          
          <Tab.Screen name="FADE">
            {() => <CustomModalScreen animation="fade" themeColor="#4CAF50" />}
          </Tab.Screen>
          
          <Tab.Screen name="NONE">
            {() => <CustomModalScreen animation="none" themeColor="#FF9800" />}
          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}