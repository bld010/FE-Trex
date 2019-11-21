import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import WandererFooter from "../WandererFooter/WandererFooter";
import WandererHeader from "../WandererHeader/WandererHeader";
import { withNavigationFocus } from "react-navigation";
import { fetchTransport } from "../../util/apiCalls";

export class Transportation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leg: this.props.navigation.getParam("leg"),
      userId: this.props.navigation.getParam("userId"),
      transports: [],
      error: "",
      existingLegId: this.props.navigation.getParam("existingLegId") || null
    };
  }

  componentDidMount = async () => {
    try {
      let transports = await fetchTransport(this.state.leg.id);
      this.setState({ transports });
    } catch (error) {
      this.setState({
        error: "There was an error fetching your tranportation"
      });
    }
  };

  componentDidUpdate = async prevProps => {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.componentDidMount();
    }
  };

  generateTransportationElements = () => {
    const { navigate } = this.props.navigation;
    return this.state.transports.map((transport, index) => {
      return (
        <View key={index} style={styles.borderContainer}>
          <TextInput editable={false} style={styles.headerText}>{transport.mode} Details</TextInput>
          <Text style={styles.buttonText}>Depart</Text>
          <Text style={styles.text}>
           {transport.departureCity} on {transport.departureTime}
          </Text>
          <Text style={styles.buttonText}>Arrive</Text>
          <Text style={styles.text}>
           {transport.arrivalCity} on {transport.arrivalTime}
          </Text>
          <TouchableOpacity
            key={index + transport.id}
            style={styles.tripButton}
          >
            <Text
              onPress={() =>
                navigate("AddTransportInfo", {
                  leg: this.state.leg,
                  legId: this.state.leg.id,
                  transportId: transport.id,
                  transport: transport,
                  userId: this.state.userId
                })
              }
              style={styles.buttonText}
              key={transport.id}
            >
              Edit Transportation Info
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  render() {
    const { leg, error, transports } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <WandererHeader />

        <ScrollView>
          <Text style={styles.title}>Transportation</Text>
          <Text style={styles.text}>
            {leg.startLocation} - {leg.endLocation}
          </Text>

          <View> 
            {transports.length > 0 && transports[0] !== null && this.generateTransportationElements()}
            {error !== "" && <Text style={styles.text}>{error}</Text>}
          </View>
          <View>
            <TouchableOpacity>
              <Text
                onPress={() =>
                  navigate("AddTransportInfo", {
                    legId: leg.id,
                    userId: this.state.userId,
                  })
                }
                style={styles.button}
              >
                Add Transportation
              </Text>
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
  title: {
    textAlign: "center",
    fontSize: 40,
    color: "white",
    paddingVertical: 16
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
    alignItems: 'stretch'
  }, 
  text: {
    color: "white",
    marginVertical: 10,
    textAlign: "center",
    fontSize: 20,
    width: "auto",
    textAlign: "center"
  },
  buttonText: {
    color: "white",
    marginVertical: 10,
    textAlign: "center",
    fontSize: 26,
    width: "auto",
    textAlign: "center"
  },
  dateText: {
    color: "white",
    marginVertical: 10,
    textAlign: "center",
    fontSize: 18,
    width: "auto",
    textAlign: "center"
  },
  borderContainer: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    width: 330,
    marginLeft: 20,
    marginVertical: 10,
    marginBottom: 10,
    height: 320
  },
  headerText: {
    color: "white",
    marginVertical: 10,
    textAlign: "center",
    fontSize: 30,
    width: "auto",
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  tripButton: {
    borderWidth: 1,
    borderTopColor: "white",
    backgroundColor: "#1C4263",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 55,
    marginVertical: 10
  }
});

export default withNavigationFocus(Transportation);
