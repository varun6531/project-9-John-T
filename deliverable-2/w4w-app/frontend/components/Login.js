import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Pressable, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GetTypeAPI from '../apis/GetTypeAPI';
import LoginAPI from '../apis/LoginAPI';




export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <>
    <View style={styles.background}>
    <View style={styles.backinputview}>
    <Pressable style={styles.button} onPress={async () => {
      navigation.navigate("Sign in")
    }}>
      <Text style={styles.textButton}>
        Go back
      </Text>
      <View style={styles.arrow}>
        <Icon name='angle-right' color='#03DAC5' size={15} />
      </View>
    </Pressable>
  </View>
        <Icon name='user-circle' color='#03DAC5' size={100} style={styles.icon} />
        <View style={styles.errview}>
        <Text style={styles.error}>
        {error}
        </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="example@domain.com"
          onChangeText={newE => setEmail(newE)}
          placeholderTextColor={'#03DAC5'}
          label="Email" />
              
        <TextInput secureTextEntry={true}
          style={styles.input}
          placeholder="********"
          placeholderTextColor={'#03DAC5'}
          onChangeText={newP => setPassword(newP)}
          label="Password" />
        <View style={styles.inputview}>
          <Pressable style={styles.button} onPress={async () => {
            var delta = await LoginAPI(email, password);
            if (delta === 0) {
              var type = await GetTypeAPI(email);
              if (type === "student"){
                navigation.navigate("Student welcome");
              } else if (type === "teacher"){
                navigation.navigate("Teacher welcome");
              } else if (type === null){
                navigation.navigate("Pre questionnaire 1");
              }
            } else {
              setError("Error: Invalid Email and Password Combination");
            }
          } }>
            <Text style={styles.textButton}>
              Get Started
            </Text>
            <View style={styles.arrow}>
              <Icon name='angle-right' color='#03DAC5' size={15} />
            </View>
          </Pressable>
        </View>
        
      </View></>
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
  error:{
    color: '#ff000f',
    textAlign:'center',
    fontSize:15,
    padding:20,
    fontWeight: 'bold'
  },
  text:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/6,
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold'
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
    marginTop: Dimensions.get('window').height / 12,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  arrow:{
    flex: 1,
    marginTop: 2
  },
  icon:{
    marginTop: Dimensions.get('window').height / 20,
    flex: 1,
    paddingBottom: 1
  },
  errview:{
    backgroundColor: '#1E1E1E',
    height: Dimensions.get('window').height/70,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  inputview:{
    flex:3
  },
  input:{
    color: 'white',
    backgroundColor:'#2C2C2C',
    width: 4 * Dimensions.get('window').width/7,
    borderRadius: 15,
    height:  Dimensions.get('window').height/18 ,
    paddingLeft: 20,
    borderColor: '#393939',
    borderWidth: 2,
    marginTop: Dimensions.get('window').height/18 
  },
  backinputview:{
    backgroundColor: '#1E1E1E',
    padding:0,
    top: 0,
    right: 120,
  }
});
