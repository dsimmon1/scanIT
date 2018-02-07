import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
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
                            backgroundColor: 'blue'
                        }}
                        >{this.state.qrcode}</Text>

                         <TouchableOpacity
                          onPress={() => {
                    Actions.final()
                }}
            >
            <Text
            style={
                styles.buttonText
            }
            >
            {this.props.name}
            </Text>
            </TouchableOpacity>
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
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: 3
  }
});

export default BarcodeScan;