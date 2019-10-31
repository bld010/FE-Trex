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
  Keyboard,
  Image
} from "react-native";

import followerSpinner from '../../../assets/follower_spinner.gif';
import MessageMap from '../MessageMap/MessageMap';

export default class MessageHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      messages: this.props.navigation.getParam('messages'),
      wanderer: this.props.navigation.getParam('wanderer')
    }
  }

  generateMessagesElements = () => {
    console.log('wtf')

    let readMessages = this.state.messages.filter(message => message.unread === false)
  
    //if the messages have coordinates, they are from a user acting as a Wanderer
    let readMessagesWithCoordinates = readMessages.filter(message => message.longitude )

    let readMessagesElements = readMessagesWithCoordinates.map((message, index) => {
      if (message.longitude) {

        return(
          <View key={index} style={styles.messageContainer}>
            <Text sytle={styles.date}>{message.createdAt}</Text>
            <Text style={styles.message}>{message.message}</Text>
            <MessageMap 
              longitude={message.longitude} 
              latitude={message.latitude} 
              wandererName={this.state.wanderer.name} 
              createdAt={message.createdAt}/>
          </View>
        )
      }
    })

    return readMessagesElements;
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <FollowerHeader />
        <ScrollView>

        {this.state.error === '' && this.state.messages.length === 0 &&
        <Image alt={'Loading...'} style={styles.loading} source={followerSpinner} />
      }
        {this.state.messages.length > 0 && this.generateMessagesElements()}
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
    fontSize: 20,
    color: "white",
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#84183B',
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
    marginTop: 20,
    fontSize: 30,
    padding: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "#84183B"
  },
  messageHistoryButton: {
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
  messageContainer: {
    display: 'flex',
    flex: 1,
    width: 400,
    height: 'auto',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#84183B',
    borderRadius: 8,
    padding: 20,
    alignSelf: 'center'
  },
  message: {
    textAlign: 'left',
    fontSize: 20,
    margin: 10
  },
  date: {
    fontSize: 10,
    color: 'grey',
    textAlign: 'right'
  },
  headerText: {
    fontSize: 24,
    color: '#84183b',
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 20
  }
});