import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
	Image,
	Pressable,
	Linking,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PreQ5({ navigation }) {
	return (
		<View style={styles.background}>
			<Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>
			{/* <View style={styles.backinputview}> */}
				<Pressable
					style={styles.button}
					onPress={async () => {
						navigation.navigate('Pre questionnaire 4');
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

			<Text style={styles.textCaption}>Global Literacy Rate</Text>
			<Text style={styles.subtext}>
				The literacy rate is defined by the percentage of the population of a
				given age group that can read and write. As you can see on the map, the
				lack of education in Sub-Saharan Africa is a problem.
			</Text>

			<View style={styles.ImageContainer}>
				<Image
					source={require('../assets/globalLiteracyRate.png')}
					style={{
						width: Dimensions.get('window').width,
						height: Dimensions.get('window').height / 4,
						marginTop: Dimensions.get('window').height / 50,
						resizeMode: 'contain',
					}}
				/>
			</View>

			<Text style={styles.sourceText}>
				Source:{' '}
				<Text
					style={styles.sourceLink}
					onPress={() =>
						Linking.openURL(
							'https://ourworldindata.org/grapher/cross-country-literacy-rates?tab=map&country=East+Asia+%26+Pacific~Sub-Saharan+Africa~Europe+%26+Central+Asia~Latin+America+%26+Caribbean~Middle+East+%26+North+Africa~South+Asia'
						)
					}
				>
					Our World in Data
				</Text>
			</Text>

			<Pressable
				style={styles.nextButton}
				numberOfLines={1}
				onPress={() => navigation.navigate('Pre questionnaire 6')}
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
		marginTop: Dimensions.get('window').height / 8,
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
	subtext: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 15,
		textAlign: 'center',
		fontSize: 15,
		flexDirection: 'column',
		width: Dimensions.get('window').width / 1.2,
	},
	sourceText: {
		color: '#03DAC5',
		marginTop: Dimensions.get('window').height / 50,
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
		marginTop: Dimensions.get('window').height / 15,
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
	ewblogo:{
        right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -18,
        width: 100, 
        height: 50,
		// alignSelf: 'flex-end',
      },
    w4twlogo: {
        bottom: Dimensions.get('window').height / 180,
        alignItems: 'center',
        width: 120, 
        height: 60, 
      },
});
