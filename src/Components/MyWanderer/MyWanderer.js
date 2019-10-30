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
import { fetchWanderersIncomingNotifications, markMessageRead } from '../../util/apiCalls';

export default class MyWanderer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wanderer: this.props.navigation.getParam('wanderer'),
      userId: this.props.navigation.getParam('userId'),
      messages: this.props.navigation.getParam('messages') || []
    }
  }

  markMessageAsRead = async (message_id) => {
    try {
      let updatedMessage = await markMessageRead(message_id)
      this.setState({ error: '' });
      this.reQueryMessages();
    } catch (error) {
      this.setState({ error: 'There was an error marking the message as read'})
    }
  }

  reQueryMessages = async () => {
    try {
      let messages = await fetchWanderersIncomingNotifications(this.state.userId);
      this.setState({ messages });
    } catch (error) {
      this.setState({ error: 'There was an error updating your messages'})
    }
    
  }   

  generateUnreadMessagesElements = () => {

    let unreadMessages = this.state.messages.filter(message => message.unread === true)
  
    //if the messages have coordinates, they are from a user acting as a Wanderer
    let unreadMessagesWithCoordinates = unreadMessages.filter(message => message.longitude )

    let unreadMessagesElements = unreadMessagesWithCoordinates.map((message, index) => {
      if (message.longitude) {

        return(
          <View key={this.state.userId + index} style={styles.messageContainer}>
            <Text sytle={styles.date}>{message.createdAt}</Text>
            <Text style={styles.message}>{message.message}</Text>
            <MessageMap 
              longitude={message.longitude} 
              latitude={message.latitude} 
              wandererName={this.state.wanderer.name} 
              createdAt={message.createdAt}/>
              <TouchableOpacity 
                onPress={() => this.markMessageAsRead(message.id)}
                style={styles.button}>
                <Text style={styles.text}>Mark as Read</Text>
              </TouchableOpacity>
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
          <Text style={styles.headerText}>{this.state.wanderer.name}</Text>

          
          <Text style={styles.text}>Unread Messages</Text>


          {this.generateUnreadMessagesElements()}


          {/* fire update of list on FollowerDashboard? */}

          <View style={styles.sideBySideContainer}>
          <TouchableOpacity style={styles.sideBySideButton}>
            <Text style={styles.buttonText} onPress={() => navigate('DefaultFollowerMessages')}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideBySideButton}>
            <Text style={styles.buttonText} onPress={() => navigate('MyWandererTrips')}>Trips</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.messageHistoryButton} onPress={() => navigate('FollowerMessageHistory')}>
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