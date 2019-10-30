import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity,
  Image 
} from 'react-native';
import WandererFooter from '../WandererFooter/WandererFooter';
import WandererHeader from '../WandererHeader/WandererHeader';
import { fetchMyTrips } from '../../util/apiCalls';
import { withNavigationFocus } from 'react-navigation';
import wandererSpinner from '../../../assets/wanderer_spinner.gif';

export class MyTrips extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.navigation.getParam('userId'),
      trips: [],
      error: ''
    }
  }
  
  generateTripsElements = () => {
    const {navigate} = this.props.navigation;
    return this.state.trips.map((trip, index) => {
      return (
        <TouchableOpacity key={index + trip.name} style={styles.tripButton}>
        <Text onPress={() => navigate('Trip', {trip: trip, tripId: trip.id, userId: this.state.userId})} style={styles.text} key={trip.name}>{trip.name}</Text>
      </TouchableOpacity>
      )
    })
  }
  
  componentDidMount = async  () => {
    try {
      let trips = await fetchMyTrips(this.state.userId)
      this.setState({ trips })

    } catch (error) {
      this.setState({error: 'There was an error fetching your trips.'})
    }
  }

  
  componentDidUpdate = async (prevProps) => {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.componentDidMount();
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    const { trips, error} = this.state

    return(
      <View style={styles.container}>

        <WandererHeader />

        <ScrollView>
          <Text style={styles.title}>My Trips</Text>
          <View>
            {trips.length > 0 && this.generateTripsElements()}
            {error !== '' && <Text style={styles.text}>{error}</Text>}
            {trips.length === 0 && error === '' && <Text style={styles.text}>Loading ...</Text>}
            {error === '' && trips.length == 0 &&
              <Image alt={'Loading...'} style={styles.loading} source={wandererSpinner} />
            }
          </View>
          <TouchableOpacity style={styles.addTripButton}>
            <Text style={styles.text} onPress={() => navigate('TripForm', {userId: this.state.userId})}>Add a New Trip</Text>
          </TouchableOpacity>
        </ScrollView>
  
        <WandererFooter navigate={navigate} userId={this.state.userId} />

    </View>

    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  }, 
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
    
  }, 
  text: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    paddingVertical: 10
  },
  tripButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    marginVertical: 10
  },
  addTripButton: {
    backgroundColor: '#1C4263',
    borderWidth: 1,
    borderColor: 'white', 
    color: 'white',
    borderRadius: 8,
    backgroundColor: '#1C4263',
    marginBottom: 10
  }
})


export default withNavigationFocus(MyTrips)