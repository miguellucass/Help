import React from 'react';
import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Text, Button, Image, TextInput, Pressable } from 'react-native';
import { styles } from '../styles.js';
import {useNavigation, NavigationContainer, NavigationIndependentTree} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import Stack from '../../App.js';
import newUser from './newUser.js';
import ReplacePassword from './replacePassword.js';
import HomeScreen from '../screens/HomeScreen.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';   // eu não estou usando isso por enquanto
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebaseConfig.js';
//import App from '../../App.js';

export default function Login({Navigation}){
  const screen = HomeScreen;
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const Stack = createNativeStackNavigator();


  function replacePassword() {
 //   router.replace('/replacePassword');
  };
  function newUser() {
 //   router.replace('/newUser'); 
  };
  function userLogin() {
    signInWithEmailAndPassword(auth, userMail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Login realizado!');
        console.log(userCredential.user);
        navigation.navigate('UserScreen');  //veja isso aqui
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage); //ou console.log(errorMessage);
      });
}
  return (
    <ScrollView style={styles.containerPrincipal}>
      <View style={styles.container}>
        <Text style={styles.formTitle}>Login no sistema</Text>
        <TextInput style={styles.formInput}
          placeholder="Informe o E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          value={userMail}   //pode ser no final ;
          onChangeText={(text) => setUserMail(text)} // analise essa linha de código depois porque pode ser também onChangeText={setUserMail}
        />
        <Text style={styles.formTitle}>Senha</Text>
        <TextInput style={styles.formInput}
          placeholder="Informe a senha"
          autoCapitalize="none"
          value={userPassword}  //pode ser no final ;
          onChangeText={(text) => setUserPassword(text)} // analise essa linha de código depois porque pode ser também onChangeText={setUserPassword}
          secureTextEntry//={true}
        />
      </View>
      <View>
        <NavigationIndependentTree>
          <Stack.Navigator>
            <Pressable style={styles.formButton}
              onPress={userLogin}
            >
              <Stack.Screen
                style={styles.formButton}
                name="Entrar"
                component= {userLogin}  //
              />
            </Pressable>
            <View style={styles.subContainer}>
              <Pressable style={styles.subButton}
                onPress={replacePassword}
              >
                <Stack.Screen
                  style={styles.subTextButton}
                  name="Esqueci a senha"
                  component={replacePassword} //
                />
              </Pressable>
              <Pressable style={styles.subButton}
                onPress={newUser}
              >
                <Stack.Screen
                  style={styles.subTextButton}
                  name="Cadastro"
                  component={newUser} //
                />
              </Pressable>
            </View>
          </Stack.Navigator>
        </NavigationIndependentTree>
      </View>
    </ScrollView>
  );
{/*          <Stack.Screen
            style={styles.TelaPadrão}
            name="Home"
            component= {HomeScreen}
          />
          <Stack.Screen
            name="Perfil"
            component={PerfilScreen}
          /> */}


{/*      <Pressable style={styles.formButton}
        onPress={userLogin}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}
          onPress={replacePassword}
        >
          <Text style={styles.subTextButton}>Esqueci a senha</Text>  
        </Pressable>
        <Pressable style={styles.subButton}
          onPress={newUser}
        >
          <Text
          style={styles.subTextButton}
          onPress={newUser}>Cadastro</Text>
        </Pressable>
      </View>
       */}
}
