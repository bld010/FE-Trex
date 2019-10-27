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

export default class AddTransportInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTrans: "",
      endTrans: "",
      dateTrans: ""
    };
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
          <View style={styles.inputContainer}>
          <Text style={styles.label}>Start Destination</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Enter Start Destination..."
              placeholderTextColor='white'
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.startTrans}
              onChangeText={startTrans => this.setState({ startTrans })}
            />
            </View>
            <Text style={styles.label}>End Destination</Text>
            <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Enter End Destination..."
              placeholderTextColor='white'
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.endTrans}
              onChangeText={endTrans => this.setState({ endTrans })}
            />
            </View>
            <Text style={styles.text}>Travel Date</Text>
            <DatePicker
              style={{ width: 370, height: 65 }}
              date={this.state.dateTrans}
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
              color: "white",
              height: 60,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "white",
            },
            dateText: {
              fontSize: 24,
              color: "white",
            }
          }}
              onDateChange={date => {
                this.setState({ dateTrans: date });
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
    borderStyle: "solid",
    height: 60,
    width: 350,
    color: 'white',
    padding: 10,
    marginLeft: 15,
    marginBottom: 20
  },
  sideBySideContainer: {
    flex: 1,
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-around"
    // justifyContent: 'flex-start'
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    paddingVertical: 10
  },
  button: {
    borderColor: "#768DA1",
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
    backgroundColor: "#1C4263",
    alignItems: "stretch"
  },
  sideBySideButton: {
    width: 170,
    borderColor: "#768DA1",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "#1C4263",
    alignItems: "stretch"
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
    marginBottom: 5
  }
});
