import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




export default function GameIns({ navigation }) {
    return (
        <View style={styles.background}>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext}>Click on the material to select it.{'\n\n'} Selected the layer on the filter you would like to place the material at and long press the layer to remove it.{'\n\n'} Enjoy!</Text>
            <View style={styles.skipContainer}>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Canada")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Kuwait")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("CanFN")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("SAfrica")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Ghana")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Kenya")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Malawi")}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
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
        flexDirection: 'column'
    },
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'
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
    icon: {
        marginTop: Dimensions.get('window').height / 10,
        flex: 1
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
        flex: 2
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
