import React, { Component } from 'react';
import Map from '../Map/Map'
import Weather from '../Weather/Weather'
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default class Dashboard extends Component {
  render() {
  const {navigate} = this.props.navigation;

    return (
  <View style={styles.container}>
    <Header />
    <ScrollView>
      <Weather />
      <Map />
    </ScrollView>
    <Footer navigate={navigate}/>
  </View>
      
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    marginVertical: 40,
    textAlign: 'center',
    fontSize: 30,
    width: 'auto'
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
    
  }

});