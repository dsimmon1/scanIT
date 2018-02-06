import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
} from 'react-native';

import Home from './Home';

const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

export default class BackgroundImage extends Component {
  render() {
    const resizeMode = 'center';

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >

          <Image
            style={{
              flex: 1,
             
            }}

            source={require('../images/janna.jpeg')}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          
           <Home/>
          
        </View>
      </View>
    );
  }
}
