import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform
} from "react-native";

export default class Weather extends Component {
  constructor() {
    super() 
    this.state = {
      weather: []
    }
  }

  render() {
    console.log(this.state.weather)
    return (
      <View style={styles.container}>
        <View style={styles.text}>
        <Text style={styles.weatherText}>Paris</Text>
        <Image  style={{width: 120, height: 110, marginLeft: 30}} source={{uri: 'https://cdn3.iconfinder.com/data/icons/picons-weather/57/15_heavy_rain-512.png'}}/>
        <Text style={styles.weatherText}>54°</Text>
        <Text style={styles.weatherText}>Rainy</Text>
        </View>
      </View>
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
    // height: 200,
    // marginVertical: 19,
    // width: 180,
    // marginRight: 10
    ...Platform.select({
      ios: {
        height: 200,
        width: 180,
        marginVertical: 19,
        marginRight: 10
      },
      android: {
        height: 240,
        width: 190,
        marginRight: 10
      }
    })
  },
  weatherText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 4
  }
});