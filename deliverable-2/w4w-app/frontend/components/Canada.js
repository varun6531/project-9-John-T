import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function Canada({ navigation }){
    return(
        <View style={styles.background}>
            <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>

            <Pressable style={styles.button} onPress={async () => {
                navigation.navigate("GameIns")
                }}>
                <View style={styles.arrow}>
                    <FontAwesome5 name='angle-left' color='#03DAC5' size={15} />
                </View>
                <Text style={styles.textButton}>
                    Go back
                </Text>
            </Pressable>

            <Text style={styles.textCaption}>Canada</Text>
            <Text style={styles.subtext} numberOfLines={7}>
                Languages: English, French {"\n"}
                Life Expectancy: 82 Years {"\n"}
                Median Income (CAD$): $27,097 {"\n"}
                Improved Drinking Water: 99.8% of population {"\n"}
                Literacy Rate: 99% {"\n"}
                Population: {"> "}38 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. Loosely put a piece of cheese cloth at the bottom of the filter, then put a piece of cotton plug above that. {"\n"}
                2. Place two layers of fine sand over the cotton plug, followed by 2 layers of coarse sand, followed by one layer each of fine gravel and coarse gravel. {"\n"}
                3. Now, test your water filter to find out how well your filter works and whether or not it’s drinkable. {"\n"}
            </Text>
            {/* <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game", {country: "Canada"})}>
             */}
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
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
    button: {
        width:  Dimensions.get('window').width / 3,
        flexDirection: 'row',
        padding: 15,
        marginLeft: Dimensions.get('window').width / -1.7,
        marginTop: Dimensions.get('window').height / -16,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C'
      },
    ewblogo:{
        right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -100,
        width: 100, 
        height: 50, 
      },
      w4twlogo: {
        bottom: Dimensions.get('window').height / 112,
        alignItems: 'center',
        width: 120, 
        height: 60, 
      },
});