import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import { Button, Container, Header, Content, Form, Item, Input, Label } from 'native-base';


import { Actions } from 'react-native-router-flux';


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>

          <View style = {styles.logoContent}>
            <Image
             style = {styles.logo}
             source={require('../images/Tropical_Flooring_Logo_Black.png')} />
          <Text style = {styles.titleApp}></Text>
          </View>
          <LoginForm style ={{flex:0}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  logoContent:{
    flexGrow :1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo:{
    width:300,
    height: 110,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
