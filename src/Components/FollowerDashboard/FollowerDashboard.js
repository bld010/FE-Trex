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
  Keyboard,
  Image
} from "react-native";

import followerSpinner from '../../../assets/follower_spinner.gif'

export default class FollowerDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.userId,
      error: '',
      wanderers: []
    }
  }

  componentDidMount = async () => {
    try {
      // fetch wanderers
      // fetch messages, filter by unread and display count within wanderer element
    } catch (error) {
      this.setState({ error: 'There was an error loading your wanderers'})

      //Render error when not empty string
      // Reset error when fetch is successful
    }
  } 

  //generate Wanderer elements -- send messages from them to the MyWanderer component

  // filter messages?

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
      {this.state.error === '' && this.state.wanderers.length == 0 &&
        <Image alt={'Loading...'} style={styles.loading} source={followerSpinner} />
      }
      
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
  },
  loading: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
});