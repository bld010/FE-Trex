import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity,
  Image 
} from 'react-native';
import WandererFooter from '../WandererFooter/WandererFooter';
import WandererHeader from '../WandererHeader/WandererHeader';
import { fetchFollowers, fetchWanderersIncomingNotifications } from '../../util/apiCalls';
import { withNavigationFocus } from 'react-navigation';
import wandererSpinner from '../../../assets/wanderer_spinner.gif';

export class MyFollowers extends Component {

    constructor(props) {
      super(props);
      this.state = {
        userId: this.props.navigation.getParam('userId'),
        messages: null,
        followers: [],
        error: ''
      }
    }

    generateFollowersElements = () => {
      let followersElements = this.state.followers.map(follower => {

        let incomingMessagesFromFollower = this.state.messages.filter(message => {
          return message.senderId == follower.id
        })

        let unreadMessagesFromFollower = incomingMessagesFromFollower.filter(message => {
          return message.unread === true
        })

        let { navigate } = this.props.navigation;
        return (
          <TouchableOpacity 
            key={this.state.userId+follower.name} 
            style={styles.followerButton} 
            onPress={() => navigate('Follower', {
              follower, 
              userId: this.state.userId,
              messages: incomingMessagesFromFollower
              })}>
            <Text style={styles.text}>
              {follower.name}
              {unreadMessagesFromFollower.length > 0 && <>  ({unreadMessagesFromFollower.length} unread)</>}
            </Text>
          </TouchableOpacity>
        )
      })

      return followersElements;
    }

    componentDidUpdate = async (prevProps) => {
      if (prevProps.isFocused !== this.props.isFocused) {
        this.componentDidMount();
      }
    }

    componentDidMount = async () => {
      try {
        let followers = await fetchFollowers(this.state.userId)
        let messages = await fetchWanderersIncomingNotifications(this.state.userId)
        this.setState({ followers, messages })
      } catch (error) {
        this.setState({ error: 'There was an error fetching your followers'})
      }
    }

    render = () => {

      let { navigate } = this.props.navigation

      return (
        <View style={styles.container}>
          <WandererHeader />
          <ScrollView>
            <Text style={styles.title}>My Followers</Text>
            {this.state.error === '' && this.state.followers.length == 0 &&
              <Image alt={'Loading...'} style={styles.loading} source={wandererSpinner} />
            }
            {this.state.followers.length === 0 && <Text style={styles.text}>Loading ...</Text>}
            {this.state.followers.length > 0 && this.state.messages !== null && this.generateFollowersElements()}
            {this.state.error !== '' && <Text style={styles.error}>{this.state.error}</Text>}
            <TouchableOpacity style={styles.addFollowerButton}>
              <Text style={styles.text} onPress={() => navigate('FollowerForm', {userId: this.state.userId})}>Add a New Follower</Text>
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
  addFollowerButton: {
    backgroundColor: '#1C4263',
    borderWidth: 1,
    borderColor: 'white', 
    color: 'white',
    borderRadius: 8,
    backgroundColor: '#1C4263',
    marginVertical: 30
  },
  followerButton: {
    backgroundColor: '#1C4263',
    borderWidth: 1,
    borderColor: 'white', 
    color: 'white',
    borderRadius: 8,
    backgroundColor: '#1C4263',
    marginVertical: 10,
    marginHorizontal: 20
  },
  error: {
    color: 'red',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20
  },
  loading: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
})

export default withNavigationFocus(MyFollowers)