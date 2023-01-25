




import React, { useEffect, useState } from 'react';

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
import EIcon from 'react-native-vector-icons/Entypo';

  

const Crustfun = ( {route,navigation }) => {
  const [btn ,setbtn]= useState('thin')
const {data} = route.params

    const navigate = navigation.navigate;
    useEffect(() => {
      console.log(data)
        navigation.setOptions({
          
          headerRight: () => (
            <EIcon
              onPress={() =>navigation.navigate('Home')}
              size={30}
              color="black"
              name="home"
            />
          ),
         
        });
      }, []);

    const crust =[
        {
            index:'1',
            crust:'Thin'
        },
        {
            index:'2',
            crust:'Thick'
        },
        
    ]
 
    function Crust (){
        navigation.navigate('toppings', {datacrust:btn,datasize:data})
     
      }

  return (
   
    <View style={{flex:10}}>
      <View style={{flex:8}}>
        <LinearGradient tart={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{height:210}}>
            <View style={{padding:10, width:250 }}>
                <Text style={{fontSize:25 , color:'white'}}>Create Your Pizza </Text> 
                <Text style={{fontSize:10 , color:'white'}}>SIZE, CRUST, TOPPING</Text>
            </View>
            <View style={{alignItems:'flex-end' ,bottom:55 , right:10}}>
                <Text style={{fontSize:25 , color:'white', fontWeight:'bold'}}>
                  {(btn=='thin') ?
                 " $2.00":"$4.00"
                
                }
                  </Text>
            </View>
            
            <View style={{backgroundColor:'#ffffff60', width:320, height:320, alignSelf:'center' 
            , borderBottomRightRadius:150
            , borderBottomLeftRadius:150
            , borderTopRightRadius:150
            , borderTopLeftRadius:150,
            // top:80,
            alignItems:'center',
            // position:'absolute'
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
                }}><Text style={{color:'#6D6E9C'}}>
                  {(btn=='thin')?
                  "+$2.00":"+$4.00"
                }
                  </Text></View>
            </View>
        </LinearGradient>
        </View>
        <View style={{ backgroundColor:'#FFFFFF60' , width:320 , alignSelf:'center' , flex:1.5,
         borderBottomRightRadius:20
         , borderBottomLeftRadius:20
         , borderTopRightRadius:20
         , borderTopLeftRadius:20,
         marginBottom:5
     }}>
            <View style={{alignItems:'center'}}>

            <Text style={{color:'#6D6E9C', fontSize:20 , paddingTop:10}}> Choose your <Text style={{fontWeight:'bold'}}>crust</Text></Text>
            </View>
            <View style={{alignItems:'center'}} >
               
                <View style={{flexDirection:'row', paddingBottom:10}}>

<TouchableOpacity style={{  width:70 ,alignItems:'center',justifyContent:'center'}} >
    {(btn=='thin')?
    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{width:70,margin:10 ,
        borderBottomRightRadius:20
      , borderBottomLeftRadius:20
      , borderTopRightRadius:20
      , borderTopLeftRadius:20}}>
    <Text style={{textAlign:'center',padding:5}} >{crust[0].crust}</Text>
    </LinearGradient>:<Text onPress={() => setbtn('thin')}>{crust[0].crust}</Text>
    
}
</TouchableOpacity> 
<TouchableOpacity style={{  width:70 ,alignItems:'center',justifyContent:'center'}} >
    {(btn=='thick')?
    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{width:70,margin:10 ,
        borderBottomRightRadius:20
      , borderBottomLeftRadius:20
      , borderTopRightRadius:20
      , borderTopLeftRadius:20}}>
    <Text style={{textAlign:'center',padding:5}}>{crust[1].crust}</Text>
    </LinearGradient>:<Text onPress={() => {setbtn('thick')}}>{crust[1].crust}</Text>
    
}
</TouchableOpacity> 

{/* <TouchableOpacity style={{  width:70 ,alignItems:'center', padding:5}} ><Text onPress={()=> setbtn('med')}>{size[1].size}</Text></TouchableOpacity>
<TouchableOpacity style={{  width:70 ,alignItems:'center', padding:5}} ><Text onPress={()=> setbtn('large')}>{size[2].size}</Text></TouchableOpacity> */}
</View>
            </View>
        </View>
        <View style={{flex:0.9 }}>

        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{ height:51}}>
            <TouchableOpacity style={{color:'#ffffff' , alignItems:'center'}} onPress={Crust}><Text style={{top:15 , color:'#ffffff'}}>Next</Text></TouchableOpacity>
        </LinearGradient>
        </View>

    </View>
    
  );
};



export default Crustfun;
