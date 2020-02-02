import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeStack from './stacks/HomeStack';
import SearchStack from './stacks/SearchStack';

const TabNavigator = createBottomTabNavigator({
    SearchStack,
    HomeStack,
});

TabNavigator.path = '';

export default TabNavigator;
