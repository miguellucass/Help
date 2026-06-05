import React, {useState} from 'react';
import { StyleSheet, ScrollView, Button, Text, View, Image, TextInput, AppRegistry } from 'react-native';

export const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#f5f5f5a2',
        padding: 16,
        flexDirection: 'column',
    },
    container: {  
        flex: 1,
        marginTop: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 43,
    },
    formTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'blueviolet',
        textAlign: 'center',
        margin: 10,

    },
    formInput: {
        bordercolor: 'blueviolet',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        width: '80%',
        padding: 10,
        margin: 10,
    },
    formButton: {
        backgroundColor: 'blueviolet',
        width: '80%',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    subButton: {
        padding: 10,
    },
    subTextButton: {
        color: 'blueviolet',
    },
    sendButton: {   //mudar
        padding: 10,
    },
    containerText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 33,
        marginTop: 10,
    },
    image: {
        flexDirection: 'row',
        width: 200,
        height: 200,
        alignItems: 'flex-start',
    },
    Button: {    
        flexDirection: 'column',
    },
    TelaPadrão:{
        marginTop: 10,
        marginBotton: 100,
        padding: 80,
    }
});