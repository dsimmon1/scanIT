import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { Button, Container, Tab, Tabs, TabHeading, Header, Content, Form, Item, Input, Label } from 'native-base';


class Final extends Component {

  state = {
    itemName: '',
    itemCode: '',

  }


    render () {
        return (
        <Container>
        <Content>
        <Tabs>
        <Tab heading={ <TabHeading><Text>Update</Text></TabHeading>}>
          <Form>
            <Item floatingLabel>
              <Label>{this.state.qrcode}</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Quantity</Label>
              <Input />
            </Item>
             <Button success block 
            style={styles.buttonText}
            >
            <Text>Add to Inventory</Text>
          </Button>
          </Form>
          </Tab>

          <Tab heading={ <TabHeading><Text>New</Text></TabHeading>}>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>WareHouse Number</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Description</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Quantity</Label>
              <Input />
            </Item>
             <Button success block 
            style={styles.buttonText}
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
  }
});

export default Final;