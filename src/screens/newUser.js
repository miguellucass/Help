import {Pressable, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import { styles } from '../styles.js';
//import { useRouter } from 'expo-router';
import { auth } from '../firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
export default function NewUser({Navigation}) {
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userRePassword, setUserRePassword] = useState('');
  
    function newUser() {
       // alert('Botão acionado');
        if(userMail === '' || userPassword === '' || userRePassword === '') {
            alert('Todos os campos devem ser preenchidos');
            return;
        }
        if(userPassword !== userRePassword) {
            alert('A senha e a confirmação de senha não são iguais');
            return;
        } else {
            createUserWithEmailAndPassword(auth, userMail, userPassword)
                .then((userCredential) => {   //mas pode voltar 1 indentação atrás.
                    const user = userCredential.user;
                    alert('O Usuário' + userMail + 'foi criado com sucesso. Faça o login.');
                    console.log(userCredential.user);
                    navigation.navigate('/');
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                    navigation.navigate('/');
                });
            //até aqui
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>Novo Usuário</Text>
            <TextInput style={styles.formInput}
                placeholder="Informe o E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value={userMail}
                onChangeText={(text) => setUserMail(text)}  // analise essa linha de código depois porque pode ser também onChangeText={setUserMail}
            />
            <TextInput style={styles.formInput}
                placeholder="Informe a senha"
                autoCapitalize="none"
                secureTextEntry
                value={userPassword}
                onChangeText={(text) => setUserPassword(text)} // analise essa linha de código depois porque pode ser também onChangeText={setUserPassword}
            />
            <TextInput style={styles.formInput}
                placeholder="Repita a senha"
                autoCapitalize="none"
                secureTextEntry
                value={userRePassword}
                onChangeText={(text) => setUserRePassword(text)} // analise essa linha de código depois porque pode ser também onChangeText={setUserRePassword}
            />
            <Pressable
                style={styles.formButton}
                onPress={newUser}
            >
                <Text style={styles.textButton}>
                    Cadastrar
                </Text>
            </Pressable>
        </View>
    );
}
