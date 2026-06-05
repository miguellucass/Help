import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Button, Text, View, Image, TextInput, AppRegistry } from 'react-native';
import { styles } from '../styles.js';
import {useNavigation} from '@react-navigation/native';


export default function HomeScreen({ Navigation }) {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.containerText}>Faça hoje o que você gostaria que os outros fizessem por você amanhã</Text>
      <Button
        title="Criar uma arrecadação"
        onPress={() =>
          navigation.navigate('Login')
        }
      />
      <Button
        title="Irei doar para..." color="#D4A2FF"
      />
      <Text /*alignItens='baseline'*/ color="#B158FF" fontSize={60}>
        Conheça também
      </Text>
    </View>
  );
};
