import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../src/config/firebaseConfig';

export default function FormScreen() {
  const [carName, setCarName] = useState('');
  const [clientName, setClientName] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  const saveRental = async () => {
    try {
      await addDoc(collection(db, 'alugueis'), {
        carName, clientName, value, date, createdAt: new Date()
      });
      Alert.alert("Sucesso", "Aluguel registrado!");
      setCarName(''); setClientName(''); setValue(''); setDate('');
    } catch (e) {
      Alert.alert("Erro", "Falha ao salvar.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Carro</Text>
      <TextInput style={styles.input} value={carName} onChangeText={setCarName} />
      <Text style={styles.label}>Nome do Cliente</Text>
      <TextInput style={styles.input} value={clientName} onChangeText={setClientName} />
      <Text style={styles.label}>Valor do Aluguel</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={value} onChangeText={setValue} />
      <Text style={styles.label}>Data (DD/MM/AAAA)</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} />
      
      <TouchableOpacity style={styles.button} onPress={saveRental}>
        <Text style={styles.buttonText}>Salvar Registro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 5, fontWeight: '600' },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginBottom: 15, borderWidth: 1, borderColor: '#ddd' },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});