import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Info from './src/login/info.js';
import Menu from './src/login/menu.js';
import Listf from './src/Fruit Category/Listf.js';
import Listm from './src/Meat Category/Listm.js';
import Lists from './src/Salad Category/Lists.js';
import Banana from './src/Fruit Category/Banana.js';
import Blackberries from './src/Fruit Category/Blackberries.js';
import GrilledChicken from './src/Salad Category/GrilledChikSal.js';
import SpinachSalad from './src/Salad Category/Spinach.js';
import Turkey from './src/Meat Category/Turkey.js';
import Pork from './src/Meat Category/Pork.js';


const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Info: { screen: Info },
  Menu: { screen: Menu },
  Listf:{ screen: Listf},
  Listm:{ screen: Listm},
  Lists:{ screen: Lists},
  Banana:{ screen: Banana },
  Blackberries:{ screen: Blackberries },
  GrilledChicken:{ screen: GrilledChicken },
  SpinachSalad:{ screen: SpinachSalad },
  Turkey:{ screen: Turkey },
  Pork:{ screen: Pork },
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
