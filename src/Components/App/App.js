import React, { Component } from 'react';
import MyTrips from '../MyTrips/MyTrips';
import Trip from '../Trip/Trip';
import TripForm from '../TripForm/TripForm'
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  ScrollView,
  TouchableOpacity 
} from 'react-native';

export default class App extends Component {

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.header}>Ariva</Text>
        <ScrollView>
          {/* <Text style={styles.text}>Welcome to Ariva</Text>
          <Text style={styles.text}>I am a ...</Text>
          <TouchableOpacity>
            <Text style={styles.button}>Wanderer</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>Follower</Text>
          </TouchableOpacity> */}
          <TripForm/>
        </ScrollView>
  
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerText}>Trips</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>Safety</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>Followers</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
    
  }, 
  text: {
    color: 'white',
    marginVertical: 40,
    textAlign: 'center',
    fontSize: 30,
    width: 'auto'
  },
  header: {
    backgroundColor: '#1C4263',
    color: 'white',
    paddingTop: 60,
    paddingLeft: 10,
    // height: 'auto',,
    textAlign: 'center',
    top: 0,
    fontSize: 50,
  }, 
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    width: 'auto',
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#1C4263'
  },
  footer: {
    backgroundColor: '#1C4263',
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'space-around'
  }, 
  footerText: {
    color: 'white',
    marginBottom: 20,
    fontSize: 20
  }
});
