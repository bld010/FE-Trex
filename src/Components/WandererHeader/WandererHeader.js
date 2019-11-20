import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView,
  Platform
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
    fontWeight: '600',
    ...Platform.select({
      ios: {
        marginVertical: 0,
        height: 60,
      },
      android: {
        marginVertical: 50,
        height: 65,
        marginBottom: 20
      },
    }),
  }
})