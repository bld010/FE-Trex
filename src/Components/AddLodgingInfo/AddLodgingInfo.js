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
      lodging: this.props.navigation.getParam("lodging") || null,
      legId: this.props.navigation.getParam("legId"),
      userId: this.props.navigation.getParam("userId")
    };
  }

  componentDidMount = () => {
    if (this.state.lodging) {
      let { name, arrivalDate, departureDate, city } = this.state.leg;
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

    if (!this.props.navigation.getParam("lodging")) {
      let formIsFilledCorrectly = this.checkLodgingParams();
      if (formIsFilledCorrectly) {
        updatedLegId = await this.createNewLodging();
        this.props.navigation.navigate("Leg", { legId: updatedLegId });
      }
    } else {
      updatedLegId = await this.editLodging();
      this.props.navigation.navigate('Leg', {legId: updatedLegId})
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
    let id = this.state.lodging.id;
    let { name, city, arrivalDate, departureDate, legId } = this.state;

    let editedLodgingInfo = {
      name,
      city,
      arrivalDate,
      departureDate,
      legId,
      id
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
      await deleteLodging(this.state.lodging.id);
      this.props.navigation.navigate("Leg");
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
            <View>
              <Text style={styles.title}>Add Lodging</Text>
            </View>
            <Text style={styles.labelCity}>City</Text>
            <MapInputFirst
              handlerFirstInput={this.handlerFirstInput.bind(this)}
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
                  height: 60,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "white"
                },
                dateText: {
                  fontSize: 22,
                  color: "black"
                },
                placeholderText: {
                  fontSize: 22,
                  color: "black"
                }
              }}
              onDateChange={date => {
                this.setState({ arrivalDate: date });
              }}
            />
            <Text style={styles.text}>End of Stay</Text>
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
                  height: 60,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "white"
                },
                dateText: {
                  fontSize: 22,
                  color: "black"
                },
                placeholderText: {
                  fontSize: 22,
                  color: "black"
                }
              }}
              onDateChange={date => {
                this.setState({ departureDate: date });
              }}
            />

            {this.state.error !== "" && (
              <Text style={styles.error}>{this.state.error}</Text>
            )}

            <TouchableOpacity onPress={this.handleSave}>
              <Text style={styles.button}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  },
  labelCity: {
    marginLeft: 20,
    fontSize: 20,
    color: "white",
    marginBottom: -22,
    marginVertical: -10,
    color: "white"
  },
  error: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    marginVertical: 15
  }
});
