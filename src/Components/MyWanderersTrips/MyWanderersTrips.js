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

export default class MyWanderersTrips extends Component {
  constructor() {
    super() 
    this.state = {
      trips: 
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}> 
        <FollowerHeader />
        <ScrollView>
        <Text>Wanderer trip info</Text>
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
  text: {
    color: 'white',
    marginVertical: 40,
    textAlign: 'center',
    fontSize: 30,
    width: 'auto'
  }, 
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    width: 'auto',
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#84183B',
    alignItems: 'stretch'
  }
});