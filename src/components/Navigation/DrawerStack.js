import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Drawer = createDrawerNavigator();

export default class DrawerStack extends Component {
  render() {
    return (
      <Drawer.Navigator drawerPosition="right">
        <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
        <Drawer.Screen name="DetailDrawer" component={DetailScreen} />
      </Drawer.Navigator>
    );
  }
}
