import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import WandererFooter from "../WandererFooter/WandererFooter";
import WandererHeader from "../WandererHeader/WandererHeader";

export default class FollowerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      followerName: '',
      followerEmail: '',
      followerPhoneNum: '',
      followerAddress: '',
      emergencyContact: false,
      error: '', 
      //we will likely need the current user id to be passed in here 
    }
  }

  checkFollowerParams = () => {
    let {
      followerName,
      followerEmail,
      followerPhoneNum,
      followerAddress
       } = this.state;

    if (
      followerName === '' ||
      followerEmail === '' ||
      followerPhoneNum === '' ||
      followerAddress === ''
    ) {
      this.setState({ error: 'Please fill out all fields'})
      return false;
    } else {
      this.setState({ error: '' });
      return true;
    }
  }

  handleSave = async () => {
    
    let formIsFilledCorrectly = this.checkFollowerParams();
    if (formIsFilledCorrectly) {
      //fire post call here
    }

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <WandererHeader />

        <ScrollView>
          <View>
            <Text style={styles.title}>Add A New Follower</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Enter Followers Name..."
                placeholderTextColor="black"
                maxLength={20}
                onBlur={Keyboard.dismiss}
                value={this.state.followerName}
                onChangeText={followerName => this.setState({ followerName })}
              />
            </View>
            <Text style={styles.label}>Email</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Enter Followers Email..."
                placeholderTextColor="black"
                maxLength={20}
                onBlur={Keyboard.dismiss}
                value={this.state.followerEmail}
                onChangeText={followerEmail => this.setState({ followerEmail })}
              />
            </View>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Enter Followers Phone Number..."
                placeholderTextColor="black"
                maxLength={20}
                onBlur={Keyboard.dismiss}
                value={this.state.followerPhoneNum}
                onChangeText={followerPhoneNum =>
                  this.setState({ followerPhoneNum })
                }
              />
            </View>
          {this.state.error !== '' && 
            <Text style={styles.error}>{this.state.error}</Text>
          }
          <TouchableOpacity onPress={this.handleSave}>
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
    backgroundColor: "white",
    color: "black",
    fontSize: 18,
    flex: 1,
    alignItems: "center",
    marginLeft: 10
  },
  form: {
    backgroundColor: 'white',
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
  error: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 15
  }
});
