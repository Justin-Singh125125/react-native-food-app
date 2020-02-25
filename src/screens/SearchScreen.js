import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//api's
import yelp from "../utils/API/yelp";

//components
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async () => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "san jose"
				}
			})

			setResults(response.data);
		}
		catch (e) {
			console.log(e);
			setErrorMessage("Something went wrong! Please try again later")
		}

	}


	return (
		<View>
			<SearchBar
				handleSubmit={handleSubmit}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>

			{errorMessage ? <Text>{errorMessage}</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
