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
        friends: []
      }
    }

    componentDidMount = async () => {
      console.log('component did mount in My followers')
      try {
        let followers = await fetchFollowers(1)

        //pass in actual userID here for wanderer
      } catch (error) {
        console.log(error.message)
      }
    }

    render = () => {

      let { navigate } = this.props.navigation

      return (
        <View style={styles.container}>
          <WandererHeader />
          <ScrollView>
            <Text style={styles.title}>My Followers</Text>
            {/* <View>
              {this.followerElements.length > 0 && this.followerElements}
            </View> */}
            <TouchableOpacity style={styles.addFollowerButton}>
              <Text style={styles.text} onPress={() => navigate('FollowerForm')}>Add a New Follower</Text>
            </TouchableOpacity>
          </ScrollView>
          <WandererFooter navigate={navigate} />
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
    backgroundColor: '#1C4263'
  }
})
