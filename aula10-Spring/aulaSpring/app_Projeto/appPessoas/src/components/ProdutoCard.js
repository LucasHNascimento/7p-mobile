import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProdutoCard({ produto, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.nome}>{produto.nome}</Text>
            <Text style={styles.detalhe}>Quantidade: {produto.quantidade}</Text>
            <Text style={styles.detalhe}>Valor: R$ {produto.valor}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        elevation: 2, // sombra no Android
        shadowColor: '#000', // sombra no iOS
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    detalhe: {
        fontSize: 14,
        color: '#7f8c8d',
        marginTop: 4,
    }
});