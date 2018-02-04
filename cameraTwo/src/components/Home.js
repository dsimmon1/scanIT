import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class Home extends Component {

    render () {
        return (
        <View>
      <Text style={styles.title}>
      Tropical Flooring
      </Text>
      <Text style={styles.title}>
      Enter your username:
      </Text>
      <TextInput style={styles.nameInput} placeholder='username'/>
      <TouchableOpacity
        onPress={() => {Actions.camera()}}
      >
      <Text style={styles.buttonText}>
      Next
      </Text>
      </TouchableOpacity>
      </View>
        )
    }

}

const styles = StyleSheet.create({
 title:{
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20
  },
  nameInput:{
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20
  },
  buttonText:{
    marginLeft: 20,
    fontSize: 20
  }
});

export default Home;