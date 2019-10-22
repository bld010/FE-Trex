import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default class MyTrips extends Component {

  constructor(props) {
    super(props)
    this.tripsElements = [],
    this.tripsList = [
      {name: 'South America'},
      {name: 'Madagascar'},
      {name: 'Southeast Asia'}
    ]
  }

  generateTripsElements = (list) => {
    return list.map(trip => {
      return (
      <TouchableOpacity style={styles.tripButton}>
        <Text style={styles.text} key={trip.name}>{trip.name}</Text>
      </TouchableOpacity>
      )
    })
  }

  componentDidMount = () => {
  }
  
  render() {
    const {navigate} = this.props.navigation;
    
    this.tripsElements = this.generateTripsElements(this.tripsList)

    return(
      
      <View style={styles.container}>

        <Header />

        <ScrollView>
          <Text style={styles.title}>My Trips</Text>
          <View>
            {this.tripsElements.length > 0 && this.tripsElements}
          </View>
          <TouchableOpacity style={styles.addTripButton}>
            <Text style={styles.text} onPress={() => navigate('TripForm')}>Add a New Trip</Text>
          </TouchableOpacity>
        </ScrollView>
  
        <Footer navigate={navigate} />

        
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
    borderRadius: 8
  }
})
