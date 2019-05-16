import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';

let tabBarConfig = {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconUrl;
            if (routeName === 'Index') {
                iconUrl = focused ? require('./assets/imgs/mv-full.png') : require('./assets/imgs/mv.png');
            } else if (routeName === 'Center') {
                iconUrl = focused ? require('./assets/imgs/me-full.png') : require('./assets/imgs/me.png');
            }
            return <Image source={iconUrl} style={{ width: 25, height: 25 }} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: '#fd0',
        inactiveTintColor: '#666',
        labelStyle: {
            fontSize: 14
        },
        style: {
            backgroundColor: '#fafafa',
        }
    }
}

import Index from './view/index';
import Video from './view/video';
import Center from './view/center';

const TabNavigator = createBottomTabNavigator({
    Index: Index,
    Center: Center
}, tabBarConfig);

const AppNavigator = createStackNavigator({
    Tab: TabNavigator,
    Video: Video
}, { headerMode: 'none' });

export default createAppContainer(AppNavigator);