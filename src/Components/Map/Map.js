import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class Map extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }
  render() {
    return (
      <Text style={styles.text}>Insert Google Maps Here</Text>
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
    height: 500,
    marginVertical: 160,
    textAlign: 'center',
    fontSize: 20,
    width: 'auto'
  }
});