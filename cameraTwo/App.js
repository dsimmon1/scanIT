// import React, {Component} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet
// } from 'react-native';

// // import Camera from 'react-native-camera';
// import {StackNavigator,} from 'react-navigation';

// const App = StackNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// });

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() =>
//           navigate('Profile', { name: 'Jane' })
//         }
//       />
//     );
//   }
// }


import React from 'react';
import PropTypes from 'prop-types';
import {Button, NavigatorIOS, Text, View} from 'react-native';

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'Janna Banana Page 1',
          // text: "yo uoods",
          passProps: {index: 1},
        }}
      />

    );
  }
}

class MyScene extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene ' + nextIndex,
      passProps: {index: nextIndex},
    });
  }



 render() {
    console.log('My scene??')
    return (
        <Text style={{ color: 'black'}}>Blah Blah Blah</Text>
    )
  //   return (
  //     <View>
  //       <Text>Current Scene: {this.props.title}</Text>
  //       <Button
  //         onPress={this._onForward}
  //         title="Tap me to load the next scene"
  //       >
  //           Tap me to load
  //       </Button>
  //     </View>
  //   );
  }
}