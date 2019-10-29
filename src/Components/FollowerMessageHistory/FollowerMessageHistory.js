import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import FollowerHeader from '../FollowerHeader/FollowerHeader';
import FollowerFooter from '../FollowerFooter/FollowerFooter';

export default class FollowerMessageHistory extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return(
      <View style={styles.container}>
        <FollowerHeader />
        <ScrollView>
          <Text style={styles.text}>Message history with selected wanderer</Text>
        </ScrollView>
        <FollowerFooter />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    color: "black",
    paddingVertical: 15,
    textAlign: 'center'
  }
})