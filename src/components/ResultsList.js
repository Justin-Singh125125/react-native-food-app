import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

//icons
import { Feather } from '@expo/vector-icons';

//components
import ResultsCard from './ResultsCard';

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>

      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ResultsCard result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  titleStyle: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default ResultsList;
