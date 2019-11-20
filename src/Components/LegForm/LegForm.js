import React, { Component } from "react";
import DatePicker from 'react-native-datepicker';
import MapInputFirst from '../MapInput/MapInputFirst'
import MapInputSecond from '../MapInput/MapInputSecond'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";
import WandererFooter from '../WandererFooter/WandererFooter';
import WandererHeader from '../WandererHeader/WandererHeader';
import { postNewLeg, patchLeg, deleteLeg } from '../../util/apiCalls';

export default class LegForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startLocation: '',
      endLocation: '',
      startDate: '',
      endDate: '',
      tripId: this.props.navigation.getParam('tripId'),
      leg: this.props.navigation.getParam('leg') || null,
      error: '',
      userId: this.props.navigation.getParam('userId'),
    };
  }

  handlerFirstInput(arg) {
    this.setState({
      startLocation: arg
    });
    return;
  }

  handlerSecondInput(arg) {
    this.setState({
      endLocation: arg
    });
    return;
  }

  componentDidMount = () => {
    if (this.state.leg) {
      let { startDate, endDate, startLocation, endLocation } = this.state.leg
      this.setState({
        startLocation,
        startDate,
        endLocation,
        endDate
      })
    }
  }

  checkNewLegParams = () => {
    let { startLocation, startDate, endLocation, endDate } = this.state;

    if (
      startLocation === '' ||
      startDate === '' ||
      endLocation === '' ||
      endDate === ''
    ) {
      this.setState({ error: 'Please fill out dates and destinations'})
      return false;
    } else {
      this.setState({ error: ''});
      return true;
    }
  }

  handleNewLegSave = async () => {

    let updatedTripId;

    if(!this.props.navigation.getParam('leg')) {
      let formIsFilledCorrectly = this.checkNewLegParams();
      if (formIsFilledCorrectly) {
        updatedTripId = await this.createNewLeg();
        this.props.navigation.navigate('Trip', {tripId: updatedTripId})

      }
    } else {
      updatedTripId = await this.editLeg();
      this.props.navigation.navigate('Trip', {tripId: updatedTripId})

    }
  }


  createNewLeg = async () => {
    let {startLocation, endLocation, startDate, endDate, tripId} = this.state;
    let newLegInfo = {
      startLocation,
      endLocation,
      startDate,
      endDate,
      tripId
    }

    try {
      let updatedTripId = await postNewLeg(newLegInfo);
      return updatedTripId
    }
    catch (error) {
      this.setState({ error: 'There was an error creating your leg'})
    }
  }

  editLeg = async () => {
    let id = this.state.leg.id
    let {startLocation, endLocation, startDate, endDate, tripId} = this.state;

    let editedLegInfo = { 
      startLocation,
      endLocation,
      startDate,
      endDate,
      tripId,
      id
    }
    try {
      let editedTripId = await patchLeg(editedLegInfo)
      return editedTripId
    }
    catch (error) {
      this.setState({error: 'There was an error editing your leg'})
    }
  }

  removeLeg = async () => {
    try {
      await deleteLeg(this.state.leg.id);
      this.props.navigation.navigate('Trip')
    } catch (error) {
      this.setState({ error: 'There was an error deleting your leg'})
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

        <WandererHeader />
        <ScrollView>

          <View>
              {this.state.leg === null && <Text style={styles.title}>Add A New Leg</Text>}
              {this.state.leg && <Text style={styles.title}>Edit Leg</Text>}
          </View>
          <View>
      <Text style={styles.label}>Start Destination</Text>
          <MapInputFirst inputValue={this.state.startLocation} handlerFirstInput={this.handlerFirstInput.bind(this)} />
          <Text style={styles.label}>End Destination</Text>
          <MapInputSecond inputValue={this.state.endLocation} handlerSecondInput={this.handlerSecondInput.bind(this)} />
          </View>
          <Text style={styles.text}>Start Date</Text>
          <DatePicker
          style={{ width: 370, height: 65 }}
          date={this.state.startDate}
          mode="date"
          placeholder="Select Start Date"
          placeholderTextColor='white'
          format="MM-DD-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              left: 0,
              top: 4
            },
            dateInput: {
              marginLeft: 15,
              color: "black",
              backgroundColor: 'white',
              height: 60,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "white",
              marginVertical: -20
            },
            dateText: {
              fontSize: 22,
              color: "black",
            },
            placeholderText: {
              fontSize: 22,
              color: "black"
            }
          }}
          onDateChange={(date) => {this.setState({startDate: date})}}
        />
        <Text style={styles.text}>End Date</Text>
        <DatePicker
          style={{ width: 370, height: 65 }}
          date={this.state.endDate}
          mode="date"
          placeholder="Select End Date"
          placeholderTextColor='white'
          format="MM-DD-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              left: 0,
              top: 4
            },
            dateInput: {
              marginLeft: 15,
              color: "black",
              backgroundColor: 'white',
              height: 60,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "white",
            },
            dateText: {
              fontSize: 22,
              color: "black",
            },
            placeholderText: {
              fontSize: 22,
              color: "black"
            }
          }}
          onDateChange={(date) => {this.setState({endDate: date})}}
        />
          <TouchableOpacity onPress={this.handleNewLegSave}>
            <Text style={styles.button}>Save</Text>
          </TouchableOpacity>
          {this.props.navigation.getParam('leg') && 
          <TouchableOpacity onPress={this.removeLeg}>
          <Text style={styles.deleteButton}>Delete Leg</Text>
          </TouchableOpacity>
          }
    
      </ScrollView>
      <WandererFooter navigate={navigate} userId={this.state.userId} />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    paddingVertical: 25
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    color: "white",
    paddingVertical: 15
  },
  deleteButton: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    width: "auto",
    height: 60,
    margin: 20,
    padding: 10,
    fontSize: 30,
    color: "white",
    textAlign: "center",
    backgroundColor: "red"
  },
  form: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    height: 60,
    width: 350,
    color: 'black',
    padding: 10,
    marginLeft: 15,
    marginBottom: 10,
    position: 'absolute'
  },
  sideBySideContainer: {
    flex: 1,
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    width: "auto",
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "#1C4263"
  },
  label: {
    marginLeft: 20,
    fontSize: 20,
    color: "white",
    marginBottom: -22
  },
  error: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 15
  }
});
