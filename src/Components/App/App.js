import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  ScrollView  
} from 'react-native';

export default function App() {

  


    return (
      <View style={styles.container}>
        <Text style={styles.header}>Trex</Text>
        <ScrollView>
          <Text style={styles.text}>Welcome to Trex</Text>
          <View>
            <Text style={styles.text}>I am a ...</Text>
            <Button style={styles.button} title="Wanderer"/>
            <Button title="Follower" />
          </View>
        </ScrollView>
  
      
        
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'stretch',
    
  }, 
  text: {
    color: 'white',
    marginVertical: 90,
    textAlign: 'center',
    fontSize: 30
  },
  header: {
    backgroundColor: 'purple',
    color: 'white',
    paddingTop: 60,
    paddingLeft: 10,
    // height: 'auto',
    top: 0,
    fontSize: 50,
  }, 
  button: {
    borderColor: 'white',
    borderWidth: 4,
    borderStyle: 'solid'
  }
});
