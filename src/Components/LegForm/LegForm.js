import React, { Component } from "react";
import DatePicker from 'react-native-datepicker';
import MapInput from '../MapInput/MapInput'
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
      loc: ''
    };
  }

  handler(arg) {
    this.setState({
      loc: arg
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

  handleNewLegSave = async () => {
    if(!this.props.navigation.getParam('leg')) {
      this.createNewLeg()
    } else {
      this.editLeg()
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
      let newLeg = await postNewLeg(newLegInfo);
      this.props.navigation.navigate('Trip', {tripId})
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
      let editedLeg = await patchLeg(editedLegInfo)
      this.props.navigation.navigate('Trip', {tripId})
    }
    catch (error) {
      this.setState({error: 'There was an error editing your leg'})
    }
  }


  removeLeg = async () => {
    try {
      let deletedLeg = await deleteLeg(this.state.leg.id);
      this.props.navigation.navigate('Trip', {tripId: this.state.tripId});
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
      {/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Start Destination"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.startLocation}
            onChangeText={startLocation => this.setState({ startLocation })}
          /> */}
          <MapInput handler={this.handler.bind(this)} />
          <TextInput
            style={styles.textInput}
            placeholder="End Destination"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.endLocation}
            onChangeText={endLocation => this.setState({ endLocation })}
          />
          <Text>Start Date:</Text>
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
          date={this.state.endDate}
          mode="date" 
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
          <TouchableOpacity>
            <Text style={styles.button} onPress={() => navigate('AddTransportInfo')}>Add Transportation</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button} onPress={() => navigate('AddLodgingInfo')}>Add Lodging</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleNewLegSave}>
            <Text style={styles.button}>Save</Text>
          </TouchableOpacity>
          {this.props.navigation.getParam('leg') && 
          <TouchableOpacity style={styles.deleteButton} onPress={this.removeLeg}>
          <Text styles={styles.text}>Delete Leg</Text>
          </TouchableOpacity>
          }


      </ScrollView>
       
      <WandererFooter navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    marginTop: 15
  }, 
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    paddingVertical: 10,
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
    color: "white",
    textAlign: "center",
    backgroundColor: "red"
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20
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
  }
});
