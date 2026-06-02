import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Button, Text, View, Image, TextInput, AppRegistry } from 'react-native';
import img1 from './assets/Img1.jpeg';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import PerfilScreen from './src/screens/PerfilScreen';
const Stack = createNativeStackNavigator();

export class mister extends HomeScreen {
  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'blue'}} onPress={this.buttonPress}>sign up</Text>
      </View>
    )
  }
    buttonPress() {
    console.log('called');
    this.props.navigation.navigate('Signup');
  }
}
export default function App(){
  return (
    <ScrollView style={styles.containerPrincipal}>
      <View style={styles.container}>
      
    
{/*   <Image
        style={styles.image}
        source={require('./assets/Img3.jpeg')}
      />
      <Image
        style={styles.image}
        source={require('./assets/Img4.jpeg')}
      />
      <Image
        style={styles.image}
        source={require('./assets/Img5.jpeg')}
      />
      */}
      </View> 
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component= {HomeScreen}
          />
          <Stack.Screen
            name="Perfil"
            component={PerfilScreen}
          />
        </Stack.Navigator>
        
      </NavigationContainer>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#f5f5f5a2',
    padding: 16,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    marginTop: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 80,
    marginTop: -80,
  },
  image: {
    flexDirection: 'row',
    width: 200,
    height: 200,
    alignItems: 'flex-start',
  },
  Button: {    
    flexDirection: 'column',
  }
});