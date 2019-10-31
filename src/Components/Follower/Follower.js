import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import WandererFooter from '../WandererFooter/WandererFooter';
import WandererHeader from '../WandererHeader/WandererHeader';
import { markMessageRead, sendWandererMessage, fetchWanderersIncomingNotifications  } from '../../util/apiCalls';

export default class Follower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.navigation.getParam('messages') || [],
      follower: this.props.navigation.getParam('follower'),
      userId: this.props.navigation.getParam('userId'),
      unreadMessages: null,
      readMessages: null,
      latitude: null,
      longitude: null,
      error: ''
    }
  }

  sendNewMessage = async () => {

    let message = {
      senderId: this.state.userId,
      receiverId: parseInt(this.state.follower.id),
      message: `I\'m checking in.`,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }

    try {
      let sentMessage = await sendWandererMessage(message)
      this.setState({ error: '' })
      this.reQueryAllMessages();
    } catch (error) {
      this.setState({ error: 'There was an error sending your message'})
    }

  }

  markIncomingMessageAsRead = async (incoming_message_id) => {
    try {
      let updatedMessage = await markMessageRead(incoming_message_id)
      this.setState({ error: '' })
    } catch (error) {
      this.setState({ error: 'There was an error marking the message as read'})
    }
  }

  handleReply = async (incoming_message_id) => {
    this.markIncomingMessageAsRead(incoming_message_id)
    this.sendNewMessage()
  }

  generateUnreadMessagesElements = () => {
    let unreadMessagesElements = this.state.unreadMessages.map((message, index) => {
      return(
        <View key={this.state.userId + index} style={styles.sideBySide}>
          <Text style={styles.message}>{message.message}</Text>
          <TouchableOpacity 
            onPress={() => this.handleReply(message.id)}
            style={styles.respondButton}>
            <Text style={styles.respondButtonText}>Check In</Text>
          </TouchableOpacity>
        </View>
      )
    })

    return unreadMessagesElements;
  }

  generateReadMessagesElements = () => {
    let readMessagesElements = this.state.readMessages.map((message, index) => {
      return(
        <View key={this.state.userId + index} style={styles.sideBySide}>
          <Text style={styles.message}>{message.message}</Text>
        </View>
      )
    })

    return readMessagesElements;
  }

  filterMessages = () => {
    let unreadMessages = this.state.messages.filter(message => {
      return message.unread === true
    })
    
    let readMessages = this.state.messages.filter(message => {
      return message.unread === false
    })

    this.setState({ unreadMessages, readMessages })
  }
  
  getPosition = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ 
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude });
        },
        error => console.log(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }
      
  reQueryAllMessages = async () => {
    let messages = await fetchWanderersIncomingNotifications(this.state.userId);
    this.setState({ messages });
    this.filterMessages();
  }    
      

  componentDidMount = () => {
    this.filterMessages();
    this.getPosition();
  }

  render = () => {
    
    let { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <WandererHeader />
        <ScrollView>
          <Text style={styles.followerName}>{this.state.follower.name}</Text>
          {!this.state.messages.length && <Text style={styles.text}>No Messages Found</Text>}

          {this.state.messages.length !== 0 && 
            <>
              {this.state.unreadMessages !== null && 
                <View>
                  <Text style={styles.text}>Unread Messages</Text>
                  
                  {this.generateUnreadMessagesElements()}
                </View>
              }

              {this.state.readMessages !== null && this.state.readMessages.length !== 0 &&
                <View>
                  <Text style={styles.text}>Past Messages</Text>
                  {this.generateReadMessagesElements()}
                </View>
              }
            </>
          }
          {this.state.error !== '' && <Text style={styles.errorText}>{this.state.error}</Text>}
          <TouchableOpacity 
            onPress={this.sendNewMessage}
            style={styles.button}>
            <Text style={styles.text}>Send Check-In</Text>
          </TouchableOpacity>
        </ScrollView>
        <WandererFooter navigate={navigate} userId={this.state.userId}/>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  }, 
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
    
  }, 
  text: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    paddingVertical: 10
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 24
  }, 
  sideBySide: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  respondButton: {
    color: 'white',
    backgroundColor: '#1C4263',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    width: 70,
    height: 50,
    textAlignVertical: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  message: {
    fontSize: 18,
    width: 220,
    color: 'white',
    textAlign: 'left',
  }, 
  respondButtonText: {
    fontSize: 15,
    color: 'white',
    margin: 'auto'
  },
  followerName: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    margin: 20
  },
  button: {
    height: 50,
    color: 'white',
    backgroundColor: '#1C4263',
    margin: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8
  }
})