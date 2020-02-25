import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//api's
import yelp from "../utils/API/yelp";

//components
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const defaultSearchTerm = 'Pasta';
		searchYelp(defaultSearchTerm);
	}, []);


	const searchYelp = async (term) => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: term,
					location: "san jose"
				}
			})

			setResults(response.data.businesses);

			console.log(results)
		}
		catch (e) {
			console.log(e);
			setErrorMessage("Something went wrong! Please try again later")
		}

	}


	return (
		<View>
			<SearchBar
				searchYelp={searchYelp}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>

			{errorMessage ? <Text>{errorMessage}</Text> : null}

			<Text>There are {results.length} Found!</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
