

// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Homefun from './pages/home';
import Aboutfun from './pages/about';
import Testfun from './pages/text';
import CustomDrawer from './customdrawer';

// import Iicon from 'react-native-vector-icons/Feather'
// import EIcon from 'react-native-vector-icons/Feather';


const Drawer = createDrawerNavigator();

function Navapp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'
      drawerContent={props => <CustomDrawer {...props}/>}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          borderTopRightRadius:20,
          borderBottomRightRadius:20,
          // paddingTop:180
        },
      }
      }
      >
        
        {/* <Drawer.Screen name='zubair' options={{
          height:40
        }} /> */}

        <Drawer.Screen name="Home" component={Homefun}
          
          options={{
          drawerType:'back',
          drawerActiveTintColor:'orange'
       
        }}
         />
        <Drawer.Screen name="About" component={Aboutfun}    options={{
          drawerType:'back',
          drawerActiveTintColor:'orange'
       
        }}/>
        <Drawer.Screen name="Test" component={Testfun}   options={{
          drawerType:'back',
          drawerActiveTintColor:'orange'
       
        }} />
        <Drawer.Screen name="high" component={Testfun}   options={{
          drawerType:'back',
          drawerActiveTintColor:'orange'
       
        }} />
        <Drawer.Screen name="funtest" component={Testfun}   options={{
          drawerType:'back',
          drawerActiveTintColor:'orange'
       
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navapp;