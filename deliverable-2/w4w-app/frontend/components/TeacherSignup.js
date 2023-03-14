import { Dimensions, StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
import TeacherSignupAPI from '../apis/TeacherSignupAPI';


export default function TeacherSignup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password2, setPassword2] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [school, setSchool] = useState('');
  const [error, setError] = useState('');
  return (
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
      <Icon name='school' color='#03DAC5' size={50} style={styles.icon}/>
      <View style={styles.errview}>
        <Text style={styles.error}>
        {error}
        </Text>
        </View>
      <TextInput
        style={styles.input}
        placeholder="Email [Required]"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setEmail(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="First name [Required]"
        placeholderTextColor={'#03DAC5'}
        onChangeText={e => setFirstName(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last name [Required]"
        placeholderTextColor={'#03DAC5'}
        onChangeText={e => setLastName(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="School"
        placeholderTextColor={'#03DAC5'}
        onChangeText={e => setSchool(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setCity(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setCountry(e)}
      />
      <TextInput secureTextEntry={true}
        style={styles.input}
        placeholder="Password [Required]"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setPassword1(e)}
      />
       <TextInput secureTextEntry={true}
        style={styles.input}
        placeholder="Confirm Password [Required]"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        onChangeText={e => setPassword2(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor={'#03DAC5'}
        label = "User name"
        keyboardType='numeric'
        onChangeText={e => setAge(e)}
      />
      <View style = {styles.inputview}>
        <Pressable style={styles.button} onPress={ async () => {
            var delta = await TeacherSignupAPI(email, password1, password2, firstName, lastName, age, city, country, school);
            if (delta === 0) {
              navigation.navigate("Sign in")
            } else {
              setError("Please fill the required fields properly.");
            }
          }}>
          <Text style={styles.textButton}>
            Register
          </Text>
          <View style={styles.arrow} >
            <Icon name='angle-right' color='#03DAC5' size={15}/>
          </View>
        </Pressable>
      </View>
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
    marginTop: Dimensions.get('window').height / 20,
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
    marginTop: Dimensions.get('window').height/80
  },
  inputview:{
    flex:2
  },
  input:{
    color: 'white',
    backgroundColor:'#2C2C2C',
    width: 4 * Dimensions.get('window').width/7,
    borderRadius: 15,
    height:  Dimensions.get('window').height/23 ,
    paddingLeft: 20,
    borderColor: '#393939',
    borderWidth: 2,
    marginTop: Dimensions.get('window').height/80
  },
  backinputview:{
    backgroundColor: '#1E1E1E',
    padding:0,
    top: 0,
    right: 120,
  },
  error:{
    color: '#ff000f',
    textAlign:'center',
    fontSize:15,
    padding:20,
    fontWeight: 'bold'
  },
  errview:{
    backgroundColor: '#1E1E1E',
    height: Dimensions.get('window').height/70,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: Dimensions.get('window').height/20
  }
});
