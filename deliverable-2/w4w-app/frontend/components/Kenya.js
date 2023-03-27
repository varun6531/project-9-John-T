import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Kenya({ navigation }){
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
                1. Loosely put a piece of cheese XXXXX of the filter, then put X XXXXX of xxxx plug XXXXX that. {"\n"}
                2. Place XXX layers of fine XXXX over the cotton XXXX, followed by X layers of XXXXX sand, followed by one XXXX each of fine XXXXX and XXXX gravel. {"\n"}
                3. If XXX don’t have enough XXXXX then try different combinXXXXXX. {"\n"}
                4. Now, XXXX your water XXXXX to find out how well your XXXXXX works and XXXXX or not it’s XXXXX.
            </Text>
            <Text style={styles.subtext2}>
                Note: You will have difficulty reading this – this is due to the literacy rate in this country. {"\n"}
            </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game", {moneyVal: 30})}>
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
        marginTop: Dimensions.get('window').height / 80,
        height: Dimensions.get('window').height/12, 
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 84,
        textAlign: 'left',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.25,
    },
    subtext2: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 64,
        textAlign: 'left',
        fontSize: 13,
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
        marginTop: Dimensions.get('window').height / -200,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C'
      },
    ewblogo:{
        right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -15,
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