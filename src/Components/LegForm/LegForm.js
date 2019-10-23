import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class LegForm extends Component {
  constructor() {
    super();
    this.state = {
      startLegDest: '',
      endLegDest: '',
      startLegDate: '',
      endLegDate: ''
    };
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
            placeholder="Start Destination"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.startLegDest}
            onChange={this.handleInputs}
          />
          <TextInput
            style={styles.textInput}
            placeholder="End Destination"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.endLegDest}
            onChange={this.handleInputs}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Start Date"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.startLegDate}
            onChange={this.handleInputs}
          />
          <TextInput
            style={styles.textInput}
            placeholder="End Date"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.endLegDate}
            onChange={this.handleInputs}
          />
          <TouchableOpacity>
            <Text style={styles.button}>Add Transportation</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>Add Lodging</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
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
