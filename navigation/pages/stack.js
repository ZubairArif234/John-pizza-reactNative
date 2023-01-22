




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


  

const Stackfuner = ( {navigation ,route}) => {
    const [btn, setbtn] = useState('small')

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

    const size =[
        {
            index:'1',
            size:'Small',
            paisa:'8.00'
        },
        {
            index:'2',
            size:'Medium',
            paisa:'10.00'
        },
        {
            index:'3',
            size:'Large',
            paisa:'12.00'
        },
    ]
 
    function Crust (){
        navigation.navigate('crust',{ data:btn})
     
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
                <Text style={{fontSize:25 , color:'white', fontWeight:'bold'}}>
                    {(btn=='small'?
                    "$8.00":(btn=='med')?
                    "$10.00":"$12.00"

                    )}
                    </Text>
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
                    <Image style={{alignSelf:'center', bottom:15}} source={require('../../assets/mediumpizza.png')
                        // (btn=='small')?
                        // require('../../assets/smallsize.png'):(btn=='med')?
                        // require('../../assets/mediumpizza.png'):require('../../assets/largesize.png')
                        }/>

                </View>
                <View style={{top:55 ,backgroundColor:'#a0a8cc', width:50 ,
                alignItems:'center',
                borderBottomRightRadius:10
            , borderBottomLeftRadius:10
            , borderTopRightRadius:10
            , borderTopLeftRadius:10,
                }}><Text style={{color:'#6D6E9C'}}>
                    {(btn=='small') ?
                    "8'":(btn=='med')?
                    "10'":"12'"
                }
                    </Text></View>
            </View>
        </LinearGradient>
        <View style={{ backgroundColor:'#FFFFFF60' , width:320 , alignSelf:'center' , top:190,
         borderBottomRightRadius:20
         , borderBottomLeftRadius:20
         , borderTopRightRadius:20
         , borderTopLeftRadius:20,
     }}>
            <View style={{alignItems:'center'}}>

            <Text style={{color:'#6D6E9C', fontSize:20 , paddingTop:10}}> Choose your <Text style={{fontWeight:'bold'}}>size</Text></Text>
            </View>
            <View style={{alignItems:'center'}} >
               
<View style={{flexDirection:'row'}}>

<TouchableOpacity style={{  width:70 ,alignItems:'center',justifyContent:'center'}} >
    {(btn=='small')?
    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{width:70,margin:20 ,
        borderBottomRightRadius:20
      , borderBottomLeftRadius:20
      , borderTopRightRadius:20
      , borderTopLeftRadius:20}}>
    <Text style={{textAlign:'center',padding:5}} >{size[0].size}</Text>
    </LinearGradient>:<Text onPress={() => setbtn('small')}>{size[0].size}</Text>
    
}
</TouchableOpacity> 
<TouchableOpacity style={{  width:70 ,alignItems:'center',justifyContent:'center'}} >
    {(btn=='med')?
    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{width:70,margin:20 ,
        borderBottomRightRadius:20
      , borderBottomLeftRadius:20
      , borderTopRightRadius:20
      , borderTopLeftRadius:20}}>
    <Text style={{textAlign:'center',padding:5}}>{size[1].size}</Text>
    </LinearGradient>:<Text onPress={() => {setbtn('med')}}>{size[1].size}</Text>
    
}
</TouchableOpacity> 
<TouchableOpacity style={{  width:70 ,alignItems:'center',justifyContent:'center'}} >
    {(btn=='large')?
    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{width:70,margin:20 ,
        borderBottomRightRadius:20
      , borderBottomLeftRadius:20
      , borderTopRightRadius:20
      , borderTopLeftRadius:20}}>
    <Text style={{textAlign:'center',padding:5}}>{size[2].size}</Text>
    
    </LinearGradient>:
    <Text onPress={() => {setbtn('large')}}>{size[2].size}</Text>
    
}
</TouchableOpacity> 
{/* <TouchableOpacity style={{  width:70 ,alignItems:'center', padding:5}} ><Text onPress={()=> setbtn('med')}>{size[1].size}</Text></TouchableOpacity>
<TouchableOpacity style={{  width:70 ,alignItems:'center', padding:5}} ><Text onPress={()=> setbtn('large')}>{size[2].size}</Text></TouchableOpacity> */}
</View>
            </View>
        </View>
        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{top:195 , height:50}}>
            <TouchableOpacity style={{color:'#ffffff' , alignItems:'center'}} onPress={Crust}><Text style={{top:15 , color:'#ffffff'}}>Next</Text></TouchableOpacity>
        </LinearGradient>

    </View>
    </View>
  );
};

export default Stackfuner;
