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

export default class TripForm extends Component {
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
            <Text style={styles.title}>Add A New Trip</Text>
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder='Trip Name'
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder='Departure Date'
              onChangeText={(departureDate) => this.setState({departureDate})}
              value={this.state.departureDate}
              keyboardType='phone-pad'

            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder='Return Date'
              onChangeText={(returnDate) => this.setState({returnDate})}
              value={this.state.returnDate}
              keyboardType='phone-pad'
            />    
          </View>

          <View style={styles.container}>
            <TouchableOpacity>
              <Text style={styles.addLegButton}>Add A Leg + </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity>
               <Text style={styles.button}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.button}>Save</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>        
        <Footer navigate={navigate} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  form: {
    height: 40,
    width: 350,
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  }, 
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    paddingVertical: 10
  },
  text: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    width: 200,
    height: 'auto',
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#1C4263'
  },

  saveTripButton: {
    backgroundColor: '#1C4263',
    borderWidth: 1,
    borderColor: 'white', 
    color: 'white',
    borderRadius: 8
  }, 
  addLegButton: {
    backgroundColor: '#1C4263',
    borderWidth: 1,
    borderColor: 'white', 
    color: 'white',
    borderRadius: 8
  }
});

