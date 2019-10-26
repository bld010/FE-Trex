import React, { Component } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
      latitudeDelta: 0.922,
      longitudeDelta: 0.0421
    };
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ location: position });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
    
    render() {
      
      if (this.state.location) {
      
  
        console.log('in if block', this.state.location.coords)

        
      }
      
      return (
        <View style={styles.container}>
      {this.state.location !== null && 
      <MapView 
        region={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0421
        }} 
        showsUserLocation={true} 
        style={styles.mapStyle}>
      </MapView>

      }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 300
  }
});
