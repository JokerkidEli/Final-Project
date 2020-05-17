import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight,ImageBackground} from 'react-native';


class Turkey extends React.Component {


  render() {
     
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>

      <View style={styles.textContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                      Facts
                  </Text>
            </View>
            

            <Image source ={{uri: 'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2018/11/roasted-turkey.jpg?resize=1024%2C750&ssl=1'}}
 style={{ height: 165, width: 185, justifyContent: 'center', }}
        />
        </View>

      <View style={styles.textContainer}>
      <Text style={styles.description}>
        calories: 125
      </Text>

      <Text style ={styles.description}>
       fat: 1.7 g 
      </Text>

      <Text style ={styles.description}>
       carbs: 0 g
      </Text>

      <Text style ={styles.description}>
       protein: 25.6 g
      </Text>


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

header:{
    backgroundColor: 'lightgreen',
        height: 60,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
  },

  headerText:{
    color: 'white',
    fontSize: 34,
    fontWeight:'bold',
  },

loginFormView: {
  flex: 1
},

 description:{
   fontSize: 23,
   textAlign: 'center',
   marginTop: 12,
   fontWeight: 'bold',
 },


});

export default Turkey;
