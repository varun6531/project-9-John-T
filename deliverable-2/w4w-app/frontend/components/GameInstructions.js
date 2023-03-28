import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';




export default function GameIns({ navigation }) {
    return (
        <View style={styles.background}>
         <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>

            {/* <View style={styles.backinputview}> */}
    <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}} onPress={async () => {
      navigation.navigate('Pre questionnaire 8');
    }}>
      <Icon name='arrow-left' color='#03DAC5' size={25} />
    </Pressable>
  {/* </View> */}
            
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} >Click on the material to select it. Select the layer on the filter you would like to place the material at and long press the layer to remove it.{'\n\n'} Select your country and enjoy!</Text>
          <View style={styles.skipContainer}>
            <Text style={styles.subtext2}>LIST A </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Canada")}>
                <Text style={styles.textButton}>
                    Canada
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Kuwait")}>
                <Text style={styles.textButton}>
                    Kuwait
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("CanFN")}>
                <Text style={styles.textButton}>
                    Canada First Nation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Text style={styles.subtext2}>{"\n"}LIST B </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("SAfrica")}>
                <Text style={styles.textButton}>
                    South Africa
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Ghana")}>
                <Text style={styles.textButton}>
                    Ghana
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Kenya")}>
                <Text style={styles.textButton}>
                    Kenya
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Malawi")}>
                <Text style={styles.textButton}>
                    Malawi
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            
      </View>
      {/* <Image source={require('../assets/WFTW.png')}  style={{left: -150, top: 0, width: 110, height: 115, alignSelf: 'center'}}/>
        <Image source={require('../assets/EWB.png')}  style={{right: -150, bottom: 800, width: 100, height:50, alignSelf: 'center'}}/> */}
      <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
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
        marginTop: Dimensions.get('window').height / 30,
        // height: Dimensions.get('window').height/7,
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
        marginTop: Dimensions.get('window').height / 200,
        textAlign: 'center',
        fontSize: 16,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.5,
        // height: Dimensions.get('window').height/2,
    },
    subtext2: {
      color: '#03DAC5',
      marginTop: Dimensions.get('window').height / 60,
      textAlign: 'center',
      fontSize: 16,
      flexDirection: 'column',
      fontWeight: 'bold',
      width: Dimensions.get('window').width / 2,
  },
    skipContainer: {
        flex: 1
      },
      button2: {
        width:  Dimensions.get('window').width / -1.5,
        marginTop: Dimensions.get('window').height / 50,
        flexDirection: 'row',
        padding: 8,
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
      backinputview:{
        backgroundColor: '#1E1E1E',
        padding:0,
        top: 0,
        right: 189,
      },
      button: {
        width:  Dimensions.get('window').width / 3,
        flexDirection: 'row',
        padding: 15,
        marginLeft: Dimensions.get('window').width / -1.75,
        marginTop: Dimensions.get('window').height / -64,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C'
      },
      ewblogo:{
        right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -18,
        width: 100, 
        height: 50, 
      },
      w4twlogo: {
        // top: Dimensions.get('window').height / 4,
        bottom: Dimensions.get('window').height / 112,
        // alignItems: "flex-end",
        right: Dimensions.get('window').width / 2.75,
        width: 120, 
        height: 60, 
      },
});
