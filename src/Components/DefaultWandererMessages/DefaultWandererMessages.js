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
      <View>
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
