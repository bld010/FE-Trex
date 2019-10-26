import React, { Component } from "react";
import Home from '../Home/Home'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";

export default class FollowerDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Display Wanderers that user follows</Text>
      </View>
    )
  }
}