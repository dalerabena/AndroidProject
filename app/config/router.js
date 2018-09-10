import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import UsersScreen from '../screens/UsersScreen';
import UserDetail from '../screens/UserDetail';

export const Root = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'HOME',
      }),
    },
    Users: {
      screen: UsersScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'USER LIST',
      }),
    },
    Details: {
      screen: UserDetail,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
      }),
    }
  },
  {
    initialRouteName: 'Home'
  }
);
