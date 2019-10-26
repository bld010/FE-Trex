import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => this.props.navigate("FollowerDashboard")}
        >
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigate("DefaultFollowerMessages")}
        >
          <Text style={styles.footerText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigate("MyWandererTrips")}
        >
          <Text style={styles.footerText}>Wanderer Trips</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#84183B",
    flexDirection: "row",
    padding: 30,
    justifyContent: "space-around"
  },
  footerText: {
    color: "white",
    marginBottom: 20,
    fontSize: 20
  }
});
