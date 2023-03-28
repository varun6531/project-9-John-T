import { Dimensions, StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';
import { useEffect } from 'react'


export default function Intro({ navigation }) {
  useEffect(() => {setTimeout(() => navigation.navigate("Home page"), 3000);}, []);
  return (
    <Pressable onPress={() => {navigation.navigate("Home page");}} style={styles.background}>
      <Text  numberOfLines={1} adjustsFontSizeToFit style= {styles.text}>Presented by:</Text>
      <Image source={require('../assets/WFTW.png')} style={styles.imageTop}/>
      <Image source={require('../assets/EWB.png')} style={styles.imageBottom}/>
    </Pressable>
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
    marginTop: Dimensions.get('window').height/6,
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold'
  },
  imageTop: {
    height: Dimensions.get('window').height/4,
    width: Dimensions.get('window').height/2,
    marginTop: Dimensions.get('window').height/16,
    marginRight: Dimensions.get('window').width/10
  },
  imageBottom: {
    height: Dimensions.get('window').height/4,
    width: Dimensions.get('window').height/2,
    marginTop: Dimensions.get('window').height/16,
    right: 20
  },

});
