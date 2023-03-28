import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
	Image,
	Pressable,
	Modal,
	TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PreQ3({ navigation }) {
	const options = [
		{ id: 1, country: 'Canada', literacy: '99.0%' },
		{ id: 2, country: 'Germany', literacy: '99.0%' },
		{ id: 3, country: 'Ghana', literacy: '79.04%' },
		{ id: 4, country: 'Kuwait', literacy: '96.46%' },
		{ id: 5, country: 'Malawi', literacy: '62.14%' },
		{ id: 6, country: 'Kenya', literacy: '81.54%' },
		{ id: 7, country: 'South Africa', literacy: '95.02%' },
	];

	const [modalVisible, setModalVisible] = useState(false);
	const [selectedOption, setSelectedOption] = useState(options[0]);

	// Check if the answer is correct or not
	// Show the corresponding message in the modal
	const handleAnswer = (option) => {
		console.log(option);
		setSelectedOption(option);
		setModalVisible(!modalVisible);
	};

	// Modal to show the answer message
	const AnswerModal = () => {
		return (
			<View style={styles.centeredView}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.answerView}>
								Literacy rate of {selectedOption.country} is:{' '}
								{selectedOption.literacy}
							</Text>
							<Pressable
								style={[styles.buttonans, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textButton}>OK</Text>
							</Pressable>
						</View>
					</View>
				</Modal>
			</View>
		);
	};

	return (
		<View style={styles.background}>
			<Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>
			{/* <View style={styles.backinputview}> */}
				<Pressable
					style={styles.button}
					onPress={async () => {
						navigation.navigate('Pre questionnaire 3');
					}}
				>
					<View style={styles.arrow}>
						<Icon name="angle-left" color="#03DAC5" size={15} />
					</View>
					<Text style={styles.textButton}>Go back</Text>
				</Pressable>
				{/* <Image
					source={require('../assets/EWB.png')}
					style={{
						width: 100,
						height: 50,
						marginTop: 10,
						alignSelf: 'center',
					}}
				/> */}
			{/* </View> */}

			<Text style={styles.textCaption}>Literacy Rate</Text>
			<Text style={styles.subtext}>
				The percentage of the populatin of a given age group that can read and
				write.
			</Text>
			<Text style={styles.subtext}>
				Explore the literacy rates of the highlighted countries: (click on the
				country name to see the literacy rate)
			</Text>

			<View style={styles.ImageContainer}>
				<Image
					source={require('../assets/lteracyGlobeCountries.png')}
					style={{
						width: Dimensions.get('window').width,
						height: Dimensions.get('window').height / 5,
						marginTop: Dimensions.get('window').height / 50,
						resizeMode: 'contain',
					}}
				/>
			</View>

			<View style={styles.optionContainer}>
				{options.map((option) => (
					<TouchableOpacity
						key={option.id}
						style={styles.optionButton}
						onPress={() => handleAnswer(option)}
					>
						<Text style={styles.optionText}>{option.country}</Text>
					</TouchableOpacity>
				))}
			</View>

			{AnswerModal()}

			<Pressable
				style={styles.nextButton}
				numberOfLines={1}
				onPress={() => navigation.navigate('Pre questionnaire 5')}
			>
				<Text style={styles.textButton}>Next</Text>
				<View style={styles.arrow}>
					<FontAwesome5 name="angle-right" color="#03DAC5" size={15} />
				</View>
			</Pressable>
			{/* <Image
				source={require('../assets/WFTW.png')}
				style={{
					width: 110,
					height: 115,
					resizeMode: 'contain',
					alignSelf: 'center',
				}}
			/> */}
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
		flexDirection: 'column',
	},
	bold: { fontWeight: 'bold' },
	italic: { fontStyle: 'italic' },
	underline: { textDecorationLine: 'underline' },
	textCaption: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 35,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		width: Dimensions.get('window').width / 1.2,
	},
	subtext: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 30,
		textAlign: 'center',
		fontSize: 15,
		flexDirection: 'column',
		width: Dimensions.get('window').width / 1.2,
	},
	sourceText: {
		color: '#03DAC5',
	},
	sourceLink: {
		color: '#0044CC',
		textDecorationLine: 'underline',
	},
	nextButton: {
		width: Dimensions.get('window').width / 2,
		flexDirection: 'row',
		padding: 12,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
		marginTop: Dimensions.get('window').height / 75,
		alignItems: 'center',
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
	backinputview: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: Dimensions.get('window').width / 1.1,
		top: Dimensions.get('window').height / 20,
		height: '10%',
	},
	button: {
		width: Dimensions.get('window').width / 3,
		flexDirection: 'row',
		padding: 15,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
		alignSelf: 'flex-start',
	},
	buttonans: {
		width: Dimensions.get('window').width / 3,
		flexDirection: 'row',
		padding: 15,
		borderColor: '#03DAC5',
		borderRadius: 999,
		borderWidth: 2,
		backgroundColor: '#2C2C2C',
	},
	// Country Buttons Styling
	optionContainer: {
		marginTop: Dimensions.get('window').height / 30,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		width: Dimensions.get('window').width / 1.2,
	},
	optionButton: {
		backgroundColor: '#2C2C2C',
		borderColor: '#03DAC5',
		borderWidth: 2,
		padding: 8,
		borderRadius: 8,
		marginBottom: Dimensions.get('window').height / 60,
		width: Dimensions.get('window').width / 4,
	},
	optionText: {
		textAlign: 'center',
		fontSize: 12,
		fontWeight: 'bold',
		color: '#03DAC5',
	},
	// Modal Styling
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		backgroundColor: '#2C2C2C',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: Dimensions.get('window').width / 1.2,
	},
	answerView: {
		textAlign: 'center',
		color: '#03DAC5',
		fontSize: 18,
		marginBottom: Dimensions.get('window').height / 30,
	},
	buttonClose: {
		backgroundColor: '#2C2C2C',
		borderColor: '#03DAC5',
	},
	ewblogo:{
        right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -18,
        // width: 100, 
        // height: 50, 
		width: Dimensions.get('window').width / 5,
		height: Dimensions.get('window').height / 17.5,
      },
      w4twlogo: {
        bottom: Dimensions.get('window').height / 200,
        alignItems: 'center',
        // width: 120, 
        // height: 60, 
		width: Dimensions.get('window').width / 5,
    	height: Dimensions.get('window').height / 17.5,
      },
});
