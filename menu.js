import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';



class Menu extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>

      <Text style={styles.header}>
       Choose A Category
      </Text>

      <View style={styles.menuContainer}>

         <View style={styles.textContainer}>
            <TouchableHighlight
           onPress={() => this.props.navigation.navigate('Listf')}
            >
            <View style={styles.touchableButton}>
                <Text style={styles.buttonText}>
                      Fruits
                  </Text>
            </View>
            </TouchableHighlight>
            </View>

            <View style={styles.textContainer}>
            <TouchableHighlight>
           <View style={styles.touchableButton}>
                <Text style={styles.buttonText}>
                      Meats
                  </Text>
            </View>
            </TouchableHighlight>
            </View>

            <View style={styles.textContainer}>
            <TouchableHighlight>
           <View style={styles.touchableButton}>
                <Text style={styles.buttonText}>
                      Salads
                  </Text>
            </View>
            </TouchableHighlight>
            </View>
 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 27,
  },
  menuContainer:{
    justifyContent: 'center',
  },
  touchableButton: {
        backgroundColor: 'green',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
        borderWidth: 1,
    },
 buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 },
});


export default Menu;
