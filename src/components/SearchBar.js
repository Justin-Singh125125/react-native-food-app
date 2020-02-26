import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

//icons
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ searchYelp, searchTerm, setSearchTerm }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name='search' />
      <TextInput
        onEndEditing={() => searchYelp(searchTerm)}
        onChangeText={userInput => setSearchTerm(userInput)}
        value={searchTerm}
        style={styles.inputStyle}
        placeholder='Search'
        autoCapitalize='none'
        autoCorrect={false}
      />

      {searchTerm !== '' && (
        <TouchableOpacity
          onPress={() => setSearchTerm('')}
          style={styles.iconRemoveBtn}
        >
          <FontAwesome style={styles.removeIcon} name='remove' />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  iconRemoveBtn: {
    alignSelf: 'center',
    marginRight: 20,
    padding: 15
  },
  removeIcon: {
    fontSize: 15,
    color: '#696865'
  },
  inputStyle: {
    flex: 1,
    padding: 2,
    fontSize: 18
  }
});

export default SearchBar;
