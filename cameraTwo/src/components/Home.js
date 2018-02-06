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

class Home extends Component {

    state = {
        name: '',
        password: ''
    }

    render () {
        return (
        <Container>
            <Image
             style={{width: 300, height: 100, marginLeft: 30}}
                source={require('../images/Tropical_Flooring_Logo_Black.png')}
            />
        <Content>
          <Form style={styles.background}>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input
                  onChangeText={(text) => {
                this.setState({
                name: text,
                });
                }}
                value={this.state.name}
               />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
              onChangeText={(text) => {
                this.setState({
                password: text,
                });
                }}
                value={this.state.password}
               />
            </Item>
            <Button success block 
            style={styles.buttonText}
            onPress={() => {
                    Actions.camera()
                }}
            >
            <Text>Submit</Text>
          </Button>
          </Form>
        </Content>
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

export default Home;