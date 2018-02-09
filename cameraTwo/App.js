import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Home from './src/components/Home';
import Camera from './src/components/Camera';
import Final from './src/components/Final';
import BackgroundImage from './src/components/HomeBackground';

export default class App extends Component<{}> {
  render() {
    return (

        <Router>
      <Scene key="root">
        <Scene key="home"
          component={BackgroundImage}
          title="Log in"
          header={false}
        />
        <Scene
          key="camera"
          component={Camera}
          title="Camera"
        />
        <Scene
          key="final"
          component={Final}
          title="Inventory Input"
        />
      </Scene>
    </Router>
    );
  }
}


var style = StyleSheet.create({

  title:{
    marginTop: 5,
    marginLeft: 20,
    fontSize: 20,
    height: .5,
  }
});


