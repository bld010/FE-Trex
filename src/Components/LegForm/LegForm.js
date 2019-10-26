import React, { Component } from "react";
import DatePicker from 'react-native-datepicker';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";

export default class LegForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      existingLeg: this.props.navigation.getParam('leg'),
      startLegDest: '',
      endLegDest: '',
      startLegDate: '',
      endLegDate: '',
      startDate: '',
      endDate: '',
    };
  }

    render() {
    const {navigate} = this.props.navigation;
    console.log(this.state.existingLeg)
    return (
      <View style={styles.container}>
        <Header />
      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Start Destination"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.startLegDest}
            onChangeText={startLegDest => this.setState({ startLegDest })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="End Destination"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.endLegDest}
            onChangeText={endLegDest => this.setState({ endLegDest })}
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
          <TouchableOpacity>
            <Text style={styles.button}>Edit</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    marginTop: 15
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
