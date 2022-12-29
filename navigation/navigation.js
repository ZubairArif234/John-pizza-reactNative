

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Homefun from './pages/home';
import Aboutfun from './pages/about';




const Drawer = createDrawerNavigator();

function Navapp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={Homefun} />
        <Drawer.Screen name="About" component={Aboutfun} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navapp;