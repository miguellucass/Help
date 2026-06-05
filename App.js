import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Button, Text, View, Image, TextInput, AppRegistry } from 'react-native';
import img1 from './assets/Img1.jpeg';
import { styles } from './src/styles.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import PerfilScreen from './src/screens/PerfilScreen';
//import app from './src/firebaseConfig.js';
  
const Stack = createNativeStackNavigator();

function Nav(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component= {HomeScreen}
      />
      <Stack.Screen
        name="Login"
        component={PerfilScreen}
      />
    </Stack.Navigator>
  );
}
export default function App(){
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
}