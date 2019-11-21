import React, { Component } from "react";
import Map from "../Map/Map";
import Weather from "../Weather/Weather";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform
} from "react-native";

import WandererHeader from "../WandererHeader/WandererHeader";
import WandererFooter from "../WandererFooter/WandererFooter";

export default class WandererDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <WandererHeader />
        <ScrollView>
          <View style={styles.topContainer}>
            <TouchableOpacity>
              <View style={styles.textEmergency}>
                <Text style={styles.text}> Call Emergency Number</Text>
                <Text style={styles.textNum}>112</Text>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    marginLeft: 60,
                    backgroundColor: "red"
                  }}
                  source={{
                    uri:
                      "https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-3/64/__call_phone_ring-512.png"
                  }}
                />
              </View>
            </TouchableOpacity>
            <Weather />
          </View>
          <Map />
        </ScrollView>
        <WandererFooter
          navigate={navigate}
          userId={this.props.navigation.getParam("userId")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    marginVertical: 10,
    textAlign: "center",
    fontSize: 18,
    width: "auto"
  },
  textNum: {
    color: "white",
    textAlign: "center",
    fontSize: 70,
    fontWeight: "700"
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  textEmergency: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    color: "white",
    textAlign: "center",
    backgroundColor: "red",
    ...Platform.select({
      ios: {
        height: 200,
        width: 160,
        marginVertical: 20,
        marginLeft: 10
      },
      android: {
        height: 220,
        width: 180,
        marginLeft: 15
      }
    })
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
