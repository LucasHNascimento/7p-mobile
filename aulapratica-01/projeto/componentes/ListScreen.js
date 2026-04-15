import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../src/config/firebaseConfig';

export default function ListScreen() {
  const [rentals, setRentals] = useState([]);

  const fetchRentals = async () => {
    const querySnapshot = await getDocs(collection(db, 'alugueis'));
    const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setRentals(list);
  };

  useEffect(() => {
    fetchRentals();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={rentals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.carTitle}>{item.carName}</Text>
            <Text>Cliente: {item.clientName}</Text>
            <Text>Valor: R$ {item.value}</Text>
            <Text>Data: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f0f0' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
  carTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' }
});