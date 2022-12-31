

// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Homefun from './pages/home';
import Aboutfun from './pages/about';
import Testfun from './pages/text';

import CustomDrawer from './customdrawer';
import Stackfuner from './pages/stack';
import Crustfun from './pages/crust';
import Toppingfun from './pages/toppings';

// import Iicon from 'react-native-vector-icons/Feather'
// import EIcon from 'react-native-vector-icons/Feather';


const Stack = createNativeStackNavigator();


function Toppingsapp (){
  return(

    <Stack.Navigator initialRouteName='crust'>
        <Stack.Screen name="crust" component={Crustfun}
        options={{
          headerShown:true
        }}
         />
    

        <Stack.Screen name="toppings" component={Toppingfun} />
    
  </Stack.Navigator>
    )
}
function Crustapp (){
  return(

    <Stack.Navigator initialRouteName='stack'>
        <Stack.Screen name="stack" component={Stackfuner}
        options={{
          headerShown:true
        }}
         />
    

        <Stack.Screen name="crust" component={Toppingsapp}
        options={{
          headerShown:false
        }} />
    
  </Stack.Navigator>
    )
}

export function Stackapp() {
  return (
    
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={Homefun}
        options={{
          headerShown:true
        }}
         />
        {/* <Stack.Screen name="stack" component={Stackfuner} /> */}
        <Stack.Screen name="stack" component={Crustapp} 
        options={{
          headerShown:false
        }}/>
      </Stack.Navigator>
    
  );
}


const Drawer = createDrawerNavigator();

export function Navapp() {
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
        
        <Drawer.Screen name="Home" component={Stackapp}
          
          options={{
          drawerType:'back',
          drawerActiveTintColor:'orange',
          headerShown:false
       
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







