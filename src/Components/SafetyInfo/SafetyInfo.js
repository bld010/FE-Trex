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

export function SafetyInfo(props) {

    const {navigate} = props.navigation;


    return (
      <View style={styles.container}>
        <WandererHeader/>
        <ScrollView>
        <Text style={styles.title}>HOLA</Text>
        </ScrollView>
        <WandererFooter navigate={navigate}/>
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
