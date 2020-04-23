import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Info from './src/login/info.js';
import Menu from './src/login/menu.js';
import Listf from './src/Fruit Category/Listf.js';




const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Info: { screen: Info },
  Menu: { screen: Menu },
  Listf:{ screen: Listf},
 
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

