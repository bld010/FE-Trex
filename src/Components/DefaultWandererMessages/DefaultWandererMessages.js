import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";

export default class DefaultWandererMessages extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    marginTop: 15
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    width: "auto",
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "#1C4263"
  }
});
