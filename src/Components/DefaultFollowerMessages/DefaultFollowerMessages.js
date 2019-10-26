import React, { Component } from "react";
import FollowerHeader from '../FollowerHeader/FollowerHeader';
import FollowerFooter from '../FollowerFooter/FollowerFooter'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";

export default class DefaultFollowerMessages extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <FollowerHeader />
        <TouchableOpacity>
          <Text style={styles.button}>Default Message 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Default Message 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Default Message 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Default Message 4</Text>
        </TouchableOpacity>
        <FollowerFooter navigate={navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  button: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    width: "auto",
    height: 60,
    margin: 31,
    fontSize: 30,
    padding: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "#84183B"
  }
});