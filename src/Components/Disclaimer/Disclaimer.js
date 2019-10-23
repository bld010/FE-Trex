import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";

const Disclaimer = () => {
  return (
  <View>
    <Text style={styles.text}>
  This application is designed for your safety. 
  Please do not add followers 
  that you do not know of trust!
  </Text>
  <TouchableOpacity>
  <Text style={styles.button}>Continue</Text>
  </TouchableOpacity>
  </View>
    
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    marginVertical: 40,
    textAlign: 'center',
    fontSize: 20,
    width: 'auto'
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    width: 'auto',
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#1C4263'
  }
});

export default Disclaimer