import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Button, Alert, SafeAreaView, FlatList,} from 'react-native';




const Homepage = () => (

  <View style={styles.container}>
        <ImageBackground source={require("./gallery/book.png")} 
     resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Library</Text>
    </ImageBackground>

   

    <View  style={styles.Button}>
    <Button
            
          title="Title"
          color="#841584"
          onPress={() => Alert.alert('Title page')}/> 
          
          <Button
            
            title="Author"
            color="#FF3390"
            onPress={() => Alert.alert('Author page')}/>
            <Button
            
            title="Genre"
            color="#9933FF"
            onPress={() => Alert.alert('Genre page')}/>
           <Button
           
            title="Number of pages"
            color="#A530B1"
            onPress={() => Alert.alert('Number of pages')}/>

            
            
     
      <Text style={styles.baseText}>
The Giver{"\n"}  
Lois Lowry{"\n"}
Dystopian Fiction{"\n"}
195 pages
    </Text>

    <Text style={styles.baseText2}>
    Twilight{"\n"}
    Stephenie Meyer{"\n"}
    Fantasy Romance{"\n"}
    498 pages
    </Text>

    <Text style={styles.baseText3}>
    The Cliffs{"\n"}
    Scott Cawthon{"\n"}
    Horror{"\n"}
    224 pages
    </Text>
    
</View>
      </View>
    
    

);



const styles = StyleSheet.create({
  container: {
   // flex: 1,
    height:1300,
  },
  image: {
    flex: 1,
   
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  Button: {
    alignItems: 'center',
    top:-700,
    },
    baseText: {
      color: 'salmon',
      bottom: -600,
      fontWeight: 'bold',
      left: -200,
      fontSize: 20,

    },
    baseText2: {
      color: 'salmon',
      bottom: -600,
      fontSize: 20,
      fontWeight: 'bold',
      top: 503,
    },
    baseText3: {
      color: 'salmon',
      
      fontSize: 20,
      fontWeight: 'bold',
      top: 408,
      left: 200,
    }
  
    
});

export default Homepage;
