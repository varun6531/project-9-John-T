import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Malawi({ navigation }){
    return(
        <View style={styles.background}>
            <Text style={styles.textCaption}>Malawi</Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Languages: English, Chichewa, Chinyanja, Chiyao, and others {"\n"}
                Life Expectancy: 62.2 Years {"\n"}
                Median Income (CAD$): $1,200 {"\n"}
                Unimproved Drinking Water: 9.8% of population {"\n"}
                Literacy Rate: 62.1% of population age 15 and above {"\n"}
                Population: {"> "}20 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. Loosely put a cotton **** in the ***** of the cut bottle, then *** the neck of the **** with a **** cheese cloth secured with a **** band. {"\n"}
                2. Pour a 1-cm layer of *!@!*@ over the cotton plug, followed by 1-cm **** * * sand, fine *****@*@, and @@^#@!^@ gravel. {"\n"}
                3. Clean the filter by slowly and carefully pouring through 1-litre of !@@#*!@@#* water (over a bucket). {"\n"}
                4. Place the filter over a plastic cup. Now, test your !@*#@!@*#@ filter !@*#@*!@#@! half of the dirty !@*#@!*@@# through the filter. {"\n"}
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