import {Pressable, Text, TextInput, View} from 'react-native';
import React from 'react';
import { styles } from '../styles.js';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig.js';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
export default function ReplacePassword({Navigation}) {
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigation = useNavigation();

    function replacePassword() { 
        alert('Acionada a função replacePassword');
        if(userMail !== ''){
            sendPasswordResetEmail(auth, userMail)
            .then(() => {
                alert("Foi enviado um email para: " + userMail + ".Verifique a sua caixa de email.");
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert("Ops! Alguma coisa não deu certo. "+ errorMessage + " Tente novamente ou pressione voltar");
                return;
            })
        } else {
            alert("É preciso informar um e-mail válido  para efetuar a redefinição de senha");
            return;
        }
        navigation.navigate('/replacePassword');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>Redefinição de Senha</Text>
            <TextInput
                style={styles.formInput}
                placeholder="Informe o E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value={userMail}
                onChangeText={(text) => setUserMail(text)}
            />
            <Pressable 
                style={styles.sendButton}
                onPress={() => 
                    navigation.navigate('replacePassword')}
            >
                <Text style={styles.textButton}>Enviar</Text>
            </Pressable>
            <View>
                <Pressable
                    onPress={() => navigation.navigate("/")}
                >
                    <Text>Voltar</Text>
                </Pressable>
            </View>
        </View>
    );
}