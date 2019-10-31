import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default class WandererFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId
    }
  }
  
  render() {

    return(
      <View style={styles.footer}>
            <TouchableOpacity
            
            onPress={() => this.props.navigate('MyTrips', { userId: this.state.userId})}
            >
            <Image style={{width: 40, height: 40, backgroundColor: '#1C4263'}} source={{uri: 'https://cdn3.iconfinder.com/data/icons/flat-03-business-marketing/91/Business_Marketing_131-256.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigate('SafetyInfo')}
            >
            <Image style={{width: 50, height: 40, backgroundColor: '#1C4263'}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/leto-blue-customer-support/64/__hand_help_information_support_service-256.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={() => this.props.navigate('MyFollowers', { userId: this.state.userId})}>
              <Image style={{width: 50, height: 40, backgroundColor: '#1C4263'}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/leto-blue-web-marketing-content-3/64/_-02-256.png'}}/>
            </TouchableOpacity>

          </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#1C4263",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    height: 60
  },
  footerText: {
    color: "white",
    fontSize: 20
  }
});
