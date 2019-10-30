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
import {  } from '../../util/apiCalls';

export default class Follower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.navigation.getParam('messages'),
      follower: this.props.navigation.getParam('follower'),
      userId: this.props.navigation.getParam('userId')
    }
  }

  generateUnreadMessagesElements = () => {
    let unreadMessages = this.state.messages.filter(message => {
      return message.unread === true
    })


  }

  generateReadMessagesElements = () => {
    let readMessages = this.state.messages.filter(message => {
      return message.unread === false
    })

    
  }

  render = () => {
    
    let { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <WandererHeader />
        <ScrollView>
          {this.messages.length === 0 && <Text style={styles.text}>No Messages Found</Text>}
          <Text style={styles.text}>{this.state.messages[0].message}</Text>
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
  error: {
    color: 'red',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20
  }
})