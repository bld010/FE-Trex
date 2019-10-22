import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';

export default class Dashboard extends Component {
  render() {
    return (
      <Text style={styles.text}>Hey</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    marginVertical: 40,
    textAlign: 'center',
    fontSize: 30,
    width: 'auto'
  }
});