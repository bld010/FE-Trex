import React, { Component } from 'react';
import DatePicker from "react-native-datepicker";
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

export default class AddLodgingInfo extends Component {
  constructor() {
    super();
    this.state = {
      countryLodge: '',
      cityLodge: '',
      lodgeName: '',
      startLodge: '',
      endLodge: ''
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <WandererHeader />
        <ScrollView>
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.title}>Add Lodging</Text>
            </View>
            <Text style={styles.label}>Country</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder='Enter Country of Stay...'
                placeholderTextColor='white'
                maxLength={20}
                onBlur={Keyboard.dismiss}
                value={this.state.countryLodge}
                onChangeText={countryLodge => this.setState({ countryLodge })}
              />
            </View>
            <Text style={styles.label}>City</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder='Enter City of Stay...'
                placeholderTextColor='white'
                maxLength={20}
                onBlur={Keyboard.dismiss}
                value={this.state.cityLodge}
                onChangeText={cityLodge => this.setState({ cityLodge })}
              />
            </View>
            <Text style={styles.label}>Name</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder='Enter Lodging Name...'
                placeholderTextColor='white'
                maxLength={20}
                onBlur={Keyboard.dismiss}
                value={this.state.lodgeName}
                onChangeText={lodgeName => this.setState({ lodgeName })}
              />
            </View>
            <Text style={styles.text}>Beginning of Stay</Text>
            <DatePicker
              style={{ width: 370, height: 65 }}
              date={this.state.startLodge}
              mode='date'
              placeholder='Start Date'
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
                  color: 'white',
                  height: 60,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: 'white'
                },
                dateText: {
                  fontSize: 24,
                  color: 'white'
                }
              }}
              onDateChange={date => {
                this.setState({ startLodge: date });
              }}
            />
            <Text style={styles.text}>End of Stay</Text>
            <DatePicker
              style={{ width: 370, height: 65 }}
              date={this.state.endLodge}
              mode='date'
              mode='date'
              placeholder='Start Date'
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
                  color: 'white',
                  height: 60,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: 'white'
                },
                dateText: {
                  fontSize: 24,
                  color: 'white'
                }
              }}
              onDateChange={date => {
                this.setState({ endLodge: date });
              }}
            />
            <TouchableOpacity>
              <Text style={styles.button}>Save</Text>
            </TouchableOpacity>
          </View>
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
    paddingVertical: 12
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
    marginBottom: 5
  }
});
