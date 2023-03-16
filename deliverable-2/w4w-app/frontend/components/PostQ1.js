import React, { Component } from "react";
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput, FlatList, ScrollView } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AnswersAPI from '../apis/AnswerAPI'
import EmailAPI from '../apis/EmailAPI'


export default function PostQ1({ navigation }){

    const [q1, setQ1] = useState('NO ANSWER');
    const [q2, setQ2] = useState('NO ANSWER');
    const [q3, setQ3] = useState('NO ANSWER');
    const [q4, setQ4] = useState('NO ANSWER');


    return (
        <View style={styles.background}>
            <ScrollView showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
                <Text style={styles.textCaption}>Question 1</Text>
                <Text style={styles.subtext}>
                    How did the money and literacy rate you were given for each affect your ability to build a water filter?
                </Text>
                <TextInput
                    onChangeText={beee=>setQ1(beee)}
                    style={styles.input}
                    placeholder="Comment"
                    placeholderTextColor={'#03DAC5'}
                    label = "User name"
                />
                <Text style={styles.textCaption}>Question 2</Text>
                <Text style={styles.subtext}>
                    Do you think water and its use around the world is fair and equal? Should people have the same access to water everywhere?
                </Text>
                <TextInput
                    onChangeText={beee=>setQ2(beee)}
                    style={styles.input}
                    placeholder="Comment"
                    placeholderTextColor={'#03DAC5'}
                    label = "User name"
                />
                <Text style={styles.textCaption}>Question 3</Text>
                <Text style={styles.subtext}>
                What can you do in your daily life to conserve water?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={beee=>setQ3(beee)}
                    placeholder="Comment"
                    placeholderTextColor={'#03DAC5'}
                    label = "User name"
                />
                <Text style={styles.textCaption}>Question 4</Text>
                <Text style={styles.subtext}>
                What is the most important thing you have learned doing this activity?
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Comment"
                    onChangeText={beee=>setQ4(beee)}
                    placeholderTextColor={'#03DAC5'}
                    label = "User name"
                />
                <View style = {styles.inputview}>
                <Pressable style={styles.button} onPress={async () => {
                    var data = await AnswersAPI(q1, q2, q3, q4);
                    if (data == 0){
                        var cata = await EmailAPI();
                        if (cata == 0){
                            navigation.navigate("Thank you");
                        }
                    }
                    }}>
                <Text style={styles.textButton}>
                    Submit Responses
                </Text>
                <View style={styles.arrow} >
                    <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
                </Pressable>
            </View>
            </ScrollView>

            

            
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
        marginBottom: Dimensions.get('window').height / 300,
        marginTop: Dimensions.get('window').height / 7,
        height: Dimensions.get('window').height/7,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subtext: {
        color: '#03DAC5',
        marginBottom: Dimensions.get('window').height / 30000,
        marginTop: Dimensions.get('window').height / 30000,
        textAlign: 'center',
        fontSize: 16,
        paddingLeft: 0,
        flexDirection: 'column',
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height/6,
    },
    input:{
        color: 'white',
        backgroundColor:'#2C2C2C',
        width: Dimensions.get('window').width - 40,
        
        borderRadius: 15,
        height:  Dimensions.get('window').height/5 ,
        padding: 10,
        borderColor: '#393939',
        borderWidth: 2,
        marginBottom: Dimensions.get('window').height / 160,
        marginTop: Dimensions.get('window').height / 30000,
        textAlign: 'left',
    },
    inputview:{
        flex:0
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
        width:  Dimensions.get('window').width / 2.99,
        flexDirection: 'row',
        padding: 8,
        left: 120,
        marginBottom: Dimensions.get('window').height / 3,
        marginTop: Dimensions.get('window').height / 160,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C'
    },
});