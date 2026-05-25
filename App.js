import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { getAuth } from './src/firebaseConfig.js';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword }
from 'firebase/auth';
import { signInWithEmailAndPassword }
from 'firebase/auth';
export default function App(){
  const criarConta = () => {
    createUserWithEmailAndPassword(
      getAuth,
    )
    .then((userCredential) => {
      console.log('Usuário criado!');
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log('Erro');
      console.log(error);
    });
  };
  const login = () => {
    signInWithEmailAndPassword(
      getAuth,
    )
    .then((userCredential) => {
      console.log('Login realizado!');
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return (
    <View style={styles.container}>
      <Button 
        title="Criar Conta" onPress={criarConta}
      />
      <Button 
        title="Login" onPress={login}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open up App.js to start working on your app!</Text>
      <Text>Hello, World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});