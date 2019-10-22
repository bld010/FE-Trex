import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TextInput,
  TouchableOpacity 
} from 'react-native';

export default class TripForm extends Component {
  constructor() {
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
    return (
        <ScrollView>
          <View>
            <Text style={styles.header}>Add A New Trip</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Trip Name"
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Departure Date"
              onChangeText={(departureDate) => this.setState({departureDate})}
              value={this.state.departureDate}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Return Date"
              onChangeText={(returnDate) => this.setState({returnDate})}
              value={this.state.returnDate}
            />    
          </View>
          <View style={styles.header}>
            <TouchableOpacity>
              <Text style={styles.button}>Add A Leg + </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity>
               <Text style={styles.footerText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerText}>Save</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  form: {
    height: 60,
    backgroundColor: '#ffffff',
  },
  input: {
    height: 40,
    backgroundColor: '#ffffff',
  },
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
