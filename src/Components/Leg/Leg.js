import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import WandererFooter from '../WandererFooter/WandererFooter';
import WandererHeader from '../WandererHeader/WandererHeader';


export const Leg = (props) => {
  const {navigate} = props.navigation;
  let { startLocation, endLocation, startDate, endDate} = props.navigation.getParam('leg')
  let  tripId  = props.navigation.getParam('tripId')
  let leg = props.navigation.getParam('leg')
  return (
      <View style={styles.container}>

      <WandererHeader />

        <ScrollView>

          <View>
            <Text style={styles.text}>{leg.name}</Text>
            <View style={styles.borderContainer}>
            <Text style={styles.headerText}>Start Location</Text>
            <Text style={styles.text}>{startLocation}</Text>
            <Text style={styles.dateText}>{startDate}</Text>
            </View>
            <View style={styles.borderContainer}>
            <Text style={styles.headerText}>End Location</Text>
            <Text style={styles.text}>{endLocation}</Text>
            <Text style={styles.dateText}>{endDate}</Text>
            </View>
          </View>
            <View style={styles.sideBySideContainer}>
          <TouchableOpacity style={styles.sideBySideButton}>
            <Text style={styles.buttonText} onPress={() => navigate('Transportation', { leg, userId: props.navigation.getParam('userId') })}>Transportation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideBySideButton}>
            <Text style={styles.buttonText} onPress={() => navigate('Lodging', {leg, userId: props.navigation.getParam('userId')})}>Lodging</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
              <Text onPress={() => navigate('LegForm', { leg, tripId, userId: props.navigation.getParam('userId') })} style={styles.button}>Edit Leg</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

        <WandererFooter navigate={navigate} userId={props.navigation.getParam('userId')} />
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
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
  borderContainer: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    width: 330,
    marginLeft: 20,
    marginVertical: 10,
    marginBottom: 10,
    height: 170
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
  sideBySideContainer: {
    flex: 1,
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-around"
  }, 
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
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
    height: 64,
    margin: 10,
    fontSize: 30,
    padding: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "#1C4263",
    alignItems: "stretch"
  }
});


