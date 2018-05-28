import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Login from './src/Components/Login';

export default class InflexionCode extends Component{
  render(){
    return(
      <Login/>
    );
  }
}
AppRegistry.registerComponent('InflexionCode', () => InflexionCode);
