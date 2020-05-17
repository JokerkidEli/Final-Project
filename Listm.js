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



class Listm extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <View style={styles.textContainer}>
            
            <View style={styles.header}>
                <Text style={styles.headerText}>
                      Meats
                  </Text>
            </View>
            </View>
      
      <View style={styles.listContainer}>
        
        <Text style={styles.item}>
        Turkey
        </Text>

        <TouchableHighlight
        onPress={() => this.props.navigation.navigate('Turkey')}
        >
        <Image source ={{uri: 'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2018/11/roasted-turkey.jpg?resize=1024%2C750&ssl=1'}}
 style={{ height: 150, width: 150, justifyContent: 'center', }}
        />
        </TouchableHighlight>

        <Text style={styles.item}>
        Pork
        </Text>

        <TouchableHighlight
        onPress={() => this.props.navigation.navigate('Pork')}
        >
        <Image source ={{uri: 'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2015/05/grilled-pork-chop.jpg?w=1024&ssl=1'}}
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


export default Listm;
