import React, { Component } from "react";
import FollowerHeader from '../FollowerHeader/FollowerHeader';
import FollowerFooter from '../FollowerFooter/FollowerFooter'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image
} from "react-native";
import wandererSpinner from '../../../assets/wanderer_spinner.gif';
import { fetchLodging, fetchTransport } from '../../util/apiCalls';

export default class WandererLegDetail extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      leg:  this.props.navigation.getParam('leg'),
      error: '',
      transportations: '',
      lodgings: ''
    }
  }

  gatherTransportation = async () => {
    try {
      let transportation = await fetchTransport(this.state.leg.id)
      return transportation

    } catch (error) {
      this.setState({error: 'There was an error gathering transportation'})
    }
  }

  gatherLodging = async () => {
    try {
      let lodging = await fetchLodging(this.state.leg.id)
      return lodging

    } catch (error) {
      this.setState({error: 'There was an error fetching trips'})
    }
  }

  componentDidMount = async () => {
    let transportations = await this.gatherTransportation()
    this.setState({ transportations })
    let lodgings = await this.gatherLodging()
    this.setState({ lodgings })
  }

  generateLodgingElements = () => {
    return this.state.lodgings.map((lodging) => {
      return (
        <View style={styles.borderContainer}>
          <Text style={styles.headerText}>{lodging.name} details</Text>
          <Text style={styles.text}>City {lodging.city}</Text>
          <Text style={styles.text}>Arriving {lodging.arrivalDate}</Text>
          <Text style={styles.text}>Leaving {lodging.departureDate}</Text>
        </View>
    )
      })
  }

  generateTransportationElements = () => {
    return this.state.transportations.map((transport) => {
      return (
        <View style={styles.borderContainer}>
          <Text style={styles.headerText}>{transport.mode} details</Text>
          <Text style={styles.text}>Depart {transport.departureCity} at {transport.departureTime}</Text>
          <Text style={styles.text}>Arrive {transport.arrivalCity} at {transport.arrivalTime}</Text>
        </View>
    )
      })
  }
  
  render() {
    const {navigate} = this.props.navigation;
    const { leg, error, transportations, lodgings } = this.state

    return (
      <View style={styles.container}> 

        <FollowerHeader />

        <ScrollView>
          <Text style={styles.title}>Leg Detail</Text>
          <Text style={styles.title}>{leg.name}</Text>

        {error !== '' && <Text style={styles.text}>{error}</Text>}
        {transportations.length === 0 && lodgings.length === 0 && error === '' && <Text style={styles.text}>Loading ...</Text>}
        {error === '' && transportations.length == 0 && lodgings.length == 0 && 
        <Image alt={'Loading...'} style={styles.loading} source={wandererSpinner} />
        }

        {lodgings === [] && this.generateLodgingElements()}
        {transportations === [] && this.generateTransportationElements()}

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
    color: 'white',
    marginVertical: 40,
    textAlign: 'center',
    fontSize: 30,
    width: 'auto'
  }, 
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black'
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