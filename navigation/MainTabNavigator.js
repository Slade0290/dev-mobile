import HomePage from '../pages/HomePage';
import SettingsPage from '../pages/SettingsPage';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import React from 'react';

const tabNavigator = createMaterialBottomTabNavigator(
    {
        Home: { screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'Accueil',
            tabBarIcon: ({tintcolor})=>(
                <Icon color={tintcolor} size={25} name={'ios-home'} />
            )
        }
    },
        Settings: { screen: SettingsPage,
            navigationOptions: {
                tabBarLabel: 'Paramètres',
                tabBarIcon: ({tintcolor}) => (
                        <Icon color={tintcolor} size={25} name={'ios-settings'} />
                ),
                barStyle: { backgroundColor: 'red'}
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default tabNavigator;