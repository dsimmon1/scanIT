import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';


class Final extends Component {

    render () {
        return (
        <View>
      <Text style={styles.title}>
      Last Screen
      {this.props.qrcode}
      </Text>
      </View>
        )
    }

}

const styles = StyleSheet.create({
 title:{
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20
  }
});

export default Final;