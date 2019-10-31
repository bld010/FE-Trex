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
         <TouchableOpacity key={index + trip.name} style={styles.tripButton}>
          <Text style={styles.text} key={trip.name}>{trip.name}</Text>
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

    console.log(trips)
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
  text: {
    color: '#84183B',
    marginVertical: 40,
    textAlign: 'center',
    fontSize: 20,
    width: 'auto'
  }, 
  title: {
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 10
  }, 
  tripButton: {
    borderWidth: 1,
    borderColor: '#84183B',
    borderRadius: 8,
    marginVertical: 10,
    height: 100,
    color: '#84183B'
  }
});