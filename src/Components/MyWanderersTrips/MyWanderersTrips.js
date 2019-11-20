import React, { Component } from "react";
import FollowerHeader from '../FollowerHeader/FollowerHeader';
import FollowerFooter from '../FollowerFooter/FollowerFooter';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import { fetchMyTrips } from '../../util/apiCalls';
import followerSpinner from '../../../assets/wanderer_spinner.gif';


export default class MyWanderersTrips extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      wanderer: this.props.navigation.getParam('wanderer'),
      trips: [],
      error: ''
    }
  }

  generateTripElements = () => {
    return this.state.trips.map((trip, index) => {
      return (
        <View key={index + trip.name} style={styles.tripButton}>
          <Text style={styles.text} key={trip.name}>{trip.name}</Text>
          {trip.legs.length && this.generateLegs(trip.legs)}
          </View>
      )
    })
  }
  
  generateLegs = (legs) => {
    const {navigate} = this.props.navigation;
    return legs.map((leg,index) => {
      return (
        <TouchableOpacity key={index} onPress={() => navigate('WandererLegDetail', { leg })} style={styles.legBorder}>
          <TextInput editable={false} style={styles.legHeader}>Leg {index + 1 }</TextInput>
          <Text style={styles.leg}>{leg.startLocation} to {leg.endLocation}</Text>
          <Text style={styles.leg}>{leg.startDate} through {leg.endDate} </Text>
        </TouchableOpacity>      
      )
    })
  }

  componentDidMount = async () => {
    try {
      let trips = await fetchMyTrips(this.state.wanderer.id)
      this.setState({ trips })
    } catch (error) {
      this.setState({error: 'There was an error fetching trips'})
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    const { trips, error} = this.state

    return (
      <View style={styles.container}> 

        <FollowerHeader />

        <ScrollView>
          <Text style={styles.title}>{this.state.wanderer.name}'s Trips</Text>

          <View style={styles.container}>

            {trips.length > 0 && this.generateTripElements()}
            {error !== '' && <Text style={styles.text}>{error}</Text>}
            {trips.length === 0 && error === '' && <Text style={styles.text}>Loading ...</Text>}
            {error === '' && trips.length == 0 &&
              <Image alt={'Loading...'} style={styles.loading} source={followerSpinner} />
            }
          </View>




        </ScrollView>

        <FollowerFooter navigate={navigate}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  }, 
  legHeader: {
    fontSize: 22,
    textAlign: 'center',
    color: '#84183B',
    borderBottomColor: '#84183B',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  legBorder: {
    borderWidth: 1,
    borderColor: '#84183B',
    borderRadius: 8,
    width: 300,
    textAlign: 'center',
    padding: 10,
    marginLeft: 20,
    backgroundColor: 'white',
    marginVertical: 10,
    marginBottom: 10
  },
  text: {
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 30,
    width: 'auto'
  }, 
  title: {
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 10
  }, 
  leg: {
    color: '#84183B',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 15,
    width: 'auto'
  },
  tripButton: {
    borderWidth: 3,
    borderColor: '#84183B',
    borderRadius: 8,
    marginVertical: 10,
    color: '#84183B',
    width: 350,
    marginLeft: 10,
    backgroundColor: '#84183B',
    paddingBottom: 20
  },
  loading: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
});