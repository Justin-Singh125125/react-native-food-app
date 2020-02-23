import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//components
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
	return (
		<View>
			<SearchBar />
			<Text>I LOVE JENNA</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
