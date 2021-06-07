import React, {Component} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import StackRoot from './StackRoot';
import {Text, TouchableOpacity, View} from 'react-native';
import DrawerStack from './DrawerStack';

const Tab = createBottomTabNavigator();

export default class RootNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        {/* <StackRoot /> */}
        <DrawerStack />
      </NavigationContainer>
    );
  }
}
