import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetTypeAPI from '../apis/GetTypeAPI';

export default function HomePage({ navigation }) {

  return (
    <View style={styles.background}>
      <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>
      <Text  numberOfLines={1} adjustsFontSizeToFit style= {styles.text}>Welcome</Text>
      <Text numberOfLines={5} adjustsFontSizeToFit style={styles.textUnder}>
        This app supports the purpose of{'\n'}
        <View style={styles.urls}>
            <Pressable onPress={() => navigation.navigate("W4W Info")}>
            <Text style={{ textDecorationLine: 'underline', color: 'lightblue', fontSize: 18}}>Water for the World Workshop</Text>
            </Pressable>
        </View>
        {'\n'} - to introduce the issues surrounding clean drinking water in different parts of the world.
      </Text>
      
      <Text  numberOfLines={5} adjustsFontSizeToFit style= {styles.textUnder}>If you have been asked by your teacher instructor/teacher/presenter to login, please continue with the login button</Text>
      <Pressable style={styles.button} onPress={async () => {
                    let user = await AsyncStorage.getItem("user");
                    if (user == null){
                        navigation.navigate("Sign in") ;
                    }  else {
                        navigation.navigate("Already logged")

        }}}>
        <Text style={styles.textButton}>
          Login
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
      </Pressable>
      <Image source={require('../assets/tap-water.gif')}  style={styles.gifstyle}/>
      <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Pre questionnaire 1")}>
        <Text style={styles.textButton}>
          Skip to Pre-Questionnaire
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
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
    marginTop: Dimensions.get('window').height/45,
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold',
  },
  textUnder:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/55,
    textAlign:'center',
    fontSize:18,
    marginHorizontal: Dimensions.get('window').width/ 12,
    // marginRight: Dimensions.get('window').width/ 12,
  },
  urls:{
    marginHorizontal: Dimensions.get('window').width/ 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton:{
    color: '#03DAC5',
    textAlign:'center',
    fontSize:14,
    fontWeight: 'bold',
    flex: 5
  },
  button: {
    width:  Dimensions.get('window').width / 3,
    flexDirection: 'row',
    padding: 12,
    alignSelf:'center',
    // marginLeft: Dimensions.get('window').width / 3,
    marginTop: Dimensions.get('window').height / 95,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  button2: {
    width:  Dimensions.get('window').width / 1.5,
    flexDirection: 'row',
    padding: 12,
    //marginLeft: Dimensions.get('window').width / 4,
    marginTop: Dimensions.get('window').height / 45,
    alignSelf:'center',
    // marginBottom: Dimensions.get('window').height/ -4,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  arrow:{
    flex: 1,
    marginTop: 2
  },
  gifstyle:{
    // {margin:30, left: 0, top: 0, width: 250, height: 250, alignSelf: 'center'}
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 50,
    marginBottom: Dimensions.get('window').height/ 270,
    // marginLeft: Dimensions.get('window').width / 12,
    // marginRight: Dimensions.get('window').width / 12,
    width: Dimensions.get('window').width / 1.75,
    height: Dimensions.get('window').height / 3.2,
  },
  ewblogo:{
    right: Dimensions.get('window').width / -1.35,
    // alignSelf: 'flex-end',
    bottom: Dimensions.get('window').height / -15,
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 17.5,
  },
  w4twlogo: {
    // marginTop: Dimensions.get('window').height / 25,
    // marginBottom: Dimensions.get('window').height/70,
    alignSelf: 'center',
    // width: 120,
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 17.5,
    bottom: Dimensions.get('window').height / 100,
    // flex: 1,
  },
});
