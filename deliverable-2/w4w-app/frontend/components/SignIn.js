import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SignIn({ navigation }) {

  return (
    <View style={styles.background}>
       {/* <View style={styles.backinputview}> */}
       <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>
    <Pressable style={styles.button} onPress={async () => {
      navigation.navigate("Home page")
    }}>
      <View style={styles.arrow}>
        <Icon name='angle-left' color='#03DAC5' size={15} />
      </View>
      <Text style={styles.textButton}>
        Go back
      </Text>
    </Pressable>
  {/* </View> */}
      <Text  numberOfLines={1} adjustsFontSizeToFit style= {styles.text}>Please login.</Text>
      <Text  numberOfLines={5} adjustsFontSizeToFit style= {styles.textUnder}>If you do not have an account, please register below.</Text>
      <Pressable style={styles.button2} onPress={async () => {
                    navigation.navigate("Login") ;
        }}>
        <Text style={styles.textButton}>
          Login
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
      </Pressable>
      <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Teacher signup")}>
        <Text style={styles.textButton}>
          Teacher signup
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
      </Pressable>
      <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Student signup")}>
        <Text style={styles.textButton}>
          Student signup
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
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
  },
  text:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/12,
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold',
  },
  textUnder:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/12,
    textAlign:'center',
    fontSize:18,
    marginLeft: Dimensions.get('window').width/ 12,
    marginRight: Dimensions.get('window').width/ 12,
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
    // marginLeft: Dimensions.get('window').width / 3,
    // marginTop: Dimensions.get('window').height / -50,
    alignSelf: 'flex-start',
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  button2: {
    width:  Dimensions.get('window').width / 2,
    flexDirection: 'row',
    padding: 15,
    marginLeft: Dimensions.get('window').width / 4,
    marginTop: Dimensions.get('window').height / 18,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  arrow:{
    flex: 1,
    marginTop: 2
  },
  backinputview:{
    backgroundColor: '#1E1E1E',
    padding:0,
    top: 0,
    right: 120,
  },
  ewblogo:{
    // right: Dimensions.get('window').width / -1.55,
    // bottom: Dimensions.get('window').height / -20,
    marginTop: Dimensions.get('window').height / 20,
    marginBottom: Dimensions.get('window').height / -20,
    alignSelf: 'flex-end',
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 17.5,
  },
  w4twlogo: {
    // marginTop: Dimensions.get('window').height / 25,
    // marginBottom: Dimensions.get('window').height/30,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 15.5,
    flex: 1,
  },
});
