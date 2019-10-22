import React, { Component } from 'react';
import Map from '../Map/Map'
import Weather from '../Weather/Weather'
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
  <ScrollView>
  <View>
    <Weather />
  </View>
  <View>
    <Map />
  </View>
  </ScrollView>
      
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