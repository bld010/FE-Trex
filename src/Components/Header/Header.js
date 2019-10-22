import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Text style={styles.header}>Ariva</Text>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1C4263',
    color: 'white',
    // paddingTop: 60,
    paddingLeft: 10,
    textAlign: 'center',
    top: 0,
    fontSize: 50,
  }
})