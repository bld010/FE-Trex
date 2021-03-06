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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#84183B',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    height: 60
  },
  footerText: {
    color: "white",
    fontSize: 20
  }
});
