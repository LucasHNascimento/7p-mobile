import React from 'react';
import { View, Text } from 'react-native';

export default function Mensagem({ texto }) {
  return (
    <View>
      <Text style={{ fontSize: 18 }}>{texto}</Text>
    </View>
  );
}