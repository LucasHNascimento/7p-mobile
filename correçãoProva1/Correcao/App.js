import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Mensagem from './components/Mensagem';
import Home from './components/Home';

export default function App() {
 const [texto, setTexto] = useState('');
  
  return (
    <View style={{ flex: 1, marginTop: 50, padding: 20 }}>
      <TextInput
        placeholder="Digite seu texto"
        value={texto}
        onChangeText={setTexto}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20 }}
      />
      <Mensagem texto={texto} />
    </View>
    ); 

    //Home
    /*return (
      <View>
        <Home/>
      </View>
    )*/

}