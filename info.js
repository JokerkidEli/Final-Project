import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight,ImageBackground} from 'react-native';


class Info extends React.Component {


  render() {
     
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>

      <View style={styles.textContainer}>
      <Text style={styles.text}>
          App Information
      </Text>
      </View>

      <View style={styles.textContainer}>
      <Text style={styles.description}>
          This app allows you to explore different foods and meals based on their food group and healthiness.
      </Text>
      </View>


             <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Menu')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            CONTINUE
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>



          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

}



const styles = StyleSheet.create({

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},

textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

text:{
  fontWeight: 'bold',
  fontSize: 27,
},

loginFormView: {
  flex: 1
},

touchableButton1: {
        backgroundColor: 'grey',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
        borderWidth: 1,
    },

 buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 },

 description:{
   fontSize: 23,
   textAlign: 'center',
   marginTop: 15,
 },


});

export default Info;
