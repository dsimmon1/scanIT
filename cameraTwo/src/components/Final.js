import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { Button, Container, Tab, Tabs, TabHeading, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { API } from '../utils/API'


class Final extends Component {

  state = {
    product_code: this.props.qrcode,
    description: '',
    quantity: '',
    location: 'north'

  }


  updateInventory = event => {
    // API.update({
    //     product_code: this.state.product_code,
    //     quantity: this.state.quantity
    //   })
    //     .then(res => console.log("updated inventory"))
    //     .catch(err => console.log(err));
  }

  newInventory = event => {
      //   API.new({
      //   product_code: this.state.product_code,
      //   description: this.state.description,
      //   quantity: this.state.quantity,
      //   location: this.state.location
      // })
      //   .then(res => console.log("updated inventory"))
      //   .catch(err => console.log(err));
  }


    render () {
        return (
        <Container>
        <Content>
        <Tabs>
        <Tab heading={ <TabHeading><Text>Update</Text></TabHeading>}>
          <Form>
            <Item>
              <Label style={styles.productLabel}>Product Code</Label>
              <Text style={styles.productLabel}>
              {this.props.qrcode}
             
              </Text>
            </Item>
            <Item floatingLabel last>
              <Label>Quantity</Label>
              <Input 
              name="quantity"
              onChangeText={(quantity) => this.setState({quantity})}
              value={this.state.quantity}
              />
            </Item>
             <Button success block 
            style={styles.buttonText}
            onPress={() => {
              this.updateInventory()
              Actions.last()
                  }}
            >
            <Text>Add to Inventory</Text>
          </Button>
          </Form>
          </Tab>

          <Tab heading={ <TabHeading><Text>New</Text></TabHeading>}>
          <Form>
            <Item>
              <Label style={styles.productLabel}>Product Code</Label>
              <Text style={styles.productLabel}>
              {this.props.qrcode} 
              </Text>
            </Item>
            <Item floatingLabel>
              <Label>WareHouse Number</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Description</Label>
              <Input 
              onChangeText={(description) => this.setState({description})}
              value={this.state.description}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Quantity</Label>
              <Input 
              onChangeText={(quantity) => this.setState({quantity})}
              value={this.state.quantity}
              />
            </Item>
             <Button success block 
            style={styles.buttonText}
            onPress={() => {
              this.newInventory()
                    Actions.last()
                  }}
            >
            <Text>Add to Inventory</Text>
          </Button>
          </Form>

          </Tab>
          </Tabs>
        </Content>
      </Container>
        )
    }

}

const styles = StyleSheet.create({
 buttonText:{
    margin: 20,
    padding: 5
  },
  productLabel:{
    marginBottom: 5,
    marginTop: 10
  }
});

export default Final;