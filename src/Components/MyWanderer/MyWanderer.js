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

export default class MyWanderer extends Component {
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
          <Text style={styles.text}>My Wanderer</Text>
          <View style={styles.sideBySideContainer}>
          <TouchableOpacity style={styles.sideBySideButton}>
            <Text style={styles.buttonText} onPress={() => navigate('DefaultFollowerMessages')}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideBySideButton}>
            <Text style={styles.buttonText} onPress={() => navigate('MyWandererTrips')}>Trips</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigate('FollowerMessageHistory')}>
            <Text style={styles.buttonText}>Message History</Text>
          </TouchableOpacity>
        </ScrollView>
        <FollowerFooter navigate={navigate}/>
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
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "black",
    paddingVertical: 25
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    color: "black",
    paddingVertical: 15,
    textAlign: 'center'
  },
  sideBySideContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    paddingVertical: 10
  },
  sideBySideButton: {
    width: 170,
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
    backgroundColor: "#84183B"
  },
  error: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 15
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    paddingVertical: 10
  },
});