import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GetTypeAPI from '../apis/GetTypeAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ThankYou({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.textCaption}> Great Job! </Text>

            <Text style={styles.subtext} numberOfLines={7}>
                Thank you for using our app. We hope that you learn
                a lot from the simulation. Please feel free to share 
                this app to your friends and family to help us raise
                awareness regarding clean water issue around the world.
                </Text>

            <View style={styles.skipContainer}>
                <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Sign in")}>
                    <Text style={styles.textButton}>
                        Log Out
                    </Text>
                    <View style={styles.arrow} >
                        <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>

                <Pressable style={styles.button2} numberOfLines={1} onPress={async () => {
                    let user = await AsyncStorage.getItem('user');  
                    let parsed = JSON.parse(user);  
                    var email = parsed.email;
                    var type = await GetTypeAPI(email);
              if (type === "student"){
                navigation.navigate("Student welcome");
              } else if (type === "teacher"){
                navigation.navigate("Teacher welcome");
              } else if (type === null){
                navigation.navigate("Pre questionnaire 1");
              }}}>
                    <Text style={styles.textButton}>
                        Home
                    </Text>
                    <View style={styles.arrow} >
                        <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                    </View>
                </Pressable>
            </View>
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
        marginTop: Dimensions.get('window').height/4,
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
});