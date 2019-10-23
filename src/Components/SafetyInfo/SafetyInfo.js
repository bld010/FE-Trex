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

export function SafetyInfo(props) {

    const {navigate} = props.navigation;


    return (
      <View style={styles.container}>
        <Header/>
        <Text style={styles.title}>HOLA</Text>
        <Footer navigate={navigate}/>
      </View>
    )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  }, 
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  }
})
