import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export function LegForm(props) {
  const {navigate} = props.navigation;
  return (
    <View>
      <Header />
      <ScrollView>
      </ScrollView>        
      <Footer navigate={navigate} />
    </View>
  )
}
