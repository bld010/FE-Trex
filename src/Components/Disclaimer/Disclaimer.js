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
    <Text>This application is designed for your safety. Please do not add followers that you do not know of trust!</Text>
    <TouchableOpacity>Continue</TouchableOpacity>
    </View>
  )
}

export default Disclaimer