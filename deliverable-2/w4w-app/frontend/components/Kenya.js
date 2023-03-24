import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Kenya({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.textCaption}>Kenya</Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Languages: English, Kiswahili, and others {"\n"}
                Life Expectancy: 64.6 Years {"\n"}
                Median Income (CAD$): $3,500 {"\n"}
                Unimproved Drinking Water: 36.8% of population {"\n"}
                Literacy Rate: 78% {"\n"}
                Population: {"> "}56 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. ** put a *!* plug in the *!88 of the cut *!*!8 then *!!* the *@*@* of the *@**@* with a *@*8 of cheese hqwueh secured ncuahu a rubber.{"\n"}
                2. @@@* a 1-cm *@*** of @*@*@ sand @*@*@ the cotton plug 8@*@* by 1-cm of ^@@@^@ sand, and *@** gravel. {"\n"}
                3. @*@* the filter by *@****@ carefully pouring @*@* of clean water (@*@*@8 a bucket). {"\n"}
                4. Place the *@@* over a plastic cup. Now @*@* your water filter by pouring @*@** of the dirty water through the filter. {"\n"}
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