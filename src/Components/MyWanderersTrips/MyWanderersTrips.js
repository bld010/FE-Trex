import React, { Component } from "react";
import FollowerHeader from '../FollowerHeader/FollowerHeader';
import FollowerFooter from '../FollowerFooter/FollowerFooter';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { fetchMyTrips } from '../../util/apiCalls';
import wandererSpinner from '../../../assets/wanderer_spinner.gif';


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
    const {navigate} = this.props.navigation;
    return this.state.trips.map((trip, index) => {
      return (
        <View style={styles.trip}>
         <TouchableOpacity key={index + trip.name} style={styles.tripButton}>
          <Text style={styles.text} key={trip.name}>{trip.name}</Text>
          </TouchableOpacity>
          </View>
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

    console.log(trips)
    return (
      <View style={styles.container}> 

        <FollowerHeader />

        <ScrollView>
          <Text style={styles.title}>{this.state.wanderer.name}'s Trips</Text>

          <View>

            {trips.length > 0 && this.generateTripElements()}
            {error !== '' && <Text style={styles.text}>{error}</Text>}
            {trips.length === 0 && error === '' && <Text style={styles.text}>Loading ...</Text>}
            {error === '' && trips.length == 0 &&
              <Image alt={'Loading...'} style={styles.loading} source={wandererSpinner} />
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
    justifyContent: 'flex-start'
  }, 
  trip: {
    backgroundColor: '#84183B'
  }
  borderContainer: {
    borderColor: '#84183B',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    width: 330,
    marginLeft: 20,
    marginVertical: 10,
    marginBottom: 10,
    height: 240
  },
  text: {
    color: 'white',
    marginVertical: 40,
    textAlign: 'center',
    fontSize: 30,
    width: 'auto'
  }, 
  title: {
    fontSize: 30,
    textAlign: 'center'
  }, 
  tripButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    marginVertical: 10
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
    backgroundColor: '#84183B',
    alignItems: 'stretch'
  }
});