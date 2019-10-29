import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import MapInputFirst from '../MapInput/MapInputFirst'
import MapInputSecond from '../MapInput/MapInputSecond'
import WandererHeader from '../WandererHeader/WandererHeader';
import WandererFooter from '../WandererFooter/WandererFooter';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  TextInput
} from 'react-native';

export default class AddTransportInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTrans: '',
      endTrans: '',
      dateTrans: '',
      error: '',
      leg: '',
      legId: this.props.navigation.getParam('legId'),
      transportId: this.props.navigation.getParam('transportId') || null,
    };
  }


  handlerFirstInput(arg) {
    this.setState({
      startTrans: arg
    });
    return;
  }

  handlerSecondInput(arg) {
    this.setState({
      endTrans: arg
    });
    return;
    }


  checkTransportParams = () => {
    let { 
      startTrans,
      endTrans,
      dateTrans
    } = this.state;

    if (
      startTrans === '' ||
      endTrans === '' ||
      dateTrans === '' 
    ) {
      this.setState({ error: 'Please fill out all fields'})
      return false;
    } else {
      this.setState({ error: ''});
      return true;
    }
  }

  handleSave = async () => {

    let updatedTransportId

    if (!this.props.navigation.getParam('transportId')) {
    let formIsFilledCorrectly = this.checkTransportParams();
    if (formIsFilledCorrectly) {
      updatedTransportId = await this.createNewTransport()
      this.props.navigation('Transportation', {transportId: updatedTransportId})

      }
    } else {
      updatedTripId = await this.editTransportation()
      this.props.navigation.navigate('Transporation', {transportId: updatedTransportId})

    }
  }

  createNewTransport = async () => {
    let {}
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



  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <WandererHeader />
        <ScrollView>
          <View>
            <Text style={styles.title}>Add Transportation</Text>
          </View>
            <Text style={styles.label}>Start Destination</Text>
            <MapInputFirst handlerFirstInput={this.handlerFirstInput.bind(this)} />
            <Text style={styles.label}>End Destination</Text>
            <MapInputSecond handlerSecondInput={this.handlerSecondInput.bind(this)} />
            <Text style={styles.text}>Travel Date</Text>
            <DatePicker
              style={{ width: 370, height: 65 }}
              date={this.state.dateTrans}
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
              onDateChange={date => {
                this.setState({ dateTrans: date });
              }}
            />

            {this.state.error !== '' && 
              <Text style={styles.error}>{this.state.error}</Text>
            }

            <TouchableOpacity onPress={this.handleSave}>
              <Text style={styles.button}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
        <WandererFooter navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    marginTop: 15
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    paddingVertical: 25
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    color: 'white',
    paddingVertical: 15
  },
  input: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 18,
    flex: 1,
    alignItems: 'center',
    marginLeft: 10
  },
  form: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    height: 60,
    width: 350,
    color: 'white',
    padding: 10,
    marginLeft: 15,
    marginBottom: 20
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20
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
  label: {
    marginLeft: 20,
    fontSize: 20,
    color: 'white',
    marginBottom: -22
  },
  error: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 15
  }
});
