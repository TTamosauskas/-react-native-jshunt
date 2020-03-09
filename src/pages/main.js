import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Main extends Component {

static navigationOptions = {
  title: "JSHunt",
  headerTintColor: "#FFF",
  headerStyle:{backgroundColor:"#DA552F"},
  }

render(){
  return (<View><Text>Hello World</Text></View>);
}
}
