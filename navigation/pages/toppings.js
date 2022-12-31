





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
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'bootstrap';


  

const Toppingfun = ( {navigation ,route}) => {

    const toppings =[
        {
            index:'1',
            toppings:'Pepperoni'
        },
        {
            index:'2',
            toppings:'Mashroom'
        },
        {
            index:'3',
            toppings:'Olive'
        },
        {
            index:'4',
            toppings:'Onions'
        },
    ]
 
    function Crust (){
        navigation.navigate('klo')
     
      }

  return (
   <View>
    <View>
        <LinearGradient tart={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{height:240}}>
            <View style={{padding:10, width:250 }}>
                <Text style={{fontSize:25 , color:'white'}}>Create Your Pizza </Text> 
                <Text style={{fontSize:10 , color:'white'}}>SIZE, CRUST, TOPPING</Text>
            </View>
            <View style={{alignItems:'flex-end' ,bottom:55 , right:10}}>
                <Text style={{fontSize:25 , color:'white', fontWeight:'bold'}}>$10.00</Text>
            </View>
            
            <View style={{backgroundColor:'#ffffff60', width:320, height:320, alignSelf:'center' 
            , borderBottomRightRadius:150
            , borderBottomLeftRadius:150
            , borderTopRightRadius:150
            , borderTopLeftRadius:150,
            top:80,
            alignItems:'center',
            position:'absolute'
            }}>
                <View
                style={{backgroundColor:'#ffffff', width:270, height:270, top:25
                , borderBottomRightRadius:150
                , borderBottomLeftRadius:150
                , borderTopRightRadius:150
                , borderTopLeftRadius:150,}}
                >
                    <Image style={{alignSelf:'center', bottom:15}} source={require('../../assets/mediumpizza.png')}/>

                </View>
                <View style={{top:55 ,backgroundColor:'#a0a8cc', width:50 ,
                alignItems:'center',
                borderBottomRightRadius:10
            , borderBottomLeftRadius:10
            , borderTopRightRadius:10
            , borderTopLeftRadius:10,
                }}><Text style={{color:'#6D6E9C'}}>12"</Text></View>
            </View>
        </LinearGradient>
        <View style={{ backgroundColor:'#FFFFFF60' , width:320 , alignSelf:'center' , top:190,
         borderBottomRightRadius:20
         , borderBottomLeftRadius:20
         , borderTopRightRadius:20
         , borderTopLeftRadius:20,
     }}>
            <View style={{alignItems:'center'}}>

            <Text style={{color:'#6D6E9C', fontSize:20 , paddingTop:10}}> Choose upto <Text style={{fontWeight:'bold'}}>7 Toppings</Text></Text>
            </View>
            <View style={{alignItems:'center'}} >
                <FlatList
                keyExtractor={(key)=>{
                   return key.index
                }}
                horizontal
                data={toppings}
                renderItem={({item})=>{
                    return(
<Text>{item.toppings}</Text>
                    ) 
                }}
                />
            </View>
        </View>
        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{top:195 , height:50}}>
            <TouchableOpacity style={{color:'#ffffff' , alignItems:'center'}} onPress={Crust}><Text style={{top:15 , color:'#ffffff'}}>Next</Text></TouchableOpacity>
        </LinearGradient>

    </View>
    </View>
  );
};



export default Toppingfun;
