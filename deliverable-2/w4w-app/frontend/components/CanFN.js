import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CanFN({ navigation }){
    return(
        <View style={styles.background}>
            <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>
            
            <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}} onPress={async () => {
                navigation.navigate("GameIns")
                }}>
                <Icon name='arrow-left' color='#03DAC5' size={25} />
            </Pressable>

            <Text style={styles.textCaption}>Canada First Nations</Text>
            <Text style={styles.subtext} numberOfLines={9}>
                Languages: English, French, Cree, Inuktitut, Ojibwe, Innu, Dene, Mi’kmaq, Sioux, Atikamekw and others {"\n"}
                Life Expectancy: 72.5 Years {"\n"}
                Median Income (CAD$): $18,962 {"\n"}
                Improved Drinking Water: 23% of population {"\n"}
                Communities with long-term boil water advisories: 33 {"\n"}
                Population: {"> "}1 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. Loosely put a piece of cheese cloth at the bottom of the filter, then put a piece of cotton plug above that. {"\n"}
                2. Place two layers of fine sand over the cotton plug, followed by 2 layers of coarse sand, followed by one layer each of fine gravel and coarse gravel. {"\n"}
                3. Now, test your water filter to find out how well your filter works and whether or not it’s drinkable. {"\n"}
            </Text>
            <Text style={styles.subtext2}>
                Note: You receive less funding than the rest of Canada and costs for materials are 5 times higher than the rest of Canada due to geographical and political issues. {"\n"} {"\n"}
            </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game", {moneyVal: 350, country: 'canadaFN'})}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    textCaption: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 76,
        marginBottom: Dimensions.get('window').height / 250,
        height: Dimensions.get('window').height/12, 
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 250,
        textAlign: 'left',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.2,
    },
    button2: {
        width:  Dimensions.get('window').width / 2,
        bottom: Dimensions.get('window').height / 50,
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
      subtext2: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 64,
        textAlign: 'left',
        fontSize: 13,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.2,
    },
    ewblogo:{
        right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -15,
        width: Dimensions.get('window').width / 5,
    	height: Dimensions.get('window').height / 17.5,
      },
    //   w4twlogo: {
    //     // top: Dimensions.get('window').height / 4,
    //     bottom: Dimensions.get('window').height / 15,
    //     // alignItems: "flex-end",
    //     right: Dimensions.get('window').width / 2.75,
    //     width: Dimensions.get('window').width / 4,
    // 	  height: Dimensions.get('window').height / 15.5,
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