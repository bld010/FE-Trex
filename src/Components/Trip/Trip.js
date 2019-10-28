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
import { withNavigationFocus } from 'react-navigation';


class Trip extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.navigation.getParam('userId'),
      trip: this.props.navigation.getParam('trip'),
      tripId: ''
    }
  }

  generateLegElements = () => {
    const {navigate} = this.props.navigation;
    return this.state.trip.legs.map(leg => {
      return (
        <TouchableOpacity key={leg.endLocation} style={styles.tripButton}>
        <Text onPress={() => navigate('Leg', {leg, tripId: this.state.trip.id})} style={styles.text} key={leg.endLocation}>{leg.endLocation}</Text>
      </TouchableOpacity>
      )
    })
  }


  

  // componentDidMount = async  () => {
  //   try {
  //     let trips = await fetchMyTrips(this.state.user.id)
  //     this.setState({ trips })

  //   } catch (error) {
  //     this.setState({error: 'There was an error fetching your trips.'})
  //   }
  // }

  
  // componentDidUpdate = async (prevProps) => {
  //   if (prevProps.isFocused !== this.props.isFocused) {
  //     this.componentDidMount();
  //   }
  // }


  render() {
    const {navigate} = this.props.navigation;
    let { name, startDate, endDate, id } = this.state.trip
    return (
      <View style={styles.container}>

      <WandererHeader />

        <ScrollView>

          <View style={styles.tripHeader}>
            <Text style={styles.text}>{name}</Text>
            <TouchableOpacity>
              <Text style={styles.editTripButton} onPress={() => navigate('TripForm', {trip: this.state.trip, userId: this.state.userId})}>Edit Trip</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>{startDate} thru {endDate}</Text>
          </View>

          <View>
            {this.state.trip.legs && this.generateLegElements()}
          </View>


          <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <Text onPress={() => navigate('LegForm' , {tripId: id})} style={styles.text}>Add A Leg + </Text>
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
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
    
  }, 
  button: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    marginVertical: 10,
    backgroundColor: '#1C4263'
  },
  tripHeader: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#1C4263',
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 30,
    width: 'auto'
  },
  header: {
    backgroundColor: '#1C4263',
    color: 'white',
    paddingTop: 60,
    paddingLeft: 10,
    // height: 'auto',,
    textAlign: 'center',
    top: 0,
    fontSize: 50,
  }, 
  editTripButton: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    width: 'auto',
    height: 40,
    margin: 0,
    fontSize: 12,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#1C4263'
  },
  footer: {
    backgroundColor: '#1C4263',
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'space-around'
  }, 
  footerText: {
    color: 'white',
    marginBottom: 20,
    fontSize: 20
  }
});

export default withNavigationFocus(Trip)