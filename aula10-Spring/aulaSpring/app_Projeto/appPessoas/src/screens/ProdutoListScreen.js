import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Button, ActivityIndicator } from 'react-native';
import api from '../services/api';
import ProdutoCard from '../components/ProdutoCard';

export default function ProdutoListScreen({ navigation }) {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            carregarProdutos();
        });
        return unsubscribe;
    }, [navigation]);

    const carregarProdutos = async () => {
        try {
            const response = await api.get('/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error("Erro ao buscar produtos", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
    }

    return (
        <View style={styles.container}>
            <Button 
                title="Cadastrar Novo Produto" 
                onPress={() => navigation.navigate('ProdutoForm')} 
            />
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProdutoCard 
                        produto={item} 
                        onPress={() => navigation.navigate('ProdutoDetail', { produto: item })} 
                    />
                )}
                contentContainerStyle={{ marginTop: 10 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f5f6fa' },
    loading: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});