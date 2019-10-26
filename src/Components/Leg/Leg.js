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
  let leg = props.navigation.getParam('leg')
  return (
      <View style={styles.container}>

      <WandererHeader />

        <ScrollView>

          <View style={styles.legHeader}>
            <Text style={styles.text}>{startLocation}</Text>
            <Text style={styles.text}>{endLocation}</Text>
            <TouchableOpacity>
              <Text onPress={() => navigate('LegForm', { leg })} style={styles.editLegButton}>Edit Leg</Text>
            </TouchableOpacity>


          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>{startDate} thru {endDate}</Text>
          </View>

        </ScrollView>

        <WandererFooter navigate={navigate} />
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
  legHeader: {
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
    fontSize: 10,
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
  editLegButton: {
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


