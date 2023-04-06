import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetTypeAPI from '../apis/GetTypeAPI';

export default function W4WInfoPage({ navigation }) {

    


  return (
    <View style={styles.background}>
      <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>
      <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}} onPress={async () => {
          navigation.navigate("Home page")
        }}>
          <Icon name='arrow-left' color='#03DAC5' size={25} />
        </Pressable>

        <Text  numberOfLines={1} adjustsFontSizeToFit style= {styles.text}>Water for the World (W4W)</Text>
        <Text numberOfLines={5}  style= {styles.textUnder}>Workshops are delivered by the Engineers Without Borders (EWB) volunteers to school and university students across Canada. Workshops are also available for corporate and community events by contacting W4W at: </Text>
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
        <Pressable onPress={() => Linking.openURL('https://www.torontopro.ewb.ca/w4tw')}>
            <Text style={styles.links}>www.torontopro.ewb.ca/w4tw</Text>
        </Pressable>
        <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
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
    fontSize:14,
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
  button: {
    width:  Dimensions.get('window').width / 3,
    flexDirection: 'row',
    padding: 15,
    // marginLeft: Dimensions.get('window').width / 3,
    marginTop: Dimensions.get('window').height / 20,
    alignSelf: 'flex-start',
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  arrow:{
    flex: 1,
    marginTop: 2
  },
  textButton:{
    color: '#03DAC5',
    textAlign:'center',
    fontSize:14,
    fontWeight: 'bold',
    flex: 5
  },
  ewblogo:{
    // right: Dimensions.get('window').width / -1.55,
    // bottom: Dimensions.get('window').height / -20,
    marginTop: Dimensions.get('window').height / 15,
    marginBottom: Dimensions.get('window').height / -9,
    alignSelf: 'flex-end',
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 17.5,
  },
  w4twlogo: {
    // marginTop: Dimensions.get('window').height / 25,
    marginBottom: Dimensions.get('window').height/30,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 6,
    flex: 1,
  },
});
