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



class Listf extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <View style={styles.textContainer}>
            
            <View style={styles.header}>
                <Text style={styles.headerText}>
                      Fruits
                  </Text>
            </View>
            </View>
      
      <View style={styles.listContainer}>
        
        <Text style={styles.item}>
        Blackberries
        </Text>

        <TouchableHighlight
        onPress={() => this.props.navigation.navigate('Blackberries')}
        >
        <Image source ={{uri: 'https://p2.piqsels.com/preview/92/728/1006/blackberries-on-a-plate-black-fruit.jpg'}}
 style={{ height: 150, width: 150, justifyContent: 'center', }}
        />
        </TouchableHighlight>

        <Text style={styles.item}>
        Bananas
        </Text>

        <TouchableHighlight
        onPress={() => this.props.navigation.navigate('Banana')}
        >
        <Image source ={{uri: 'https://p0.pikist.com/photos/931/884/bananas-fruit-food-fresh-mature-yellow-vitamins-diet-thumbnail.jpg'}}
 style={{ height: 150, width: 150, justifyContent: 'center', }}
        />
        </TouchableHighlight>

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
    alignItems: 'center',
  },

  listContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  header:{
    backgroundColor: 'lightgreen',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
  },

  headerText:{
    color: 'white',
    size: 38,
    fontWeight:'bold',
  },

  item:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
  },


});


export default Listf;
