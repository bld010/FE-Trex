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
import WandererFooter from '../WandererFooter/WandererFooter';
import WandererHeader from '../WandererHeader/WandererHeader';
import { postNewTrip, patchTrip } from '../../util/apiCalls';

export default class TripForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      startDate: '',
      endDate: '', 
      userId: this.props.navigation.getParam('userId'),
      trip: this.props.navigation.getParam('trip') || null,
      error: ''
    }
  }

  componentDidMount = () => {
    if (this.state.trip) {

      let { name, startDate, endDate } = this.state.trip
      this.setState({
        name,
        startDate,
        endDate
      })
    }
  }

  handleNewTripSave = async () => {

    if (!this.props.navigation.getParam('trip')) {
      this.createNewTrip();
    } else {
      this.editTrip()
    }

  }

  createNewTrip = async () => {

    let { name, startDate, endDate, userId } = this.state;

    let newTripInfo = {
      name,
      startDate,
      endDate,
      userId
    }

    try {
      let newTrip = await postNewTrip(newTripInfo);
      this.props.navigation.navigate('Trip', {trip: newTrip, userId: this.state.userId})
    } 
    catch (error) {
      this.setState({ error: 'There was an error creating your trip'})
    }
  }
  
  editTrip = async () => {

    let { name, startDate, endDate, trip } = this.state;

    let editedTripInfo = {
      name,
      startDate,
      endDate,
      id: trip.id
    }

    try {
      let editedTrip = await patchTrip(editedTripInfo);
      this.props.navigation.navigate('Trip', {trip: editedTrip, userId: this.state.userId})
    }
    catch (error) {
      this.setState({ error: 'There was an error editing your trip'})
    }
  }

  
  render() {
    const {navigate} = this.props.navigation;


    return (
      <View style={styles.container}>

      <WandererHeader />

        <ScrollView>

          <View>
            {this.state.trip === null && <Text style={styles.title}>Add A New Trip</Text>}
            {this.state.trip && <Text style={styles.title}>Edit Trip</Text>}
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder={this.state.trip && this.state.name || 'Trip Name'}
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

          

          <View style={styles.sideBySideContainer}>
            <TouchableOpacity style={styles.sideBySideButton} onPress={() => navigate('MyTrips')}>
               <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBySideButton} onPress={this.handleNewTripSave}>
              <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
          </View>

          {this.state.error !== '' && <Text style={styles.text}>{this.state.error}</Text>}

        </ScrollView>        
        <WandererFooter navigate={navigate} />
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

