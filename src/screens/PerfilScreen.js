import React from 'react';
import { View, Text, Button } from 'react-native';
import {Navigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

export default function PerfilScreen({ Navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
     {/* <Text>Tela de Perfil</Text>

      <Button
        
        onPress={() => Navigation.goBack()}
      /> */}
    </View>
  );
} 