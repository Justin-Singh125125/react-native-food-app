import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//components
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = () => {
		console.log(searchTerm)
	}

	return (
		<View>
			<SearchBar
				handleSubmit={handleSubmit}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
