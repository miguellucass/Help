import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useNavigation} from '@react-navigation/native';
export default function HomeScreen({ Navigation }) {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.containerText}>Faça hoje o que você gostaria que os outros fizessem por você amanhã</Text>
      <Button
        style={styles.containerText}
        title="Criar uma arrecadação"
        onPress={() =>
          navigation.navigate('Perfil')
        }
      />
      <Button
        title="Irei doar para..." borderRadius={150} color="#D4A2FF" //onPress={login}
      />
      <Text /*alignItens='baseline'*/ color="#B158FF" fontSize={60}>
        Conheça também
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  containerText: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 100,
    marginTop: -160,
  },

});
function ProfileScreen({route}) {
  return <Text>This is {route.params.name}'s profile</Text>;
}