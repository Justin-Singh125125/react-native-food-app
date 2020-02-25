import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

//hooks
import useResults from '../hooks/useResults';

//components
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchYelp, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(results => results.price === price);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchYelp={searchYelp}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      {results.length !== 0 ? (
        <ScrollView>
          <ResultsList
            results={filterResultsByPrice('$')}
            title='Cost Effective'
          />
          <ResultsList
            results={filterResultsByPrice('$$')}
            title='Bit Pricier'
          />
          <ResultsList
            results={filterResultsByPrice('$$$')}
            title='Big Spender'
          />
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SearchScreen;
