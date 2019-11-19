import React, { Component } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Platform,
  Dimensions
} from "react-native";

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
      latitudeDelta: 0.922,
      longitudeDelta: 0.0421,
      latitude: 48.8606,
      longitude: 2.3376
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
  };

  render() {
    return (
      <>
        {this.state.location !== null && (
          <MapView
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0422,
              longitudeDelta: 0.0421
            }}
            showsUserLocation={true}
            style={styles.mapStyle}
          >
            <MapView.Marker
              coordinate={{ latitude: 48.8606, longitude: 2.3376 }}
              title={"My Location"}
              description={"Musée du Louvre"}
            />
            <MapView.Marker
              coordinate={{ latitude: 48.8677, longitude: 2.3200 }}
              title={"US Embassy"}
              description={"Embassy of the United States, Paris"}
              pinColor={"green"}
            />
          </MapView>
        )}
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  mapStyle: {
    ...Platform.select({
      ios: {
        height: 380
      },
      android: {
        height: 365,
        marginVertical: 20
      }
    })
  }
});
