import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

//icons
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ handleSubmit, searchTerm, setSearchTerm }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather style={styles.iconStyle} name="search" />
			<TextInput
				onEndEditing={handleSubmit}
				onChangeText={userInput => setSearchTerm(userInput)}
				value={searchTerm} style={styles.inputStyle}
				placeholder="Search"
				autoCapitalize="none"
				autoCorrect={false}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#f0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		marginTop: 10
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: "center",
		marginHorizontal: 15
	},
	inputStyle: {
		flex: 1,
		padding: 2,
		fontSize: 18
	}
});

export default SearchBar;
