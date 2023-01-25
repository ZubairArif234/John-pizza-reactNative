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
} from 'react-native';
import { Stackapp } from '../navigation';
// import Testfun from './pages/text';
import { useEffect } from 'react';
import EIcon from 'react-native-vector-icons/Entypo';

import LinearGradient from 'react-native-linear-gradient';



const Checkfun = ({ navigation, route }) => {
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

    function Nextstep() {
        navigation.navigate('stack')

    }
    return (
<View style={{flex:10}}>
        <View style={{flex:2.5}}>
            <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#F5313F', '#FFA360']} >

                <View style={{ color: 'white', height: 150 }}>
                    <View style={{ marginLeft: 25, marginTop: 15 }}>
                        <View>
                            <Image source={require('../../assets/cart.png')} />
                        </View>
                        <View style={{ marginTop: 5, width: 250 }}>
                            <Text style={{ color: 'white', fontSize: 23, paddingLeft: 10 }}>Check out</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
            </View >
            <View style={{ alignItems: "center", flex:4 }}>

                <View style={{
                    backgroundColor: "#ffffff80",
                    width: 332, borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: 'absolute', top: -50,
                    flex: 1,
                    flexDirection: 'row',
                    // justifyContent: 'space-between',
                    height: 260
                }}>
                    <View style={{ height: 30, margin: 10 }}>

                        <Text style={{ color: '#F5313F', fontSize: 20, fontWeight: 'bold' }}><Image source={require('../../assets/Location.png')} />  Delivery Address</Text>
                    </View>

                    <View style={{ height: 30, marginLeft: 90, margin: 10 }}>

                        <TouchableOpacity style={{ height: 50, borderBottomLeftRadius: 2, }}>
                            <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#F5313F', '#FFA360']} style={{
                                height: 25, width: 25, borderBottomLeftRadius: 15
                                , borderBottomRightRadius: 15,
                                borderTopLeftRadius: 15
                                , borderTopRightRadius: 15,
                                alignItems: 'center'
                            }} >

                                <Image style={{ margin: 5 }} source={require('../../assets/pencil.png')} />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </View>
                    <View style={{ width: 310, top: 10,  borderBottomWidth:1  }}>
                   <Text style={{fontSize:18 , fontWeight:'bold', paddingLeft:5, paddingTop:5 ,paddingBottom:0, color:'#6D6E9C'}}>Home</Text>
                   <Text style={{fontSize:15 , paddingLeft:5 , paddingTop:0, paddingBottom:10, color:'#6D6E9C'}}>3728  Brand Road, Swift Current</Text>
                    </View>
                    <View style={{ width: 310, top: 10,  borderBottomWidth:1 ,   }}>
                   <Text style={{fontSize:15 , fontWeight:'bold', paddingLeft:5, paddingTop:20 ,paddingBottom:20, color:'#6D6E9C'}}>+    Add delivery instruction</Text>
                   
                    </View>
                    <View style={{ width: 310, top: 20,  }}>
                   <Text style={{fontSize:18 , fontWeight:'bold', paddingLeft:5, paddingTop:5 ,paddingBottom:0, color:'#6D6E9C'}}>Contactless Delivery:</Text>
                   <Text style={{fontSize:14 , paddingLeft:5 , paddingTop:0, paddingBottom:5, color:'#6D6E9C'}}>Rider will place order at your door</Text>
                    </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex:3 }}>

                <View style={{
                    backgroundColor: "white",
                    width: 332,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    // top: 40,
                

                    height: 150
                }}>
                    <View style={{ justifyContent: 'center',  paddingTop: 20,flex: 1,
                    flexDirection: 'row', }}>
                    <View style={{ height: 30, marginLeft: 10 }}>

<Text style={{ color: '#F5313F', fontSize: 20, fontWeight: 'bold' }}><Image source={require('../../assets/wallet.png')} />   Payment method</Text>
</View>

<View style={{ height: 30, marginLeft: 80 ,}}>

<TouchableOpacity style={{ height: 25 }}>
    <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#F5313F', '#FFA360']} style={{
        height: 25, width: 25, borderBottomLeftRadius: 15
        , borderBottomRightRadius: 15,
        borderTopLeftRadius: 15
        , borderTopRightRadius: 15,
        
    }} >

        <Image style={{ margin: 5 }} source={require('../../assets/pencil.png')} />
    </LinearGradient>
</TouchableOpacity>
</View>
                    </View>
                    <View style={{top:-110}}>

                    <View style={{
                        
                        
                        // paddingTop: 10
                        top:40,
                        flex:1, flexDirection:'row',
                        // justifyContent:'space-evenly'
                    }}>
                        <View style={{flex:1, flexDirection:'row',height:40}}>

                        <View style={{margin:10}}>
                            <Image source={require('../../assets/visa.png')}/>
                           
                        </View>
                    <View style={{marginTop:10, }}>
                        <Text style={{color:'#6D6E9C', fontWeight:'bold'}}>Visa</Text>
                        <Text style={{color:'#6D6E9C', fontSize:12}}>....0145</Text>
                    </View>
                        </View>
                    <View style={{margin:10 ,height:20}}>
                        <Text>$ 14.50</Text>
                    </View>

                    </View>
                    <Text style={{backgroundColor:'#DEF3E1', marginLeft:10,padding:5 , width:170,borderBottomLeftRadius: 5
        , borderBottomRightRadius: 5,
        borderTopLeftRadius: 5
        , borderTopRightRadius: 5,color:'#57C168',top:90 }}>10% Cashback Applied</Text>
                   
                        </View>

                </View>
                
            </View>
           <View style={{flex:0.8}}>
          
          <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{ height:50}}>
            <TouchableOpacity style={{color:'#ffffff' , alignItems:'center'}} ><Text style={{top:15 , color:'#ffffff'}}>Place order</Text></TouchableOpacity>
        </LinearGradient>
           </View>




        </View>
    )
}

export default Checkfun