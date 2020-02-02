import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    FlatList,
    Text,
    ActivityIndicator,
} from 'react-native';

import searchMovie from '../../api';
import debounce from '../../utils/debounce';
import styles from './styles';
import colors from '../../constants/colors'

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const debouncedSearchQuery = debounce(searchQuery, 1000);

    const shouldDiplayResults = searchQuery !== '';

    useEffect(
        () => {
            if (debouncedSearchQuery) {
                searchMovie(debouncedSearchQuery).then(results => setSearchResults(results));
            } else {
                setSearchResults([]);
            }
        },
        // This is the useEffect input array
        // Our useEffect function will only execute if this value changes
        // and thanks to our hook it will only change if the original
        // value (searchQuery) hasn't changed for more than XXX ms.
        [debouncedSearchQuery],
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBox}
                placeholder={'Enter your search term here...'}
                value={searchQuery}
                onChangeText={val => setSearchQuery(val)}
            />
            <FlatList
                keyExtractor={item => item.id}
                data={searchResults}
                renderItem={( { item } ) => (
                    <Text>{item.title}</Text>
                )}
            />
        </View>
    );
};

export default SearchScreen;
