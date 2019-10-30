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
import MessageMap from '../MessageMap/MessageMap';

export default class MyWanderer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wanderer: this.props.navigation.getParam('wanderer'),
      userId: this.props.navigation.getParam('userId'),
      messages: this.props.navigation.getParam('messages') || []
    }
  }

  generateUnreadMessagesElements = () => {

    let unreadMessages = this.state.messages.filter(message => message.unread === true)
  
    // let unreadMessagesWithCoordinates = this.state.messages.filter(message => message.longitude !== 0 )

    let unreadMessagesElements = unreadMessages.map((message, index) => {
      if (message.longitude) {
        console.log(message)
        return(
          <View key={this.state.userId + index} style={styles.sideBySide}>
            <Text style={styles.message}>{message.message}</Text>
            <MessageMap longitude={message.longitude} latitude={message.latitude} />
          </View>
        )
      }
    })

    return unreadMessagesElements;
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <FollowerHeader />
        <ScrollView>
          <Text style={styles.text}>{this.state.wanderer.name}</Text>

          
          <Text style={styles.text}>Unread Messages</Text>
          {this.generateUnreadMessagesElements()}

          {/* conditionally render unread messages here */}

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
        <FollowerFooter navigate={navigate} userId={this.state.userId} />
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