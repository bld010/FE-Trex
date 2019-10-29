import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import WandererFooter from '../WandererFooter/WandererFooter';
import WandererHeader from '../WandererHeader/WandererHeader';
import { fetchTransport } from '../../util/apiCalls'



export default class Transportation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leg: this.props.navigation.getParam('leg') ,
      transports: ''

     }
  }
  
  componentDidMount = async () => {
    try {
      let transports = await fetchTransport(this.state.leg.id)
      this.setState({transports})
    } catch (error) {
      this.setState({error: 'There was an error fetching your tranportation'})
    }
  }

  generateTripElements = () => {
    const {navigate} = this.props.navigation;
    return this.state.transports.map((transport, index) => {
      return (
            <View style={styles.borderContainer}>
            <Text style={styles.headerText}>{transport.mode}</Text>
            <Text style={styles.headerText}>Departure Details:</Text>
            <Text style={styles.text}>{transport.departureLocation}</Text>
            <Text style={styles.dateText}>{transport.departureDate}</Text>
            <Text style={styles.headerText}>Arrival Details:</Text>
            <Text style={styles.text}>{transport.arrivalLocation}</Text>
            <Text style={styles.dateText}>{transport.arrivalDate}</Text>


        {/* <TouchableOpacity key={index + transport.id} style={styles.tripButton}>
        <Text onPress={() => navigate('Trip', {trip: trip, tripId: trip.id, userId: this.state.user.id})} style={styles.text} key={trip.name}>{trip.name}</Text>
      </TouchableOpacity> */}
      </View>
    )
      })
  }
  
  render() {
  const {navigate} = this.props.navigation;
  return (
      <View style={styles.container}>

      <WandererHeader />

        <ScrollView>

          <View>
          <Text style={styles.text}>Transportation Detail</Text>
            <Text style={styles.text}>{this.state.leg.startLocation} - {this.state.leg.endLocation}</Text>
           {this.generateTripElements()}
          </View>    
            <View style={styles.sideBySideContainer}>
          <TouchableOpacity style={styles.sideBySideButton}>
            <Text style={styles.buttonText} onPress={() => navigate('AddTransportInfo', {legId: leg.id })}>Add Transport</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideBySideButton}>
            <Text style={styles.buttonText} onPress={() => navigate('AddTransportInfo')}>Add Lodging</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text onPress={() => navigate('LegForm', { leg, tripId })} style={styles.button}>Edit Leg</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

        <WandererFooter navigate={navigate} />
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  }, 
  button: {
    borderColor: 'white',
    borderWidth: 1,
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
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 30,
    width: 'auto',
    textAlign: 'center'
  },
  dateText: {
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 18,
    width: 'auto',
    textAlign: 'center'
  },
  borderContainer: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    width: 330,
    marginLeft: 20,
    marginVertical: 10,
    marginBottom: 10,
    height: 170
  },
  headerText: {
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 30,
    width: 'auto',
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  }, 
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    paddingVertical: 10
  },
  sideBySideButton: {
    width: 170,
    borderColor: "white",
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
  sideBySideContainer: {
    flex: 1,
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-around"
  },
});


