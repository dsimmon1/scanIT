import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';

class BarcodeScan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qrcode: ''
        }
    }

    onBarCodeRead = (e) => this.setState({qrcode: e.data});

    render () {
        return (
            <View  style={styles.container}>
                <Camera
                    style={styles.preview}
                    onBarCodeRead={this.onBarCodeRead}
                    ref={cam => this.camera = cam}
                    aspect={Camera.constants.Aspect.fill}
                    >
                        <Text 
                        style={{
                            backgroundColor: 'white',
                            color: 'black',
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                        >{this.state.qrcode}</Text>

                         <TouchableHighlight
                          style={styles.button}
                          onPress={() => {
                    Actions.final({qrcode: this.state.qrcode})
                }}
            >
            <Text
            style={
                styles.buttonText
            }
            >
Receive Item
            </Text>
            </TouchableHighlight>
                    </Camera>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonText:{
    color: 'black',
    padding: 2
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 130,
    margin: 40
  }
});

export default BarcodeScan;

            // {this.props.name} 