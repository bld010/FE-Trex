import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class LegForm extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
        <ScrollView>
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="Your name"
      maxLength={20}
    />
  </View>
</ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    marginTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
});