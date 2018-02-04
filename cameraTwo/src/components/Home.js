import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class Home extends Component {

    render () {
        return (
        <View>
            <Image
            
            />
            <Text style={styles.title}>
                Enter your username:
            </Text>
            <TextInput 
                style={styles.nameInput} 
                placeholder='username'
                onChangeText={(text) => {
                this.setState({
                name: text,
                });
                }}
            />
            <TouchableOpacity
                onPress={() => {
                    Actions.camera()
                }}
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