import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import { Button, Container, Header, Content, Form, Item, Input, Label } from 'native-base';


import { Actions } from 'react-native-router-flux';

class Last extends Component {

    render () {
        return (
        <Container>
        <Button success block 
        onPress={() => {
                    Actions.camera()
                }}
            style={styles.buttonText}>
            <Text>Scan Another</Text>
            </Button>
        <Button success block 
        onPress={() => {
                    Actions.home()
                }}
            style={styles.buttonText}
            >   
            <Text>Logout</Text>
            </Button>
        </Container>

        )
    }

}

const styles = StyleSheet.create({
    background:{
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        margin: 10
    },
 title:{
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  nameInput:{
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20
  },
  buttonText:{
    margin: 20,
    padding: 5
  }
});

export default Last;