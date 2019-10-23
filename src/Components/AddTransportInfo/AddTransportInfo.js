import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class AddTransportInfo extends Component {
  constructor() {
    super();
    this.state = {
      startTrans: '',
      endTrans: '',
      dateTrans: ''
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
            value={this.state.startTrans}
            onChange={this.handleInputs}
          />
          <TextInput
            style={styles.textInput}
            placeholder="End Destination"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.endTrans}
            onChange={this.handleInputs}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Date"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.dateTrans}
            onChange={this.handleInputs}
          />
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
