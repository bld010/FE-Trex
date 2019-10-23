import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView,
    TouchableOpacity,
    Keyboard 
  } from 'react-native';

export default class AddLodgingInfo extends Component {
  constructor() {
    super()
    this.state = {
      countryLodge: '',
      cityLodge: '',
      lodgeName: '',
      startLodge: '',
      endLodge: ''
    }
  }

  handleInputs = () => {
    this.setState({ [e.target.name] : e.target.value })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Country"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.countryLodge}
            onChange={this.handleInputs}
          />
          <TextInput
            style={styles.textInput}
            placeholder="City"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.cityLodge}
            onChange={this.handleInputs}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Start Date"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.lodgeName}
            onChange={this.handleInputs}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Start Date"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.startLodge}
            onChange={this.handleInputs}
          />
          <TextInput
            style={styles.textInput}
            placeholder="End Date"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.endLodge}
            onChange={this.handleInputs}
          />
          <TouchableOpacity>
            <Text style={styles.button}>Save</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
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