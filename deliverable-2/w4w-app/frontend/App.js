import { Dimensions, StyleSheet, View,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Intro from './components/Intro';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import AlreadyLogged from './components/AlreadyLogged';
import PreQ from './components/PreQ';
import TeacherSignup from './components/TeacherSignup';
import StudentSignup from './components/StudentSignup';
import Login from './components/Login';
import StudentWelcome from './components/StudentWelcome';
import TeacherWelcome from './components/TeacherWelcome';
import PreQ2 from './components/PreQ2';
import PreQ3 from './components/PreQ3';
import StudentHR from './components/StudentHR';
import TeacherHR from './components/TeacherHR';
import Game from './components/Game';
import PostQ1 from './components/PostQ1';
import GameIns from './components/GameInstructions';
import GameTest from './components/GameTest';
import ThankYou from './components/ThankYou';
import Canada from './components/Canada';
import Kuwait from './components/Kuwait';
import CanFN from './components/CanFN';
import SAfrica from './components/SAfrica';
import Ghana from './components/Ghana';
import Kenya from './components/Kenya';
import Malawi from './components/Malawi';
import TYNL from './components/TYNL';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={Intro}/>
          <Stack.Screen name="Home page" component={HomePage}/>
          <Stack.Screen name="Sign in" component={SignIn} />
          <Stack.Screen name="Already logged" component={AlreadyLogged}/>
          <Stack.Screen name="Pre questionnaire 1" component={PreQ}/>
          <Stack.Screen name="Pre questionnaire 2" component={PreQ2}/>
          <Stack.Screen name="Pre questionnaire 3" component={PreQ3}/>
          <Stack.Screen name="Game" component={Game}/>
          <Stack.Screen name="GameIns" component={GameIns}/>
          <Stack.Screen name="GameTest" component={GameTest}/>
          <Stack.Screen name="Teacher signup" component={TeacherSignup} />
          <Stack.Screen name="Student signup" component={StudentSignup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Student welcome" component={StudentWelcome} />
          <Stack.Screen name="Teacher welcome" component={TeacherWelcome} />
          <Stack.Screen name="Student hr" component={StudentHR} />
          <Stack.Screen name="Teacher hr" component={TeacherHR} />
          <Stack.Screen name="Post questionnaire 1" component={PostQ1}/>
          <Stack.Screen name="Thank you" component={ThankYou}/>
          <Stack.Screen name="Tynl" component={TYNL}/>
          <Stack.Screen name="Canada" component={Canada}/>
          <Stack.Screen name="Kuwait" component={Kuwait}/>
          <Stack.Screen name="CanFN" component={CanFN}/>
          <Stack.Screen name="SAfrica" component={SAfrica}/>
          <Stack.Screen name="Ghana" component={Ghana}/>
          <Stack.Screen name="Kenya" component={Kenya}/>
          <Stack.Screen name="Malawi" component={Malawi}/>
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E1E1E',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }
});
