import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SAfrica({ navigation }){
    return(
        <View style={styles.background}>
            <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>

            <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}} onPress={async () => {
                navigation.navigate("GameIns")
                }}>
                <Icon name='arrow-left' color='#03DAC5' size={25} />
            </Pressable>

            <Text style={styles.textCaption}>South Africa</Text>
            <Text style={styles.subtext} numberOfLines={9}>
                Languages: isiZulu, isiXhosa, Afrikaans, Sepedi, Setswana, English, Sesotho, Xitsonga siSwati, others {"\n"}
                Life Expectancy: 64.1 Years {"\n"}
                Median Income (CAD$): $13,600 {"\n"}
                Unimproved Drinking Water: 18.6% of population {"\n"}
                Literacy Rate: 94.4% {"\n"}
                Population: {"> "}61 million
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
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game", {moneyVal: 65, country: 'SA'})}>
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
        marginTop: Dimensions.get('window').height / -80,
        textAlign: 'left',
        fontSize: 14,
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
        bottom: Dimensions.get('window').height / -50,
        alignItems: 'center',
        width: 120, 
        height: 60, 
      },
});