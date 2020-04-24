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



class Lists extends React.Component {


render() {
    return (


      <View style={styles.container}>
       <View style={styles.textContainer}>
            
            <View style={styles.header}>
                <Text style={styles.headerText}>
                      Salads
                  </Text>
            </View>
            </View>
      
      <View style={styles.listContainer}>
        
        <Text style={styles.item}>
        Grilled Chicken Salad
        </Text>

        <TouchableHighlight
        onPress={() => this.props.navigation.navigate('')}
        >
        <Image source ={{uri: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/best_and_worst_salads_for_your_health_slideshow/493ss_thinkstock_rf_grilled_chicken_salad.jpg'}}
 style={{ height: 150, width: 150, justifyContent: 'center', }}
        />
        </TouchableHighlight>

        <Text style={styles.item}>
        Spinach Salad
        </Text>

        <TouchableHighlight
        onPress={() => this.props.navigation.navigate('')}
        >
        <Image source ={{uri: 'https://juliasalbum.com/wp-content/uploads/2019/03/simple-spinach-salad.jpg'}}
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


export default Lists;
