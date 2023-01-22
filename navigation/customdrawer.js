




import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { DrawerItemList,DrawerContentScrollView } from '@react-navigation/drawer';


  

const CustomDrawer = (props) => {
 

  return (
    <View style={{flex: 10, 
      borderTopRightRadius:20,
          borderBottomRightRadius:20,
          }}>
<View style={{height:180 , justifyContent:'center', alignItems:'center', flex:5 } }>
<View style={{ borderBottomLeftRadius:50, 
    borderBottomRightRadius:50, borderTopLeftRadius: 50, borderTopRightRadius:50
    , justifyContent:'center', alignItems:'center',width:85, height:85}}>
        <Image style={{justifyContent:'center', marginTop:5}} source={require('../assets/drawergirl.png')}/>
        
        </View>
        <Text style={{color:'#6D6E9C', fontSize:18 , marginTop:10}}>Jaykey del Mar</Text>
        <Text style={{fontSize:12}}>janedone@gmail.com</Text>
</View>
<View style={{justifyContent:'center', alignItems:'center',flex:8, backgroundColor:'#F4F3F9'}}>

<Text style={{color:'#6D6E9C', width:260, height:30 ,paddingLeft:90, marginBottom:15 }}><Image source={require('../assets/profile.png')}/>  Profile</Text>
<Text style={{color:'#6D6E9C', width:260, height:30 ,paddingLeft:90, marginBottom:15 }}><Image source={require('../assets/Payment.png')}/>  Payment Method</Text>
<Text style={{color:'#6D6E9C', width:260, height:30 ,paddingLeft:90, marginBottom:15 }}><Image source={require('../assets/orhis.png')}/>  Order History</Text>
<Text style={{color:'#6D6E9C', width:260, height:30 ,paddingLeft:90, marginBottom:15 }}><Image source={require('../assets/Location.png')}/>  Address</Text>
<Text style={{color:'#6D6E9C', width:260, height:30 ,paddingLeft:90, marginBottom:15 }}><Image source={require('../assets/Help.png')}/>  Help Centre</Text>
{/* <Text style={{color:'#6D6E9C', width:260, height:30 ,paddingLeft:110, marginBottom:20 }}>Log out</Text> */}
</View>
   {/* <DrawerContentScrollView {...props} 
   contentContainerStyle={{  paddingTop:30 , paddingBottom:50 }} >
    <DrawerItemList {...props} style={{alignItems:'center'}}/>
   </DrawerContentScrollView> */}
   <View style={{justifyContent:'center', alignItems:'center'}}>
    <Text style={{color:'#6D6E9C', width:260, height:30 ,paddingLeft:90, marginBottom:20 }}><Image source={require('../assets/Settings.png')}/>  Setting</Text>
    <Text style={{color:'#6D6E9C', width:260, height:30 ,paddingLeft:90, marginBottom:20 }}><Image source={require('../assets/logout.png')}/>  Log out</Text>
   </View>
    </View>
  );
};



export default CustomDrawer;
