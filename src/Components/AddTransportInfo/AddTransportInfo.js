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
import { postNewTransport, deleteTransport, patchTransport } from '../../util/apiCalls'

export default class AddTransportInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: '',
      arrivalTime: '',
      departureTime: '',
      arrivalCity: '',
      departureCity: '',
      legId: this.props.navigation.getParam('legId'),
      leg: this.props.navigation.getParam('leg'),
      transportId: this.props.navigation.getParam('transportId') || null,
      transport: this.props.navigation.getParam('transport'),
      userId: this.props.navigation.getParam('userId')
    };
  }

  componentDidMount = () => {
    if (this.state.transport) { 
      let  {mode, arrivalTime, departureTime, arrivalCity, departureCity,} = this.state.transport
      this.setState({
        mode,
        arrivalTime,
        departureTime,
        arrivalCity,
        departureCity,
      })
    }
  }

  handlerFirstInput(arg) {
    this.setState({
      departureCity: arg
    });
    return;
  }

  handlerSecondInput(arg) {
    this.setState({
      arrivalCity: arg
    });
    return;
    }


  checkTransportParams = () => {
    let { 
      mode,
      departureCity,
      arrivalCity,
      departureTime,
      arrivalTime
    } = this.state;

    if (
      mode === '' || 
      departureCity === '' ||
      arrivalCity === '' ||
      departureTime === '' ||
      arrivalTime === ''
    ) {
      this.setState({ error: 'Please fill out all fields'})
      return false;
    } else {
      this.setState({ error: ''});
      return true;
    }
  }

  handleSave = async () => {  

    let updatedLegId

    if (!this.props.navigation.getParam('transportId')) {
      let formIsFilledCorrectly = this.checkTransportParams();
      if (formIsFilledCorrectly) {
        updatedLegId = await this.createNewTransportation()
        this.props.navigation.navigate('Transportation')
    
      }
    } else {
      updatedLegId = await this.editTransportation()
      this.props.navigation.navigate('Transportation')
    }
  }

  createNewTransportation = async () => {
    let { mode, arrivalTime, departureTime, arrivalCity, departureCity, legId} = this.state
    let newTransportInfo = {
      mode,
      arrivalTime,
      departureTime,
      arrivalCity,
      departureCity,
      legId
    }

    try {
      let updatedTransportId = await postNewTransport(newTransportInfo)
      return updatedTransportId
    } 
    catch (error) {
      this.setState({error: 'There was an error creating your transporation'})
    }
  }

  editTransportation = async () => {
    let { mode, arrivalTime, departureTime, arrivalCity, departureCity, legId, transportId } = this.state;

    let editedTransportInfo = { 
      mode,
      arrivalTime,
      departureTime,
      arrivalCity,
      departureCity,
      legId,
      transportId
    }

    try {
      let editedTransportId = await patchTransport(editedTransportInfo)
      return editedTransportId
    }
    catch (error) {
      this.setState({error: 'There was an error editing your transportation'})
    }
  }


  removeTransportation = async () => {
    try {
      let deletedTransport = await deleteTransport(this.state.transportId);
      this.props.navigation.navigate('Transportation')
    } catch (error) {
      this.setState({ error: 'There was an error deleting this transportation'})
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
            <View>
            </View>
            <Text style={styles.text}>Mode of Travel</Text>
            <View style={styles.form}>
              <TextInput
              style={styles.input}
              placeholder={
              this.state.mode || 'Enter Mode of Travel...'
              }
              placeholderTextColor='black'
              onChangeText={mode => this.setState({ mode })}
              value={this.state.mode}
              onBlur={Keyboard.dismiss}
            />
            </View>
            <Text style={styles.label}>Start Destination</Text>
            <MapInputFirst inputValue={this.state.departureCity} handlerFirstInput={this.handlerFirstInput.bind(this)} />
            <Text style={styles.label}>End Destination</Text>
            <MapInputSecond inputValue={this.state.arrivalCity} handlerSecondInput={this.handlerSecondInput.bind(this)} />
            <Text style={styles.text}>Departure Date</Text>
            <DatePicker
              style={{ width: 370, height: 65 }}
              date={this.state.departureTime}
              mode='date'
              placeholder='Select Departure Date'
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
                this.setState({ departureTime: date });
              }}
            />
            <Text style={styles.text}>Arrival Date</Text>
              <DatePicker
              style={{ width: 370, height: 65 }}
              date={this.state.arrivalTime}
              mode='date'
              placeholder='Select Arrival Date'
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
                this.setState({ arrivalTime: date });
              }}
            />

            {this.state.error !== '' && 
              <Text style={styles.errorText}>{this.state.error}</Text>
            }

            <TouchableOpacity onPress={this.handleSave}>
              <Text style={styles.button}>Save</Text>
            </TouchableOpacity>

            {this.props.navigation.getParam('transport') && 
          <TouchableOpacity onPress={this.removeTransportation}>
            <Text style={[styles.button, styles.deleteButton]}>Delete</Text>
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
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    marginTop: 15
  },
  buttonBackground: {
    backgroundColor: "#000000",
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
    backgroundColor: "white",
    color: "black",
    fontSize: 18,
    flex: 1,
    alignItems: "center",
    marginLeft: 10
  },
  form: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    height: 60,
    width: 350,
    color: "white",
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 24
  },
    deleteButton: {
      backgroundColor: 'red'
  },
});

