import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './styles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the famous Home screen!</Text>
        </View>
    );
};

export default HomeScreen;
