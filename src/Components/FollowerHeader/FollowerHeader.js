import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <>
      <SafeAreaView style={styles.top}/>
      <Text style={styles.header}>Trex</Text>
      </>
    )
  }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#84183B',
    flex: 0
  },
  header: {
    backgroundColor: '#84183B',
    color: 'white',
    paddingLeft: 10,
    textAlign: 'center',
    fontSize: 50,
    height: 60,
  }
})