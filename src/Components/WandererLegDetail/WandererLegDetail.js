import React, { Component } from "react";
import FollowerHeader from '../FollowerHeader/FollowerHeader';
import FollowerFooter from '../FollowerFooter/FollowerFooter'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
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
    return this.state.lodgings.map((lodging, index) => {
      return (
        <View style={styles.borderContainer}>
        <View style={styles.roundedCorners}>
          <Text style={styles.headerText}>{lodging.name}</Text>
          </View>
          <Text style={styles.text}>City: {lodging.city}</Text>
          <Text style={styles.text}>Arriving {lodging.arrivalDate}</Text>
          <Text style={styles.text}>Leaving {lodging.departureDate}</Text>
        </View>
      )
    })
  }

  generateTransportationElements = () => {
    return this.state.transportations.map((transport, index) => {
      return (
        <View key={index} style={styles.borderContainer}>
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
          <View style={styles.container}>
            <Text style={styles.subhead}>{leg.startLocation} to {leg.endLocation}</Text>
            <Text style={styles.text}>{leg.startDate} through {leg.endDate}</Text>
          </View>

        <View style={styles.container}>
{/* 
        {error !== '' && <Text style={styles.text}>{error}</Text>}
        {transportations.length === 0 && lodgings.length === 0 && error === '' && <Text style={styles.text}>Loading ...</Text>}
        {error === '' && transportations.length == 0 && lodgings.length == 0 && 
        <Image alt={'Loading...'} style={styles.loading} source={wandererSpinner} />
        } */}
        <Text style={styles.title}>Lodging</Text>
        {lodgings.length > 0 && this.generateLodgingElements()}
        {/* <Text style={styles.title}>Transportation</Text>
        {transportations.lenght > 0 && this.generateTransportationElements()} */}
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
  subhead: {
    fontSize: 22,
    color: '#84183B',
    textAlign: 'center'
  }, 
  text: {
    color: '#84183B',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 22,
    width: 'auto'
  }, 
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#84183B',
    marginVertical: 20,
    marginBottom: 20
  }, 
  borderContainer: {
    borderColor: '#84183B',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    width: 330,
    color: '#84183B',
    marginLeft: 20,
    marginVertical: 10,
    marginBottom: 10,
    height: 210
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
  roundedCorners: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#84183B",
  }
});