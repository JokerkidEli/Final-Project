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



class Homescreen extends React.Component {

  constructor(props) {
    super(props);
    this.fadeAnim = new Animated.Value(1);
  }

  componentDidMount() {
    Animated.timing(          // Animate over time
      this.fadeAnim, // The animated value to drive
      {
        toValue: 0,           // Animate to opacity: 1 (opaque)
        duration: 2000,
      }
    ).start(() => {
      console.log('fading out');
      
      // this.props.navigation.navigate('login');
      /* setTimeout(() => {
        this.fadeOut();
      }, 2000); */
    });
               
  }

  render() {
    return (


      <View style={styles.container}>

          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://drive.google.com/thumbnail?id=1g_QPczMnuVU9T34o8XVdbL58BXBL9o8g&authuser=0&sz=w1364-h600'}}
 style={{ height: 188, width: 250, justifyContent: 'center', }}
/>
          
          
            </View>

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Info')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            ENTER
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


   touchableButton1: {
        backgroundColor: 'grey',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
   
   
    },
   
    buttonText: {
     
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Homescreen;
