import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon/TabBarIcon';
import config from './config';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config,
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                ? 'ios-home'
                : 'md-home'
            }
        />
    ),
}

HomeStack.path = '';

export default HomeStack;
