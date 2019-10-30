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

import WandererHeader from '../WandererHeader/WandererHeader';
import WandererFooter from '../WandererFooter/WandererFooter';

export default class WandererDashboard extends Component {

  constructor(props) {
    super(props)
  }

  render() {
  const {navigate} = this.props.navigation;

    return (
  <View style={styles.container}>
    <WandererHeader />
    <ScrollView>
      <Weather />
      <Map />
    </ScrollView>
    <WandererFooter navigate={navigate} userId={this.props.navigation.getParam('userId')}/>
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