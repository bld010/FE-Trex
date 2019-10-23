import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class Weather extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }
  render() {
    return (
      <Text style={styles.text}>Insert Weather Here</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    color: 'white',
    height: 200,
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 20,
    width: 200
  }
});