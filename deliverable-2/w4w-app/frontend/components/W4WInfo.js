import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetTypeAPI from '../apis/GetTypeAPI';

export default function W4WInfoPage({ navigation }) {

    


  return (
    <View style={styles.background}>
        <Text  numberOfLines={1} adjustsFontSizeToFit style= {styles.text}>Water for the World (W4W)</Text>
        <Text numberOfLines={5} adjustsFontSizeToFit style= {styles.textUnder}>Workshops are delivered by the Engineers Without Borders (EWB) volunteers to school and university students across Canada. Workshops are also available for corporate and community events by contacting W4W at: </Text>
        <Text numberOfLines={1} adjustsFontSizeToFit style= {styles.description}> Email</Text>
        <Pressable onPress={() => Linking.openURL('mailto:waterfortheworldworkshops@gmail.com')}>
        <Text style={styles.links}>waterfortheworldworkshops@gmail.com</Text>
        </Pressable>
        <Text numberOfLines={1} adjustsFontSizeToFit style= {styles.description}> Facebook</Text>
        <Pressable onPress={() => Linking.openURL('https://www.facebook.com/WaterForTheWorld/')}>
            <Text style={styles.links}>www.facebook.com/WaterForTheWorld/</Text>
        </Pressable>
        <Text numberOfLines={1} adjustsFontSizeToFit style= {styles.description}> Instagram</Text>
        <Pressable onPress={() => Linking.openURL('https://www.instagram.com/water4tworld/?hl=en')}>
            <Text style={styles.links}>www.instagram.com/water4tworld/?hl=en</Text>
        </Pressable>
        <Text numberOfLines={1} adjustsFontSizeToFit style= {styles.description}> Twitter</Text>
        <Pressable onPress={() => Linking.openURL('https://twitter.com/EWBWater4World')}>
            <Text style={styles.links}>twitter.com/EWBWater4World</Text>
        </Pressable>
        <Text numberOfLines={1} adjustsFontSizeToFit style= {styles.description}> Website</Text>
        <Pressable onPress={() => Linking.openURL('https://waterfortheworldto.wordpress.com/contact/')}>
            <Text style={styles.links}>waterfortheworldto.wordpress.com/contact/</Text>
        </Pressable>
      
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E1E1E',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  text:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/12,
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold',
  },
  textUnder:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/30,
    textAlign:'center',
    fontSize:18,
    marginLeft: Dimensions.get('window').width/ 12,
    marginRight: Dimensions.get('window').width/ 12,
  },
  description:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/50,
    textAlign:'center',
    marginLeft: Dimensions.get('window').width/ 12,
    marginRight: Dimensions.get('window').width/ 12,
    fontSize:16,
  },
  links:{
    color: 'lightblue',
    textAlign:'center',
    fontSize:15,
    textDecorationLine: 'underline',
  },
});
