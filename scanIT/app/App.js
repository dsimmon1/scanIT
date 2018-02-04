/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

// import App from './src/components/Home';
import Home from '.src/components/Home';
// import Scanner from '/src/component/Scanner';

import {
  Router,
  Scene

} from 'react-native-router-flux';

export default class App extends Component<{}> {
  render() {
    return (

<View>
      <Text style={styles.title}>
      </Text>
      <TextInput
      style={styles.nameInput}
      placeholder='username'
      />
      <TouchableOpacity
      onPress={() =>
      }}
      >
      <Text>
      Login
      </Text>
      </TouchableOpacity>
      <Text style={styles.buttonText}>
      Create Account
      </Text>
      </View>
    );
  }
}


var style = StyleSheet.create({

  title:{
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20
  }
});
