import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

// const switchNavigator = createSwitchNavigator({
//     Main: MainTabNavigator,
// });

export default createAppContainer(createSwitchNavigator({
    Main: MainTabNavigator,
}));
