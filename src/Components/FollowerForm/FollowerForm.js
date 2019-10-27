import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TextInput,
  TouchableOpacity ,
  Keyboard
} from 'react-native';
import WandererFooter from '../WandererFooter/WandererFooter';
import WandererHeader from '../WandererHeader/WandererHeader';

export default class FollowerForm extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      followerName: '',
      followerEmail: '',
      followerPhoneNum: '',
      followerAddress: '',
      emergencyContact: false,
    }
  }
  
  render() {
    const {navigate} = this.props.navigation;
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
            placeholderTextColor='white'
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
            placeholderTextColor='white'
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
            placeholder="Enter Followers Phone Number"
            placeholderTextColor='white'
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.followerPhoneNum}
            onChangeText={followerPhoneNum => this.setState({ followerPhoneNum })}
          />
          </View>
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