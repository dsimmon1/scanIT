import React, { Component } from 'react';
import Home from './Home';
import {
  AppRegistry,
  Image,
  View,
  Text,
} from 'react-native';



const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

export default class HomeBackground extends Component {
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


