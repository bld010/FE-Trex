import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default class FollowerForm extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      departureDate: '',
      returnDate: ''
    }
  }

  
  
  //conditional rendering
  //if (trip has a leg)
  //Text - Leg Name
  //button - leg name
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

      <Header />

        <ScrollView>

          <View>
            <Text style={styles.title}>Add A New Follower</Text>
          </View>

        </ScrollView>        
        <Footer navigate={navigate} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    paddingVertical: 10
  },
  input: {
    borderRadius: 8,
  },
  form: {
    height: 40,
    width: 350,
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  }, 
});