import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GetTypeAPI from '../apis/GetTypeAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ThankYou({ navigation }){
    return(
        <View style={styles.background}>
            <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>
            <Text style={styles.textCaption}> Great Job! </Text>

            <Text style={styles.subtext} numberOfLines={7}>
                Thank you for using our app. We hope that you learn
                a lot from the simulation. Please feel free to share 
                this app to your friends and family to help us raise
                awareness regarding clean water issue around the world.
                </Text>

            <View style={styles.skipContainer}>
                <Pressable style={styles.button2} numberOfLines={1} onPress={async () => {await AsyncStorage.removeItem("user"); navigation.navigate("Home page")}}>
                    <Text style={styles.textButton}>
                        Log Out
                    </Text>
                    <View style={styles.arrow} >
                        <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>

                <Pressable style={styles.button2} numberOfLines={1} onPress={async () => {
                    navigation.navigate("Home page");}}>
                    <Text style={styles.textButton}>
                        Home
                    </Text>
                    <View style={styles.arrow} >
                        <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>
            </View>
            {/* <Image source={require('../assets/WFTW.png')}  style={{left: 0, top: 0, width: 110, height: 115, alignSelf: 'center'}}/>
        <Image source={require('../assets/EWB.png')}  style={{right: -150, bottom: 750, width: 100, height:50, alignSelf: 'center'}}/> */}
            <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
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
    textCaption: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 8,
        height: Dimensions.get('window').height/7,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 36,
        textAlign: 'center',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height/6,
    },
    skipContainer: {
        flex: 2,
        marginTop: Dimensions.get('window').height/40,
      },
      button2: {
        width:  Dimensions.get('window').width / 2,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignItems: 'center',
        marginTop: Dimensions.get('window').height / 36,
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
        flex:5,
      },
      ewblogo:{
        // right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -18,
        width: Dimensions.get('window').width / 5,
    	  height: Dimensions.get('window').height / 17.5,
        alignSelf: 'flex-end'
      },
    //   w4twlogo: {
    //     bottom: Dimensions.get('window').height / 112,
    //     alignItems: 'center',
    //     width: Dimensions.get('window').width / 4,
    // 	  height: Dimensions.get('window').height / 15.5,
    //     // flex: 1, 
    //   },
    w4twlogo: {
        bottom: Dimensions.get('window').height / 180,
        alignItems: 'flex-start',
		width: Dimensions.get('window').width / 4,
    	height: Dimensions.get('window').height / 15.5,
		position: 'absolute',
        bottom: 20,
        left: 10,
      },
});