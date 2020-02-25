import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

//icons
import { Feather } from '@expo/vector-icons';

const ResultsCard = ({ result }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.imageStyle} source={{ uri: result.image_url }} />
			<Text style={styles.nameStyle}>{result.name}</Text>
			<Text style={styles.infoStyle}>
				{result.rating} Stars, {result.review_count} Reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 15
	},
	imageStyle: {
		width: 250,
		height: 150,
		borderRadius: 5,
		marginBottom: 5
	},
	nameStyle: {
		fontWeight: 'bold'
	},
	infoStyle: {
		color: '#8f8c8a'
	}
});

export default ResultsCard;
