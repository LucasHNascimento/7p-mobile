import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Mensagem from './Mensagem';

export default function Questao5() {
    const [texto, setTexto] = useState('');

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
            <TextInput
                placeholder="Digite seu texto"
                value={texto}
                onChangeText={setTexto}
                style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20 }}
            />
            <Mensagem texto={texto} />
        </View>
    );
}