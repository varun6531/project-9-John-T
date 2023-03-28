import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, ImageBackground } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GetTypeAPI from '../apis/GetTypeAPI';




export default function Result100({ route, navigation }) {
    const { result } = route.params;
    const getImage = () => {
      if(result == '100'){
        return <Image style = {styles.filter} source={require('../assets/100.png')} />
      }
    }

    return (
        <View style={styles.background}>
            <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>
            <Text style={styles.textCaption}>Test Results</Text>
            {getImage()}
            {/* <Image style = {styles.filter} source={require(img)} /> */}
            <Text style={styles.subtext}>
                Your dirty water is now {result} water. {'\n\n'} 
                CONGRATULATIONS! - you can drink this water - 
                it is clean enough to drink 
            </Text>

            <View style={styles.skipContainer}>
            <Pressable style={styles.button2} numberOfLines={1} onPress={async () => {
                let user = await AsyncStorage.getItem("user")
                if (user == null){
                    navigation.navigate("Tynl") 
                }  else {
                    let parsed = await JSON.parse(user);  
                    var email = parsed.email;
                    var type = await GetTypeAPI(email);
                        if (type == null){
                        navigation.navigate("Thank you");
                        }
                    else {navigation.navigate("Post questionnaire 1")}}
             }}>
                <Text style={styles.textButton}>
                    Continue
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("GameIns")}>
                <Text style={styles.textButton}>
                    Back to filter build
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
      
      </View>
      
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
        flexDirection: 'column',
    },
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'
    },
    textCaption: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 20,
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
        height: Dimensions.get('window').height/2,
    },
    skipContainer: {
        flex: 1,
        marginTop: -Dimensions.get('window').height/3,
      },
      button2: {
        width:  Dimensions.get('window').width / 1.5,
        marginTop: Dimensions.get('window').height/36,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
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
        flex: 5,
      },
      filter:{
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').height / 4,
        marginTop: Dimensions.get('window').height / -12,
        flexDirection: 'row',
        padding: 12,
        right: Dimensions.get('window').width / 23,
      },
      ewblogo:{
        right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -18,
        width: 100, 
        height: 50, 
      },
      w4twlogo: {
        right: Dimensions.get('window').width/-5,
        bottom: Dimensions.get('window').height / -15,
        alignItems: 'center',
        width: 120, 
        height: 60, 
      },
});