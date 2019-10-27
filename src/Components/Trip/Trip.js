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


export default class Trip extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.navigation.getParam('userId'),
      trip: this.props.navigation.getParam('trip'),
      tripId: '',
    }
  }

  generateLegElements = () => {
    const {navigate} = this.props.navigation;
    return this.state.trip.legs.map(leg => {
      return (
        <TouchableOpacity key={leg.name} style={styles.legButton}>
        <Text onPress={() => navigate('Leg', {leg, tripId: this.state.trip.id})} style={styles.buttonText} key={leg.name}>{leg.name}</Text>
      </TouchableOpacity>
      )
    })
  }


  render() {
    const {navigate} = this.props.navigation;
    let { name, startDate, endDate, id } = this.state.trip
    return (
      <View style={styles.container}>

      <WandererHeader />

        <ScrollView>
          
            <Text style={styles.title}>{name}</Text>
            <View>
            <Text style={styles.dateText}>{startDate} to {endDate}</Text>
          </View>
            <View style={styles.container}>
            <View style={styles.sideBySideContainer}>
            <TouchableOpacity style={styles.sideBySideButton}>
              <Text onPress={() => navigate('LegForm' , {tripId: id})} style={styles.buttonText}>Add A Leg <Text style={styles.plus}>+</Text> </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBySideButton}>
              <Text style={styles.buttonText} onPress={() => navigate('TripForm', {trip: this.state.trip, userId: this.state.userId})}>Edit Trip</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View>
            {this.state.trip.legs && this.generateLegElements()}
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
  legButton: {
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
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10
  },
  tripHeader: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    marginVertical: 30,
    textAlign: 'center'
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
  title: {
    color: 'white',
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 40,
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#1C4263',
    color: 'white',
    paddingTop: 60,
    paddingLeft: 10,
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
  },
  sideBySideContainer: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  sideBySideButton: {
    width: 160,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    height: 60,
    margin: 20,
    fontSize: 30,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#1C4263',
    alignItems: 'stretch'
  },
  plus: {
    color: '#84183B',
    fontSize: 20,
    fontWeight: '900'
  }
});

