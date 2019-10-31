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
import { fetchLodging } from '../../util/apiCalls'


class Lodging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leg: this.props.navigation.getParam('leg'),
      lodgings: [],
      error: '',
      existingLegId: this.props.navigation.getParam('existingLegId') || null,
      userId: this.props.navigation.getParam('userId'),
     }
  }

  componentDidMount = async () => {
    try {
      let lodgings = await fetchLodging(this.state.leg.id)
      this.setState({lodgings})
    } catch (error) {
      this.setState({error: 'There was an error fetching your lodging'})
    }
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.componentDidMount();
    }
  }

  displayLodging = () => {
    const {navigate} = this.props.navigation;
    return this.state.lodgings.map((lodging, index) => {
      return (
        <View style={styles.borderContainer}>
          <Text style={styles.headerText}>{lodging.name} details</Text>
          <Text style={styles.text}>City {lodging.city}</Text>
          <Text style={styles.text}>Arriving {lodging.arrivalDate}</Text>
          <Text style={styles.text}>Leaving {lodging.departureDate}</Text>
          <TouchableOpacity key={index + lodging.id} style={styles.tripButton}>
            <Text onPress={() => navigate('AddLodgingInfo', {leg: this.state.leg, legId: this.state.leg.id, lodgingId: lodging.id, lodging: lodging})} style={styles.text} key={lodging.id}>Edit Lodging</Text>
          </TouchableOpacity>
        </View>
    )
      })
  }

  render() {
  const { leg, error, lodgings } = this.state
  const {navigate} = this.props.navigation;
  return (
      <View style={styles.container}>

      <WandererHeader />

        <ScrollView>
          <Text style={styles.title}>Lodging</Text>
          <Text style={styles.text}>Leg: {leg.startLocation} - {leg.endLocation}</Text>

          <TouchableOpacity>
            <Text onPress={() => navigate('AddLodgingInfo', {legId: leg.id})} style={styles.button}>Add Lodging</Text>
            </TouchableOpacity>

          <View>
           {lodgings.length > 0 && this.displayLodging()}
           {error !== '' && <Text style={styles.text}>{error}</Text>}
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
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    paddingVertical: 16
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
    fontSize: 15,
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
    height: 240
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
  tripButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    marginVertical: 10
  },
});


export default withNavigationFocus(Lodging)