import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


export const Leg = (props) => {

  const {navigate} = props.navigation;
  let { name, startDate, endDate } = props.navigation.getParam('leg')
  return (
      <View style={styles.container}>

      {/* <Header /> */}

        <ScrollView>

          <View style={styles.tripHeader}>
            <Text style={styles.text}>{name}</Text>
            <TouchableOpacity>
              <Text style={styles.editTripButton}>Edit Leg</Text>
            </TouchableOpacity>


          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>{startDate} - {endDate}</Text>
          </View>

        </ScrollView>

        <Footer navigate={navigate} />
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
    
  }, 
  tripHeader: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#1C4263',
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    color: 'white',
    marginVertical: 10,
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
  }
});


