import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight,ImageBackground} from 'react-native';


class GrilledChicken extends React.Component {


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
            

            <Image source ={{uri: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/best_and_worst_salads_for_your_health_slideshow/493ss_thinkstock_rf_grilled_chicken_salad.jpg'}}
 style={{ height: 165, width: 185, justifyContent: 'center', }}
        />
        </View>

      <View style={styles.textContainer}>
      <Text style={styles.description}>
        calories: 351.7
      </Text>

      <Text style ={styles.description}>
       fat: 10.2 g
      </Text>

      <Text style ={styles.description}>
       protein: 43.8 g
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
   marginTop: 15,
   fontWeight: 'bold',
 },


});

export default GrilledChicken;
