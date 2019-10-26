import React, { Component } from "react";
import DatePicker from "react-native-datepicker";
import WandererHeader from "../WandererHeader/WandererHeader";
import WandererFooter from "../WandererFooter/WandererFooter";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  TextInput
} from "react-native";

export default class AddLodgingInfo extends Component {
  constructor() {
    super();
    this.state = {
      countryLodge: "",
      cityLodge: "",
      lodgeName: "",
      startLodge: "",
      endLodge: ""
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <WandererHeader />
        <ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Country"
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.countryLodge}
              onChangeText={countryLodge => this.setState({ countryLodge })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="City"
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.cityLodge}
              onChangeText={cityLodge => this.setState({ cityLodge })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Lodging Name"
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.lodgeName}
              onChangeText={lodgeName => this.setState({ lodgeName })}
            />
            <DatePicker
              style={{ width: 200 }}
              date={this.state.startLodge}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={date => {
                this.setState({ startLodge: date });
              }}
            />
            <DatePicker
              style={{ width: 200 }}
              date={this.state.endLodge}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
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
    backgroundColor: "#000000",
    alignItems: "stretch",
    justifyContent: "flex-start"
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
