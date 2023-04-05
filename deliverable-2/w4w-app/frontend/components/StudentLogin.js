import { useState } from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	TextInput,
	Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StudentLogin({ navigation }) {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [error, setError] = useState('');

	return (
		<>
			<View style={styles.background}>
				<Image source={require('../assets/EWB.png')} style={styles.ewblogo} />
				{/* <View style={styles.backinputview}> */}
				<Pressable
					style={{ marginLeft: -Dimensions.get('window').width / 1.2 }}
					onPress={async () => {
						navigation.navigate('Home page');
					}}
				>
					<Icon name="arrow-left" color="#03DAC5" size={25} />
				</Pressable>
				{/* </View> */}
				<Icon
					name="user-circle"
					color="#03DAC5"
					size={100}
					style={styles.icon}
				/>
				<View style={styles.errview}>
					<Text style={styles.error}>{error}</Text>
				</View>
				<TextInput
					style={styles.input}
					placeholder="Your instructor's email"
					onChangeText={(newE) => setEmail(newE)}
					placeholderTextColor={'#03DAC5'}
					label="Email"
				/>

				<TextInput
					style={styles.input}
					placeholder="Your name"
					placeholderTextColor={'#03DAC5'}
					onChangeText={(newP) => setName(newP)}
					label="Text"
				/>
				<View style={styles.inputview}>
					<Pressable
						style={styles.button2}
						onPress={() => {
							AsyncStorage.setItem(
								'user',
								JSON.stringify({
									teacherEmail: email,
									name: name,
                                    q1: "",
                                    q2: "",
                                    q3: "",
                                    q4: "",
								})
							);
							navigation.navigate('Home page');
						}}
					>
						<Text style={styles.textButton}>Login</Text>
						<View style={styles.arrow}>
							<Icon name="angle-right" color="#03DAC5" size={15} />
						</View>
					</Pressable>
				</View>
				{/* <Image source={require('../assets/WFTW.png')}  style={{left: 0, top: 0, width: 110, height: 115, alignSelf: 'center'}}/>
        <Image source={require('../assets/EWB.png')}  style={{right: -150, bottom: 750, width: 100, height:50, alignSelf: 'center'}}/> */}
				<Image source={require('../assets/WFTW.png')} style={styles.w4twlogo} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#1E1E1E',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	error: {
		color: '#ff000f',
		textAlign: 'center',
		fontSize: 15,
		padding: 20,
		fontWeight: 'bold',
	},
	text: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 6,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	},
	textButton: {
		color: '#03DAC5',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: 'bold',
		flex: 5,
	},
	button: {
		width: Dimensions.get('window').width / 3,
		flexDirection: 'row',
		padding: 15,
		marginLeft: Dimensions.get('window').width / -1.7,
		// marginTop: Dimensions.get('window').height / 12,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
	},
	button2: {
		width: Dimensions.get('window').width / 3,
		flexDirection: 'row',
		padding: 15,
		// marginLeft: Dimensions.get('window').width / -1.7,
		marginTop: Dimensions.get('window').height / 12,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
	},
	arrow: {
		flex: 1,
		marginTop: 2,
	},
	icon: {
		marginTop: Dimensions.get('window').height / 50,
		flex: 1,
		marginBottom: 0,
	},
	errview: {
		backgroundColor: '#1E1E1E',
		height: Dimensions.get('window').height / 70,
		width: Dimensions.get('window').width,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	inputview: {
		flex: 3,
	},
	input: {
		color: 'white',
		backgroundColor: '#2C2C2C',
		width: (4 * Dimensions.get('window').width) / 7,
		borderRadius: 15,
		height: Dimensions.get('window').height / 18,
		paddingLeft: 20,
		borderColor: '#393939',
		borderWidth: 2,
		marginTop: Dimensions.get('window').height / 18,
	},
	backinputview: {
		backgroundColor: '#1E1E1E',
		padding: 0,
		top: 0,
		right: 120,
	},
	ewblogo: {
		// right: Dimensions.get('window').width / -1.55,
		// bottom: Dimensions.get('window').height / -20,
		marginTop: Dimensions.get('window').height / 20,
		marginBottom: Dimensions.get('window').height / -20,
		marginRight: Dimensions.get('window').width / 15,
		alignSelf: 'flex-end',
		width: Dimensions.get('window').width / 5,
		height: Dimensions.get('window').height / 17.5,
	},
	w4twlogo: {
		// marginTop: Dimensions.get('window').height / 25,
		marginBottom: Dimensions.get('window').height / 30,
		alignSelf: 'center',
		width: Dimensions.get('window').width / 3,
		height: Dimensions.get('window').height / 6,
		flex: 1,
	},
});
