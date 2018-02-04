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
  View
} from 'react-native';

import Scanner from './src/components/Scanner';
import Home from './src/components/Home';
// import Scanner from '/src/component/Scanner';

import {
  Router,
  Scene

} from 'react-native-router-flux';

export default class App extends Component<{}> {
  render() {
    return (

      <View>
      <Text style={style.title}>
      Tropical Flooring
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
