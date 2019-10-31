import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  Image 
} from 'react-native';
import WandererFooter from '../WandererFooter/WandererFooter';
import WandererHeader from '../WandererHeader/WandererHeader';
import {fetchSafety} from '../../util/apiCalls';
import wandererSpinner from '../../../assets/wanderer_spinner.gif';

export default class SafetyInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      safety: [],
      error: ''
    }
  }
  componentDidMount = async() => {
    try {
      let safety = await fetchSafety()
      this.setState({safety})
    } catch (error) {
      this.setState({error: 'There was an error fetching your safety information'})
    }
  }

  render() {
    
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <WandererHeader/>
        <ScrollView>
        <Text style={styles.title}>Your Location:</Text>
        <Text style={styles.text}>France</Text>
        <Text style={styles.title}>Health Information:</Text>
        

        {this.state.error === '' && this.state.safety.length == 0 &&
          <>
            <Image alt={'Loading...'} style={styles.loading} source={wandererSpinner} />
          </>
        }

        <Text style={styles.text}>{this.state.safety.healthInfo}</Text>
        <Text style={styles.title}>Vaccine Information:</Text>

        {this.state.error === '' && this.state.safety.length == 0 &&
          <>
            <Image alt={'Loading...'} style={styles.loading} source={wandererSpinner} />
          </>
        }

        <Text style={styles.text}>{this.state.safety.vaccineInfo}</Text>
        <Text style={styles.title}>Passport Information:</Text>

        {this.state.error === '' && this.state.safety.length == 0 &&
          <>
            <Image alt={'Loading...'} style={styles.loading} source={wandererSpinner} />
          </>
        }

        <Text style={styles.text}>{this.state.safety.passportInfo}</Text>
        </ScrollView>
        <WandererFooter navigate={navigate} userId={this.props.navigation.getParam('userId')} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginVertical: 15,
  }, 
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
    marginVertical: 15,
    width: 330,
    marginLeft: 20
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
    alignSelf: 'center',
  }
})
