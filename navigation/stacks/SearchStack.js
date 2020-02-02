import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import TabBarIcon from '../../components/TabBarIcon/TabBarIcon';
import config from './config';

const SearchStack = createStackNavigator(
    {
        Search: SearchScreen,
    },
    config,
);

SearchStack.navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
        />
    ),
}

SearchStack.path = '';

export default SearchStack;
