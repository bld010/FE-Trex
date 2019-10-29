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
import { fetchFollowers } from '../../util/apiCalls';

export class MyFollowers extends Component {

    constructor(props) {
      super(props);
      this.state = {
        userId: this.props.navigation.getParam('userId'),
        followers: [],
        error: ''
      }
    }

    generateFollowersElements = () => {
      let followersElements = this.state.followers.map(follower => {

        let { navigate } = this.props.navigation;

        return (
          <TouchableOpacity style={styles.followerButton} onPress={() => navigate('Follower', {follower, userId: this.state.userId})}>
            <Text style={styles.text}>{follower.name}</Text>
          </TouchableOpacity>
        )
      })

      return followersElements;
    }

    componentDidMount = async () => {
      try {
        let followers = await fetchFollowers(this.state.userId)
        this.setState({ followers })
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
            
            {this.state.followers.length > 0 && this.generateFollowersElements()}
            
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
  }
})
