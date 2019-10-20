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
          <View style={styles.buttonsContainer}>
            <Text style={styles.text}>I am a ...</Text>
            <Button style={styles.button} title="Wanderer"/>
            <Button style={styles.button} title="Follower" />
          </View>
        </ScrollView>
  
      
        
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    
  }, 
  text: {
    color: 'white',
    marginVertical: 90,
    textAlign: 'center',
    fontSize: 30
  },
  header: {
    backgroundColor: '#1C4263',
    color: 'white',
    paddingTop: 60,
    paddingLeft: 10,
    // height: 'auto',
    top: 0,
    fontSize: 50,
  }, 
  buttonsContainer: {
    width: 100,
    color: "#1C4263",
    height: 30,
    // flexDirection: "row",
    borderWidth: 2,
    borderColor: "#1C4263"
  },
  button: {
    borderColor: 'white',
    borderWidth: 4,
    borderStyle: 'solid',
    width: 100,
    backgroundColor: '#1C4263'
  }
});
