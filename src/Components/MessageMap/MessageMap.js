import React, { Component } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from 'react-native';

export default class MessageMap extends Component {
  constructor(props) {
    super(props)
    this.state ={
      longitude: this.props.longitude,
      latitude: this.props.latitude,
      markers: [
        {
          latitude: this.props.latitude,
          longitude: this.props.longitude,
          title: 'User Location',
        }
      ]
    }
  }

  

  render = () => {
    return (
      <MapView 
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0421
        }} 
        showsUserLocation={false}
        annotations={this.state.markers} 
        style={styles.mapStyle}>
        <MapView.Marker
            coordinate={{latitude: this.state.latitude,
            longitude: this.state.longitude}}
            title={this.props.wandererName}
            description={this.props.createdAt}
         />
      </MapView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  mapStyle: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8
  }
});
