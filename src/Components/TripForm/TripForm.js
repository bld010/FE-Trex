import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard 
} from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default class TripForm extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      startDate: '',
      endDate: '', 
      user: this.props.navigation.getParam('user')
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
              onBlur={Keyboard.dismiss}
            />
          </View>
          <DatePicker
          style={{width: 200}}
          date={this.state.startDate} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({startDate: date})}}
        />
          <DatePicker
          style={{width: 200}}
          date={this.state.endDate} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({endDate: date})}}
        />

          <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <Text onPress={() => navigate('LegForm')} style={styles.text}>Add A Leg + </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sideBySideContainer}>
            <TouchableOpacity style={styles.sideBySideButton}>
               <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBySideButton}>
              <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
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
  sideBySideContainer: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-around'
    // justifyContent: 'flex-start'
  },
  button: {
    borderColor: '#768DA1',
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
    backgroundColor: '#1C4263',
    alignItems: 'stretch'
  },
  sideBySideButton: {
    width: 170,
    borderColor: '#768DA1',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#1C4263',
    alignItems: 'stretch'
  }
});

