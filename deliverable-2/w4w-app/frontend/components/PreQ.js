import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetTypeAPI from '../apis/GetTypeAPI';




export default function PreQ({ navigation }) {
    return (
        <View style={styles.background}>
          <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>
                {/* <View style={styles.backinputview}> */}
    <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}} onPress={async () => {
      let user = await AsyncStorage.getItem('user');
      if (user == null){
          navigation.navigate("Home page") 
          return;
      } else{
      let parsed = await JSON.parse(user);  
      var email = parsed.email;
      var type = await GetTypeAPI(email);
        if (type === "student"){
        navigation.navigate("Student welcome");
        } else if (type === "teacher"){
        navigation.navigate("Teacher welcome");
        } else if (type === null){
        navigation.navigate("Home page");}}
    }}>
      <Icon name='arrow-left' color='#03DAC5' size={25} />
    </Pressable>
  {/* </View> */}
            <Text style={styles.textCaption}>Introduction</Text>
            <Text style={styles.subtext}>The Water for the World Workshop introduces participants to the issues of clean water access and how local economy, geography and literacy are all connected. Using this app, you will try to build a water filter to access clean water for yourself!</Text>

            <View style={styles.skipContainer}>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Pre questionnaire 2")}>
                <Text style={styles.textButton}>
                    Start
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            
      </View>
      {/* <Image source={require('../assets/WFTW.png')}  style={{left: 0, top: 0, width: 110, height: 115, alignSelf: 'center'}}/>
        <Image source={require('../assets/EWB.png')}  style={{right: -150, bottom: 870, width: 100, height:50, alignSelf: 'center'}}/> */}
        <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
      <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1E1E1E',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'
    },
    textCaption: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 8,
        height: Dimensions.get('window').height/7,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    icon: {
        marginTop: Dimensions.get('window').height / 10,
        flex: 1
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 36,
        textAlign: 'center',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height/2,
    },
    skipContainer: {
        flex: 2
      },
      button2: {
        width:  Dimensions.get('window').width / 2,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        marginTop: -200,
        backgroundColor: '#2C2C2C',
        alignItems: 'center',
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
      backinputview:{
        backgroundColor: '#1E1E1E',
        padding:0,
        top: 30,
        right: 189,
      },
      button: {
        width:  Dimensions.get('window').width / 3,
        flexDirection: 'row',
        padding: 15,
        // marginLeft: Dimensions.get('window').width / 3,
        marginTop: Dimensions.get('window').height / -570,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignSelf: 'flex-start',
      },
      ewblogo:{
        // right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -18,
        width: Dimensions.get('window').width / 5,
    	  height: Dimensions.get('window').height / 17.5,
        alignSelf: 'flex-end'
      },
      w4twlogo: {
        bottom: Dimensions.get('window').height / 112,
        alignItems: 'center',
        width: Dimensions.get('window').width / 4,
    	  height: Dimensions.get('window').height / 15.5,
        // flex: 1, 
      },
});