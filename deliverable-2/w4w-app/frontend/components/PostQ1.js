import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
	Image,
	Pressable,
	TextInput,
	ScrollView,
	Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as MailComposer from 'expo-mail-composer';

export default function PostQ1({ navigation }) {
	const [q1, setQ1] = useState('');
	const [q2, setQ2] = useState('');
	const [q3, setQ3] = useState('');
	const [q4, setQ4] = useState('');

	useEffect(() => {
		AsyncStorage.getItem('user').then((user) => {
			user = JSON.parse(user);
			setQ1(user.q1);
			setQ2(user.q2);
			setQ3(user.q3);
			setQ4(user.q4);
		});
	}, []);

	const sendEmail = () => {
		AsyncStorage.getItem('user').then((user) => {
			user = JSON.parse(user);
			const teacherEmail = user.teacherEmail;
			const username = user.name;

			const subject = '[Water for the World] Answers from ' + username;
			const emailTemplate = `
				Student name: ${username}

				Here are the student's answers to the post-questionnaires:

				
				Question 1:
				----------------
				${q1}

				
				Question 2:
				---------------- 
				${q2}


				Question 3: 
				----------------
				${q3}


				Question 4: 
				----------------
				${q4} 




				Thank you for participating in Water for the World!
				
				Note to teacher -- Please email W4TW at W4TW@gmail.com and let us know your thoughts for improving the app (or thanks) and also HOW MANY STUDENTS completed the workshop so that we can tract its usage.  
				Thank you, W4TW. 
				`;
			MailComposer.composeAsync({
				recipients: [teacherEmail],
				subject: subject,
				body: emailTemplate,
			}).catch(() =>
				Alert.alert('Unable To Send Email', undefined, [
					{
						text: 'OK',
					},
				])
			);
		});
	};

	return (
		<View style={styles.background}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<Image source={require('../assets/EWB.png')} style={styles.ewblogo} />
				{/* <View style={styles.backinputview}> */}
				<Pressable
					style={{ marginLeft: -Dimensions.get('window').width / 1.2 }}
					onPress={async () => {
						navigation.navigate('Game');
					}}
				>
					<Icon name="arrow-left" color="#03DAC5" size={25} />
				</Pressable>
				{/* </View> */}
				<Text style={styles.textCaption}>Question 1</Text>
				<Text style={styles.subtext}>
					How did the money and literacy rate you were given for each affect
					your ability to build a water filter?
				</Text>
				<TextInput
					onChangeText={(beee) => setQ1(beee)}
					style={styles.input}
					placeholder="Enter your answer"
					placeholderTextColor={'#03DAC5'}
					label="User name"
					multiline={true}
					defaultValue={q1}
				/>
				<Text style={styles.textCaption}>Question 2</Text>
				<Text style={styles.subtext}>
					Do you think water and its use around the world is fair and equal?
					Should people have the same access to water everywhere?
				</Text>
				<TextInput
					onChangeText={(beee) => setQ2(beee)}
					style={styles.input}
					placeholder="Enter your answer"
					placeholderTextColor={'#03DAC5'}
					label="User name"
					multiline={true}
					defaultValue={q2}
				/>
				<Text style={styles.textCaption}>Question 3</Text>
				<Text style={styles.subtext}>
					What can you do in your daily life to conserve water?
				</Text>
				<TextInput
					style={styles.input}
					onChangeText={(beee) => setQ3(beee)}
					placeholder="Enter your answer"
					placeholderTextColor={'#03DAC5'}
					label="User name"
					multiline={true}
					defaultValue={q3}
				/>
				<Text style={styles.textCaption}>Question 4</Text>
				<Text style={styles.subtext}>
					What is the most important thing you have learned doing this activity?
				</Text>
				<TextInput
					style={styles.input}
					placeholder="Enter your answer"
					onChangeText={(beee) => setQ4(beee)}
					placeholderTextColor={'#03DAC5'}
					label="User name"
					multiline={true}
					defaultValue={q4}
				/>
				<View style={styles.inputview}>
					<Pressable
						style={styles.button}
						onPress={async () => {
							await AsyncStorage.getItem('user')
								.then((user) => {
									parsed = JSON.parse(user);
									parsed.q1 = q1;
									parsed.q2 = q2;
									parsed.q3 = q3;
									parsed.q4 = q4;
								})
								.then(async () => {
									await AsyncStorage.setItem('user', JSON.stringify(parsed));
								})
								.then(() => {
									Alert.alert('Saved', undefined, [
										{
											text: 'OK',
										},
									]);
								});
						}}
					>
						<Text style={styles.textButton}>Save</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={async () => {
							sendEmail();
						}}
					>
						<Text style={styles.textButton}>Submit Responses</Text>
						<View style={styles.arrow}>
							<FontAwesome5 name="angle-right" color="#03DAC5" size={15} />
						</View>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => {
							navigation.navigate('Thank you');
						}}
					>
						<Text style={styles.textButton}>Finish</Text>
						<View style={styles.arrow}>
							<FontAwesome5 name="angle-right" color="#03DAC5" size={15} />
						</View>
					</Pressable>
				</View>
				<Image source={require('../assets/WFTW.png')} style={styles.w4twlogo} />
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
		flexDirection: 'column',
	},
	bold: { fontWeight: 'bold' },
	italic: { fontStyle: 'italic' },
	underline: { textDecorationLine: 'underline' },
	textCaption: {
		color: '#03DAC5',
		marginBottom: Dimensions.get('window').height / 300,
		marginTop: Dimensions.get('window').height / 7,
		height: Dimensions.get('window').height / 7,
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
		height: Dimensions.get('window').height / 6,
	},
	input: {
		color: 'white',
		backgroundColor: '#2C2C2C',
		width: Dimensions.get('window').width - 40,

		borderRadius: 15,
		height: Dimensions.get('window').height / 5,
		padding: 10,
		borderColor: '#393939',
		borderWidth: 2,
		marginBottom: Dimensions.get('window').height / 160,
		marginTop: Dimensions.get('window').height / 30000,
		textAlign: 'left',
	},
	inputview: {
		flex: 0,
		marginTop: Dimensions.get('window').height / 10,
	},
	arrow: {
		flex: 1,
		marginTop: 2,
	},
	textButton: {
		color: '#03DAC5',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: 'bold',
		flex: 5,
	},
	button: {
		width: Dimensions.get('window').width / 2.99,
		flexDirection: 'row',
		padding: 8,
		left: 120,
		marginBottom: Dimensions.get('window').height / 30,
		// marginTop: Dimensions.get('window').height / 10,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
	},
	buttoninput: {
		width: Dimensions.get('window').width / 3,
		flexDirection: 'row',
		padding: 15,
		// marginLeft: Dimensions.get('window').width / 3,
		marginTop: Dimensions.get('window').height / 20,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
		alignSelf: 'flex-start',
	},
	backinputview: {
		backgroundColor: '#1E1E1E',
		padding: 0,
		top: 0,
		right: 125,
	},
	ewblogo: {
		// right: Dimensions.get('window').width / -1.55,
		// bottom: Dimensions.get('window').height / -20,
		marginTop: Dimensions.get('window').height / 20,
		marginBottom: Dimensions.get('window').height / -10,
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
