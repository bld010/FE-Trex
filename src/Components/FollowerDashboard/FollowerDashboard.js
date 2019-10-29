import React, { Component } from "react";
import FollowerHeader from '../FollowerHeader/FollowerHeader'
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

export default class FollowerDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          <FollowerHeader />
      <ScrollView>
        <Text style={styles.text}>My Wanderers</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate("MyWanderer")}>
        <Text style={styles.buttonText}>Fake Wanderer 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigate("MyWanderer")}>
        <Text style={styles.buttonText}>Fake Wanderer 2</Text>
      </TouchableOpacity>
      </ScrollView>
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
    color: 'black',
    marginVertical: 40,
    textAlign: 'center',
    fontSize: 30,
    width: 'auto'
  }, 
  button: {
    width: 'auto',
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "#84183B",
    alignItems: "stretch"
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    paddingVertical: 10
  }
});