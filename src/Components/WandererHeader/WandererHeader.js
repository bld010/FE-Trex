import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default class WandererHeader extends Component {
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
    backgroundColor: '#1C4263',
    flex: 0,
    padding: 5
  },
  header: {
    backgroundColor: '#1C4263',
    color: 'white',
    textAlign: 'center',
    fontSize: 50,
    height: 70,
    fontWeight: '600',
    padding: 15
  }
})