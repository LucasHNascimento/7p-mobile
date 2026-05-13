import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import api from '../services/api';

export default function ProdutoDetailScreen({ route, navigation }) {
    const { produto } = route.params;

    const excluirProduto = async () => {
        Alert.alert(
            "Excluir",
            "Tem certeza que deseja excluir este produto?",
            [
                { text: "Cancelar", style: "cancel" },
                { 
                    text: "Excluir", 
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await api.delete(`/produtos/${produto.id}`);
                            Alert.alert("Sucesso", "Produto excluído.");
                            navigation.navigate('ProdutoList');
                        } catch (error) {
                            Alert.alert("Erro", "Falha ao excluir produto.");
                            console.error(error);
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>ID: {produto.id}</Text>
            <Text style={styles.texto}>Nome: {produto.nome}</Text>
            <Text style={styles.texto}>Quantidade: {produto.quantidade}</Text>
            <Text style={styles.texto}>Valor: R$ {produto.valor}</Text>
            
            <View style={styles.botoes}>
                <Button title="Editar" onPress={() => navigation.navigate('ProdutoForm', { produto })} />
                <View style={{ width: 10 }} />
                <Button title="Excluir" color="red" onPress={excluirProduto} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f5f6fa' },
    texto: { fontSize: 18, marginBottom: 10 },
    botoes: { flexDirection: 'row', marginTop: 20 }
});