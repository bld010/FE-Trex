import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';

export default class Trip extends Component {

render() {
    return (
        <ScrollView>
          <Text style={styles.text}>South America</Text>
          <TouchableOpacity>
            <Text style={styles.button}>Edit Trip</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.footerText}>11/8/19</Text>
            <Text style={styles.footerText}>-</Text>
            <Text style={styles.footerText}>12/8/19</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Leg 1: </Text>
            <Text style={styles.footerText}>Argentina</Text>
            <TouchableOpacity>
              <Text styles={styles.button}>Edit Leg</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>11/8/19</Text>
            <Text style={styles.footerText}>-</Text>
            <Text style={styles.footerText}>11/15/19</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Transportation:</Text>
            <Text style={styles.footerText}>All of the Transportation Details</Text>
            <Text style={styles.footerText}>Lodging: </Text>
            <Text style={styles.footerText}>All of the Lodging Details</Text>
          </View>
        </ScrollView>
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
  text: {
    color: 'white',
    marginVertical: 40,
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


