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
import { postNewTrip, patchTrip, deleteTrip } from '../../util/apiCalls';
import { withNavigationFocus } from 'react-navigation';

class TripForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      startDate: '',
      endDate: '',
      userId: this.props.navigation.getParam('userId'),
      trip: this.props.navigation.getParam('trip') || null,
      error: ''
    };
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.setState({
        trip: this.props.navigation.getParam('trip')
      });
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
  };

  checkNewTripParams = () => {
    let { name, startDate, endDate } = this.state;

    if (
      name === '' ||
      startDate === '' ||
      endDate === ''
    ) {
      this.setState({ error: 'Please fill out all fields'})
      return false;
    } else {
      this.setState({ error: ''});
      return true;
    }
  }

  handleSave = async () => {
    if (!this.props.navigation.getParam('trip')) {
    
      let formIsFilledCorrectly = this.checkNewTripParams();

      if (formIsFilledCorrectly) {
        this.createNewTrip();
      }

    } else {
      this.editTrip();
    }
  };

  createNewTrip = async () => {
    let { name, startDate, endDate, userId } = this.state;

    let newTripInfo = {
      name,
      startDate,
      endDate,
      userId
    };

    try {
      let newTrip = await postNewTrip(newTripInfo);
      this.props.navigation.navigate('Trip', {
        trip: newTrip,
        userId: this.state.userId
      });
    } catch (error) {
      this.setState({ error: 'There was an error creating your trip' });
    }
  };

  editTrip = async () => {
    let { name, startDate, endDate, trip } = this.state;

    let editedTripInfo = {
      name,
      startDate,
      endDate,
      id: trip.id
    };

    try {
      let editedTrip = await patchTrip(editedTripInfo);
      this.props.navigation.navigate('Trip', {
        trip: editedTrip,
        userId: this.state.userId
      });
    } catch (error) {
      this.setState({ error: 'There was an error editing your trip' });
    }
  };

  removeTrip = async () => {
    try {
      let deletedTrip = await deleteTrip(this.state.trip.id);
      this.props.navigation.navigate('MyTrips');
    } catch (error) {
      this.setState({ error: 'There was an error deleting your trip' });
    }
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <WandererHeader />

        <ScrollView>
          <View>
            {this.state.trip === null && (
              <Text style={styles.title}>Add A New Trip</Text>
            )}
            {this.state.trip && <Text style={styles.title}>Edit Trip</Text>}
          </View>

          <Text style={styles.label}>Trip Name</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder={
                (this.state.trip && this.state.name) || 'Enter Trip Name'
              }
              placeholderTextColor='black'
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
              onBlur={Keyboard.dismiss}
            />
          </View>
          <Text style={styles.text}>Start Date</Text>
          <DatePicker
            style={{ width: 370, height: 65 }}
            date={this.state.startDate}
            mode='date'
            placeholder='Select Start Date'
            placeholderTextColor='white'
            format='MM-DD-YYYY'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateIcon: {
                left: 0,
                top: 4
              },
              dateInput: {
                marginLeft: 15,
                color: "black",
                backgroundColor: 'white',
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "white",
              },
              dateText: {
                fontSize: 20,
                color: "black"
              },
              placeholderText: {
                fontSize: 20,
                color: "black"
              }
            }}
            onDateChange={date => {
              this.setState({ startDate: date });
            }}
          />
          <Text style={styles.text}>End Date</Text>
          <DatePicker
            style={{ width: 370, height: 65 }}
            date={this.state.endDate}
            mode='date'
            placeholder='Select End Date'
            placeholderTextColor='white'
            format='MM-DD-YYYY'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateIcon: {
                left: 0,
                top: 4
              },
              dateInput: {
                marginLeft: 15,
                color: "black",
                backgroundColor: 'white',
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "white",
              },
              dateText: {
                fontSize: 20,
                color: "black"
              },
              placeholderText: {
                fontSize: 20,
                color: "black"
              }
            }}
            onDateChange={date => {
              this.setState({ endDate: date });
            }}
          />

          <View style={styles.sideBySideContainer}>
            <TouchableOpacity
              style={styles.sideBySideButton}
              onPress={() => navigate('MyTrips')}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sideBySideButton} onPress={this.handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>

          {this.props.navigation.getParam('trip') && (
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={this.removeTrip}
            >
              <Text style={styles.buttonText}>Delete Trip</Text>
            </TouchableOpacity>
          )}

          {this.state.error !== '' && (
            <Text style={styles.buttonText}>{this.state.error}</Text>
          )}
        </ScrollView>
        <WandererFooter navigate={navigate} userId={this.state.userId} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    paddingVertical: 25
  },
  deleteButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    borderStyle: "solid",
    width: "auto",
    height: 60,
    margin: 20,
    padding: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "red"
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    flex: 1,
    alignItems: 'center',
    marginLeft: 10
  },
  form: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    height: 40,
    width: 350,
    color: 'white',
    padding: 10,
    marginLeft: 15,
    marginBottom: 22
  },
  text: {
    marginLeft: 20,
    fontSize: 26,
    color: 'white',
    marginBottom: 5
  },
  label: {
    marginLeft: 20,
    fontSize: 26,
    color: 'white',
    marginBottom: 5
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
  },
  buttonText: {
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 4,
    fontWeight: '600'
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
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
    width: 160,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    borderStyle: 'solid',
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#1C4263',
    alignItems: 'stretch',
    flex: 1
  }
});

export default withNavigationFocus(TripForm);

