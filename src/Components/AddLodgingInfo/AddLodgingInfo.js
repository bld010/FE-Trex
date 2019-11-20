import React, { Component } from "react";
import DatePicker from "react-native-datepicker";
import MapInputFirst from "../MapInput/MapInputFirst";
import WandererHeader from "../WandererHeader/WandererHeader";
import WandererFooter from "../WandererFooter/WandererFooter";
import {
  postNewLodging,
  patchLodging,
  deleteLodging
} from "../../util/apiCalls";
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
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      name: "",
      arrivalDate: "",
      departureDate: "",
      legId: this.props.navigation.getParam('legId'),
      leg: this.props.navigation.getParam('leg'),
      lodgingId: this.props.navigation.getParam('lodgingId') || null,
      lodging: this.props.navigation.getParam('lodging'),
      userId: this.props.navigation.getParam("userId")
    };
  }

  componentDidMount = () => {
    if (this.state.lodging) {
      let { name, arrivalDate, departureDate, city } = this.state.lodging;
      this.setState({
        name,
        arrivalDate,
        departureDate,
        city
      });
    }
  };

  handlerFirstInput(arg) {
    this.setState({
      city: arg
    });
    return;
  }

  checkLodgingParams = () => {
    let { city, name, arrivalDate, departureDate } = this.state;

    if (
      city === "" ||
      name === "" ||
      arrivalDate === "" ||
      departureDate === ""
    ) {
      this.setState({ error: "Please fill out all fields" });
      return false;
    } else {
      this.setState({ error: "" });
      return true;
    }
  };

  handleSave = async () => {
    let updatedLegId;

    if (!this.props.navigation.getParam("lodgingId")) {
      let formIsFilledCorrectly = this.checkLodgingParams();
      if (formIsFilledCorrectly) {
        updatedLegId = await this.createNewLodging();
        this.props.navigation.navigate('Lodging');
      }
    } else {
      updatedLegId = await this.editLodging();
      this.props.navigation.navigate('Lodging')
    }
  };

  createNewLodging = async () => {
    let { name, city, arrivalDate, departureDate, legId } = this.state;
    let newLodgingInfo = {
      name,
      city,
      arrivalDate,
      departureDate,
      legId
    };

    try {
      let updatedLegId = await postNewLodging(newLodgingInfo);
      return updatedLegId;
    } catch (error) {
      this.setState({ error: "There was an error creating your lodging" });
    }
  };

  editLodging = async () => {
    let { name, city, arrivalDate, departureDate, legId, lodgingId } = this.state;

    let editedLodgingInfo = {
      name,
      city,
      arrivalDate,
      departureDate,
      legId,
      lodgingId
    };
    try {
      let editedLegId = await patchLodging(editedLodgingInfo);
      return editedLegId;
    } catch (error) {
      this.setState({ error: "There was an error editing your lodging" });
    }
  };

  removeLodging = async () => {
    try {
      let deletedLodging = await deleteLodging(this.state.lodgingId);
      this.props.navigation.navigate("Lodging");
    } catch (error) {
      this.setState({ error: "There was an error deleting your lodging" });
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <WandererHeader />
        <ScrollView>
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>Add Lodging</Text>
            <Text style={styles.labelCity}>City</Text>
            <MapInputFirst
              inputValue={this.state.city} handlerFirstInput={this.handlerFirstInput.bind(this)}
            />
            <Text style={styles.label}>Name</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Enter Lodging Name..."
                placeholderTextColor="black"
                maxLength={20}
                onBlur={Keyboard.dismiss}
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
              />
            </View>
            <Text style={styles.text}>Beginning of Stay</Text>
            <DatePicker
              style={{ width: 370, height: 65 }}
              date={this.state.arrivalDate}
              mode="date"
              placeholder="Start Date"
              placeholderTextColor="white"
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
                  color: "black",
                  backgroundColor: "white",
                  height: 40,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "white"
                },
                dateText: {
                  fontSize: 20,
                  color: "black"
                },
                placeholderText: {
                  fontSize: 20,
                  color: "black"
                }
              }}
              onDateChange={date => {
                this.setState({ arrivalDate: date });
              }}
            />
            <Text style={styles.endText}>End of Stay</Text>
            <DatePicker
              style={{ width: 370, height: 65 }}
              date={this.state.departureDate}
              mode="date"
              mode="date"
              placeholder="Start Date"
              placeholderTextColor="white"
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
                  color: "black",
                  backgroundColor: "white",
                  height: 40,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "white",
                  marginVertical: -10
                },
                dateText: {
                  fontSize: 20,
                  color: "black"
                },
                placeholderText: {
                  fontSize: 20,
                  color: "black"
                }
              }}
              onDateChange={date => {
                this.setState({ departureDate: date });
              }}
            />

            {this.state.error !== "" && (
              <Text style={styles.errorText}>{this.state.error}</Text>
            )}

            <TouchableOpacity onPress={this.handleSave}>
              <Text style={styles.button}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {this.props.navigation.getParam('lodging') && 
          <TouchableOpacity style={styles.deleteButton} onPress={this.removeLodging}>
          <Text style={styles.buttonText}>Delete Lodging</Text>
          </TouchableOpacity>
          }
        <WandererFooter navigate={navigate} userId={this.state.userId} />
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
    marginTop: 25
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    paddingVertical: 25
  },
  text: {
    marginLeft: 20,
    fontSize: 26,
    color: "white",
    paddingVertical: 15,
    marginBottom: -8,
    marginVertical: -20
  },
  endText: {
    marginLeft: 20,
    fontSize: 26,
    color: "white",
    paddingVertical: 15,
    marginBottom: -8,
    marginVertical: -25
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    flex: 1,
    alignItems: 'center',
    marginLeft: 10
  },
  form: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    height: 40,
    width: 350,
    color: 'white',
    marginLeft: 15,
    marginBottom: 22
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    borderStyle: 'solid',
    width: 'auto',
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#1C4263',
    alignItems: 'stretch',
    marginVertical: -20
  },
  label: {
    marginLeft: 20,
    fontSize: 26,
    color: "white",
    marginBottom: 5,
    marginVertical: -15
  },
  labelCity: {
    marginLeft: 20,
    fontSize: 26,
    color: "white",
    marginBottom: -22,
    marginVertical: -10,
    color: "white"
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 24
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
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    paddingVertical: 10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
    marginBottom: 20
  }
});
