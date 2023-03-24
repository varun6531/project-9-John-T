import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Ghana({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.textCaption}>Ghana</Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Languages: English, Asante, Ewe, Fante Boron/Brong Dagomba, others {"\n"}
                Life Expectancy: 67.4 Years {"\n"}
                Median Income (CAD$): $4,700 {"\n"}
                Unsafe Drinking Water: 11.3% of population {"\n"}
                Literacy Rate: 76.6% {"\n"}
                Population: {"> "}33 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. ***** put a cotton ***** neck of the cut ****, then !!!!! the neck of the !*!**** a piece of cheese ****!@# a rubber band. {"\n"}
                2. Pour a 1-cm *!*!*** of fine sand over the *!*!* plug, *!*!** 1-cm of !*@#!*!@#* fine gravel, and coarse *!*!*!*. {"\n"}
                3. Clean *!*!*!* filter *!***!** and carefully *!*!*!@**!# of clean water (over a bucket). {"\n"}
                4. !!*@!#*!@#*! filter over a plastic !!@^#!!^!#, test *!!@#*!*@#!* water filter by pouring !&#!@#^!!@#^! of the dirty !*@!#*!@#* through the filter. {"\n"}
            </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Image source={require('../assets/WFTW.png')}  style={{left: 0, top: 0, width: 110, height: 115, alignSelf: 'center'}}/>
            <Image source={require('../assets/EWB.png')}  style={{right: -150, bottom: 750, width: 100, height:50, alignSelf: 'center'}}/>
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
        marginTop: Dimensions.get('window').height / 36,
        height: Dimensions.get('window').height/12, 
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 64,
        textAlign: 'left',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.25,
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
});