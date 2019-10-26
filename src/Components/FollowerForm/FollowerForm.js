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
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

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

      <Header />

        <ScrollView>

          <View>
            <Text style={styles.title}>Add A New Follower</Text>
          </View>
          <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.followerName}
            onChangeText={followerName => this.setState({ followerName })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.followerEmail}
            onChangeText={followerEmail => this.setState({ followerEmail })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.followerPhoneNum}
            onChangeText={followerPhoneNum => this.setState({ followerPhoneNum })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Address"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.followerAddress}
            onChangeText={followerAddress => this.setState({ followerAddress })}
          />
          <TouchableOpacity>
            <Text style={styles.button}>Save</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>        
        <Footer navigate={navigate} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    paddingVertical: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
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