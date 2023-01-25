

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
import EIcon from 'react-native-vector-icons/Entypo';
import CustomDrawer from './customdrawer';
import Stackfuner from './pages/stack';
import Crustfun from './pages/crust';
import Toppingfun from './pages/toppings';
import Finalpizzafun from './pages/finalpizza';

import Checkfun from './pages/check';


// import Iicon from 'react-native-vector-icons/Feather'
// import EIcon from 'react-native-vector-icons/Feather';


const Stack = createNativeStackNavigator();

// function Checkout (){
//   return(

//     <Stack.Navigator initialRouteName='finalpizza'>
//         <Stack.Screen name="finalpizza" component={Finalpizzafun}
//         options={{
//           headerShown:true
//         }}
//          />
//         <Stack.Screen name="check" component={Checkfun} />
//   </Stack.Navigator>
//     )

// }
// function Finalpizza (){
//   return(

//     <Stack.Navigator initialRouteName='toppings'>
//         <Stack.Screen name="toppings" component={Toppingfun}
//         options={{
//           headerShown:true
//         }}
//          />
//         <Stack.Screen name="finalpizza" component={Checkout}
//         options={{
//           headerShown:false
//         }}  />
//   </Stack.Navigator>
//     )

// }



// function Toppingsapp (){
//   return(

//     <Stack.Navigator initialRouteName='crust'>
//         <Stack.Screen name="crust" component={Crustfun}
//         options={{
//           headerShown:true
//         }}
//          />
    

//         <Stack.Screen name="toppings" component={Finalpizza}
//          options={{
//           headerShown:false
//         }}  />
    
//   </Stack.Navigator>
//     )
// }
// function Crustapp (){
//   return(

//     <Stack.Navigator initialRouteName='stack'>
//         <Stack.Screen name="stack" component={Stackfuner}
//         options={{
//           headerShown:true
//         }}
//          />
    

//         <Stack.Screen name="crust" component={Toppingsapp}
//         options={{
//           headerShown:false
//         }} />
    
//   </Stack.Navigator>
//     )
// }

export function Stackapp() {
  return (
    
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={Homefun}
        options={{
          headerShown:true,
          title:'Pizza John',
          drawerStatusBarAnimation:'slide',
          headerTitleAlign:'center',
          // headerLeft: () => (
          //   <EIcon
          //     onPress={() =>navigate('DrawerOpen')}
          //     size={30}
          //     color="black"
          //     name="home"
          //   />
          // ),
          
          
        }
      }
        
         />
        {/* <Stack.Screen name="stack" component={Stackfuner} /> */}
        <Stack.Screen name="stack" component={Stackfuner} 
        options={{
          headerShown:true,
          title:'Pizza John',
          drawerStatusBarAnimation:'slide',
          headerTitleAlign:'center'
         

        }}/>
         <Stack.Screen name="crust" component={Crustfun}
        options={{
          headerShown:true,
          title:'Pizza John',
          drawerStatusBarAnimation:'slide',
          headerTitleAlign:'center'
        }} />
      <Stack.Screen name="toppings" component={Toppingfun}
      options={{
       headerShown:true,
       title:'Pizza John',
          drawerStatusBarAnimation:'slide',
          headerTitleAlign:'center'
     }}  />
      <Stack.Screen name="finalpizza" component={Finalpizzafun}
        options={{
          headerShown:true,
          title:'Pizza John',
          drawerStatusBarAnimation:'slide',
          headerTitleAlign:'center'
        }}  />
         <Stack.Screen name="check" component={Checkfun} 
         options={{
          headerShown:true,
          title:'Pizza John',
          drawerStatusBarAnimation:'slide',
          headerTitleAlign:'center'
        }} />


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
          
          borderTopRightRadius:20,
          borderBottomRightRadius:20,
          // paddingTop:180
          headerShown:true
        },
      }
      }
      >
        
        <Drawer.Screen name="Home" component={Stackapp}
          
          options={{
            drawerType:'back',
            title:'Pizza John',
            drawerStatusBarAnimation:'slide',
            headerTitleAlign:'center',
            headerShown:false,
           
       
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







