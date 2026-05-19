import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../services/api';

export default function ProdutoFormScreen({ route, navigation }) {
    const produtoEdit = route.params?.produto;

    const [nome, setNome] = useState(produtoEdit ? produtoEdit.nome : '');
    const [quantidade, setQuantidade] = useState(produtoEdit ? produtoEdit.quantidade.toString() : '');
    const [valor, setValor] = useState(produtoEdit ? produtoEdit.valor.toString() : '');

    const salvarProduto = async () => {
        const produtoData = { 
            nome, 
            quantidade: parseInt(quantidade), 
            valor: parseFloat(valor) 
        };

        try {
            if (produtoEdit) {
                // CORREÇÃO: Adicionado /api/
                await api.put(`/api/produtos/${produtoEdit.id}`, produtoData);
                Alert.alert('Sucesso', 'Produto atualizado!');
            } else {
                // CORREÇÃO: Adicionado /api/
                await api.post('/api/produtos', produtoData);
                Alert.alert('Sucesso', 'Produto cadastrado!');
            }
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao salvar o produto.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Nome do Produto" value={nome} onChangeText={setNome} />
            <TextInput style={styles.input} placeholder="Quantidade" value={quantidade} onChangeText={setQuantidade} keyboardType="numeric" />
            <TextInput style={styles.input} placeholder="Valor (Ex: 10.50)" value={valor} onChangeText={setValor} keyboardType="numeric" />
            
            <Button title="Salvar" onPress={salvarProduto} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f5f6fa' },
    input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 15, paddingHorizontal: 10, borderRadius: 5, backgroundColor: '#fff' }
});