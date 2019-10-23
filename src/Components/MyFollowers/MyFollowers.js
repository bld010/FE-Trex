import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export function MyFollowers(props) {

    const {navigate} = props.navigation;


    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <Text style={styles.title}>My Followers</Text>
          {/* <View>
            {this.followerElements.length > 0 && this.followerElements}
          </View> */}
          <TouchableOpacity style={styles.addFollowerButton}>
            <Text style={styles.text} onPress={() => navigate('FollowerForm')}>Add a New Follower</Text>
          </TouchableOpacity>
        </ScrollView>
        <Footer navigate={navigate} />
    </View>
    )
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
