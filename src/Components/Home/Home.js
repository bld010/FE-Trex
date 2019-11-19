import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform
} from "react-native";

import WandererHeader from "../WandererHeader/WandererHeader";
import WandererFooter from "../WandererFooter/WandererFooter";

export default class Home extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        wanderer_userId: 1,
        follower_userId: 2
      }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <WandererHeader />
        <ScrollView>
          <Text style={styles.title}>Welcome to Trex</Text>
            <Text style={styles.text}>I am a ...</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigate('WandererDashboard', {userId: this.state.wanderer_userId})}>
              <Text style={styles.buttonText}>Wanderer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.followerButton} onPress={() => navigate('FollowerDashboard', {userId: this.state.follower_userId})}>
              <Text style={styles.buttonText}>Follower</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  text: {
    color: "white",
    marginVertical: 40,
    textAlign: "center",
    fontSize: 30
  },
  title: {
    color: "white",
    marginVertical: 40,
    textAlign: "center",
    fontSize: 45
  },
  button: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    width: "auto",
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "#1C4263"
  },
  followerButton: {
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
    backgroundColor: "#84183B",
    alignItems: "stretch"
  },
  buttonText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    paddingVertical: 4,
    fontWeight: '600'
  }
});
