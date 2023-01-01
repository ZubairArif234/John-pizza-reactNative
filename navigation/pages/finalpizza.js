






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




const Finalpizzafun = ({ navigation, route }) => {

    // const  [ pizzaimage , setpizzaimage] =(false)
    const toppingsobj = [
        {
            index: '1',
            toppings: 'Pepperoni',
            image: require("../../assets/pepperoni.png"),
            // imagepizza :setpizzaimage(require("../../assets/pepperonipizza.png"))
        },
        {
            index: '2',
            toppings: 'Mashroom',
            image: require("../../assets/mashroom.png"),
            // imagepizza : setpizzaimage(require("../../assets/mashroomspizza.png")),
        },
        {
            index: '3',
            toppings: 'Olive',
            image: require("../../assets/olive.jpg"),
            // imagepizza :setpizzaimage(require("../../assets/olivepizza.png")),
        },
        {
            index: '4',
            toppings: 'Onions',
            image: require("../../assets/onions.jpg"),
            // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
        },
        {
            index: '5',
            toppings: 'Capsicum',
            image: require("../../assets/capsicum.jpg"),
            // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
        },
        {
            index: '6',
            toppings: 'Jalapeno',
            image: require("../../assets/jalapeno.jpg"),
            // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
        },
    ]

    function Toppings() {
        navigation.navigate('check')

    }

    return (
        <View>
            <View>
                <LinearGradient tart={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#F5313F', '#FFA360']} style={{ height: 150 }}>
                    <View style={{ padding: 20, width: 250 }}>
                        <Image source={require('../../assets/pizzavector.png')} />
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: '300' }}>Check your </Text>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Custom pizza</Text>
                    </View>
                    {/* <View style={{alignItems:'flex-end' ,bottom:55 , right:10}}>
                <Text style={{fontSize:25 , color:'white', fontWeight:'bold'}}>$14.00</Text>
            </View> */}

                    <View style={{
                        backgroundColor: '#ffffff80', width: 550, height: 470, alignSelf: 'center', left: '30%',
                        borderBottomRightRadius: 200
                        , borderBottomLeftRadius: 275
                        , borderTopRightRadius: 200
                        , borderTopLeftRadius: 275,
                        top: 60,
                        alignItems: 'center',
                        position: 'absolute'
                    }}>
                        <View
                            style={{
                                width: 500, height: 450, top: 25
                                , borderBottomRightRadius: 170
                                , borderBottomLeftRadius: 225
                                , borderTopRightRadius: 170
                                , borderTopLeftRadius: 225,
                            }}
                        >
                            <Image style={{ alignSelf: 'center', bottom: 40, right: '30%' }} source={require('../../assets/halfpizza.png')} />

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
                    <View style={{
                        backgroundColor: '#FFFFFF90', width: 250, height: 300,
                        top: 70,
                        borderBottomRightRadius: 20
                        //  , borderBottomLeftRadius:20
                        , borderTopRightRadius: 20,
                        
                        //  , borderTopLeftRadius:20,
                    }}>
                        <View style={{ paddingLeft: 20, paddingTop: 50, paddingRight: 20 }}>

                            <Image source={require('../../assets/cartvector.png')} />
                            <Text style={{ fontSize: 12, color: 'red', borderBottomWidth: 1, paddingBottom: 5, borderColor: '#DADAE5' }}>order summary</Text>

<View style={{flex:1 , flexDirection:'row' ,width:200, height:170, justifyContent:'space-between' , marginTop:20  }}>
    <View style={{width:100 , height:150 }}>
    <Text style={{color:'#6D6E9C'}}> Medium </Text>
    <Text style={{color:'#6D6E9C'}}> Thick crust </Text>
    <Text style={{color:'#6D6E9C'}}> Pepperoni </Text>
    <Text style={{color:'#6D6E9C'}}> Olive </Text>
    <Text style={{color:'#6D6E9C'}}> Mashroom </Text>
    <Text style={{color:'#6D6E9C'}}> Onions </Text>
    <Text style={{color:'#6D6E9C', paddingTop:20 ,fontSize:15 , fontWeight:"bold" }}> Total </Text>
    </View>
    <View style={{width:50 , height:150 }}>
    <Text style={{color:'#6D6E9C' }}>$10.00</Text>
    <Text style={{color:'#6D6E9C' }}>$04.00</Text>
    <Text style={{color:'#6D6E9C' }}>$00.00</Text>
    <Text style={{color:'#6D6E9C' }}>$00.00</Text>
    <Text style={{color:'#6D6E9C' }}>$00.00</Text>
    <Text style={{color:'#6D6E9C' }}>$00.50</Text>
    <Text style={{color:'#6D6E9C', paddingTop:20 ,fontSize:15 , fontWeight:"bold" }}>$14.50</Text>
    </View>
</View>
                            {/* <View>
                                
                            </View> */}

                        </View>

                    </View>
                </LinearGradient>
                <View style={{
                    backgroundColor: '#FFFFFF60', width: 320, alignSelf: 'center', top: 170,
                    borderBottomRightRadius: 20
                    , borderBottomLeftRadius: 20
                    , borderTopRightRadius: 20
                    , borderTopLeftRadius: 20,
                }}>
                    {/* <View style={{alignItems:'center'}}>

            <Text style={{color:'#6D6E9C', fontSize:20 , paddingTop:10}}> Choose upto <Text style={{fontWeight:'bold'}}>7 Toppings</Text></Text>
            </View> */}
                    <View style={{ alignItems: 'center' }} >
                        {/* <FlatList
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
    <TouchableOpacity ></TouchableOpacity>
</View>
                        </View>
                    ) 
                }}
                /> */}
                    </View>
                </View>
                <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{top:395 , height:50  }}>
            <TouchableOpacity style={{color:'#ffffff' , alignItems:'center'}} onPress={Toppings}><Text style={{top:15 , color:'#ffffff'}}>Next</Text></TouchableOpacity>
        </LinearGradient>

            </View>
        </View>
    );
};



export default Finalpizzafun;
