import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import WandererFooter from '../WandererFooter/WandererFooter';
import WandererHeader from '../WandererHeader/WandererHeader';
import {fetchSafety} from '../../util/apiCalls';
import { wandererSpinner } from '../../../assets/wanderer_spinner.gif';

export default class SafetyInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      safety: []
    }
  }
  componentDidMount = async() => {
    try {
      let safety = await fetchSafety()
      this.setState({safety})
    } catch (error) {
      this.setState({error: 'There was an error fetching your safety'})
    }
  }

  render() {
    console.log(this.state.safety)
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <WandererHeader/>
        <ScrollView>
        <Text style={styles.title}>Your Location: France</Text>
        <Text style={styles.title}>Health Information:</Text>
        
        <Text style={styles.text}>{this.state.safety.healthInfo}</Text>
        <Text style={styles.title}>Vaccine Information:</Text>

        <Text style={styles.text}>{this.state.safety.vaccineInfo}</Text>
        <Text style={styles.title}>Passport Information:</Text>

        <Text style={styles.text}>{this.state.safety.passportInfo}</Text>
        </ScrollView>
        <WandererFooter navigate={navigate}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'white'
  }, 
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  loading: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
})
