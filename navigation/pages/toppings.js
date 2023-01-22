





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

import { useState,useEffect } from 'react';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'bootstrap';
import EIcon from 'react-native-vector-icons/Entypo';

  

const Toppingfun = ( {route,navigation}) => {
    useEffect(()=>{
        navigation.setOptions({

            headerRight: () => (
                <EIcon
                onPress={() =>navigation.navigate('home')}
                size={28}
                color="black"
                name="home"
                />)
            })
    },[])
    const {datacrust , datasize} = route.params
    // const  [ pizzaimage , setpizzaimage] =(false)

    const toppingsobj =[
        {
            index:'1',
            toppings:'Pepperoni',
            image :require("../../assets/pepperoni.png"),
            imagepiz: require("../../assets/pepro.png")
            // imagepizza :setpizzaimage(require("../../assets/pepperonipizza.png"))
        },
        {
            index:'2',
            toppings:'Mashroom',
            image : require("../../assets/mashroom.png"),
            imagepiz: require("../../assets/pepro.png")
            // imagepizza : setpizzaimage(require("../../assets/mashroomspizza.png")),
        },
        {
            index:'3',
            toppings:'Olive',
            image :require("../../assets/olive.jpg"),
            imagepiz: require("../../assets/pepro.png")
            // imagepizza :setpizzaimage(require("../../assets/olivepizza.png")),
        },
        {
            index:'4',
            toppings:'Onions',
            image :require("../../assets/onions.jpg"),
            imagepiz: require("../../assets/pepro.png")
            // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
        },
        {
            index:'5',
            toppings:'Capsicum',
            image :require("../../assets/capsicum.jpg"),
            // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
        },
        {
            index:'6',
            toppings:'Jalapeno',
            image :require("../../assets/jalapeno.jpg"),
            // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
        },
    ]
 
    const [topnames ,settopnames] = useState('')
    function Toppings (){
        navigation.navigate('finalpizza' , {datacrust:datacrust, datasize:datasize})
     
      }

  return (
   <View>
    <View>
        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{height:240}}>
            <View style={{padding:10, width:250 }}>
                <Text style={{fontSize:25 , color:'white'}}>Create Your Pizza </Text> 
                <Text style={{fontSize:10 , color:'white'}}>SIZE, CRUST, TOPPING</Text>
            </View>
            <View style={{alignItems:'flex-end' ,bottom:55 , right:10}}>
                <Text style={{fontSize:25 , color:'white', fontWeight:'bold'}}>$14.00</Text>
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
                    <Image style={{alignSelf:'center', bottom:15}} source={
                      require("../../assets/mediumpizza.png")
                    }/>

                </View>
                {/* <View style={{top:55 ,backgroundColor:'#a0a8cc', width:50 ,
                alignItems:'center',
                borderBottomRightRadius:10
            , borderBottomLeftRadius:10
            , borderTopRightRadius:10
            , borderTopLeftRadius:10,
                }}>
                    <Text style={{color:'#6D6E9C'}}>12"</Text></View> */}
            </View>
        </LinearGradient>
        <View style={{ backgroundColor:'#FFFFFF60' , width:320 , alignSelf:'center' , top:170,
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
                data={toppingsobj}
                renderItem={({item})=>{
                    return(
                        <View style={{backgroundColor:'#ffffff' , marginLeft:20 , width:230 ,flex:1 , flexDirection:'row',justifyContent:'space-around', padding:5,
                        borderBottomRightRadius:20
                        , borderBottomLeftRadius:20
                        , borderTopRightRadius:20
                        , borderTopLeftRadius:20, margin:10
                       }}>
<View style={{ width:50 , marginLeft:10 }}>
    <Image style={{width:50 , height:50}} source={item.image}/>
</View>
<View style={{ width:100, justifyContent:'center',alignItems:'center' }}>
<Text style={{fontSize:15 , fontWeight:'bold' ,color:'#6D6E9C'}}>{item.toppings}</Text>
<Text style={{fontSize:11 , color:'#6d6e9c'}}>+$0.00</Text>

</View>
<View style={{backgroundColor:'#F4F3F9' ,width:20 , height:20 ,
borderBottomRightRadius:20
, borderBottomLeftRadius:20
, borderTopRightRadius:20
, borderTopLeftRadius:20,
alignSelf:'center'
}}>
    <TouchableOpacity  ></TouchableOpacity>
</View>
                        </View>
                    ) 
                }}
                />
            </View>
        </View>
        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{top:185 , height:50}}>
            <TouchableOpacity style={{color:'#ffffff' , alignItems:'center'}} onPress={Toppings}><Text style={{top:15 , color:'#ffffff'}}>Next</Text></TouchableOpacity>
        </LinearGradient>

    </View>
    </View>
  );
};



export default Toppingfun;
