
import React from 'react';

import {
    Text,
    View,
    Image,
    TouchableOpacity,

} from 'react-native';
import { useEffect } from 'react';
import EIcon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const Finalpizzafun = ({ route, navigation }) => {

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
    const { datacrust, datasize } = route.params;
    let one = (datasize == 'small') ? 8 : (datasize = 'med') ? 10 : 12;
    let two = (datacrust == 'thin') ? 2 : 4;


    function Toppings() {
        navigation.navigate('check')
    }
    return (
        
            <View style={{flex:10 ,}}>
                <View style={{flex:9.2 , }}>
                <LinearGradient tart={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#F5313F', '#FFA360']} style={{ height: 150 }}>
                    <View style={{ padding: 20, width: 250 }}>
                        <Image source={require('../../assets/pizzavector.png')} />
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: '300' }}>Check your </Text>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Custom pizza</Text>
                    </View>
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
                    </View>
                    <View style={{
                        backgroundColor: '#FFFFFF90', width: 250, height: 300,
                        top: 70,
                        borderBottomRightRadius: 20
                        , borderTopRightRadius: 20,
                    }}>
                        <View style={{ paddingLeft: 20, paddingTop: 50, paddingRight: 20 }}>
                            <Image source={require('../../assets/cartvector.png')} />
                            <Text style={{ fontSize: 12, color: 'red', borderBottomWidth: 1, paddingBottom: 5, borderColor: '#DADAE5' }}>order summary</Text>
                            <View style={{ flex: 1, flexDirection: 'row', width: 200, height: 170, justifyContent: 'space-between', marginTop: 20 }}>
                                <View style={{ width: 100, height: 150 }}>
                                    <Text style={{ color: '#6D6E9C' }}> {datasize} </Text>
                                    <Text style={{ color: '#6D6E9C' }}> {datacrust} crust </Text>
                                    <Text style={{ color: '#6D6E9C' }}> Pepperoni </Text>
                                    <Text style={{ color: '#6D6E9C' }}> Olive </Text>
                                    <Text style={{ color: '#6D6E9C' }}> Mashroom </Text>
                                    <Text style={{ color: '#6D6E9C' }}> Onions </Text>
                                    <Text style={{ color: '#6D6E9C', paddingTop: 20, fontSize: 15, fontWeight: "bold" }}> Total </Text>
                                </View>
                                <View style={{ width: 50, height: 150 }}>
                                    <Text style={{ color: '#6D6E9C' }}> {(datasize == 'small') ? '$08.00' : (datasize == 'med') ? '$10.00' : '$12.00'}</Text>
                                    <Text style={{ color: '#6D6E9C' }}>{(datacrust == 'thin') ? '$02.00' : '$04.00'}</Text>
                                    <Text style={{ color: '#6D6E9C' }}>$00.00</Text>
                                    <Text style={{ color: '#6D6E9C' }}>$00.00</Text>
                                    <Text style={{ color: '#6D6E9C' }}>$00.00</Text>
                                    <Text style={{ color: '#6D6E9C' }}>$00.00</Text>
                                    <Text style={{ color: '#6D6E9C', paddingTop: 20, fontSize: 15, fontWeight: "bold" }}>${one + two}.00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
                </View>
                
                <View style={{flex:0.8}}>
                <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#F5313F', '#FFA360']} style={{ height: 51 }}>
                    <TouchableOpacity style={{ color: '#ffffff', alignItems: 'center' }} onPress={Toppings}><Text style={{ top: 15, color: '#ffffff' }}>Next</Text></TouchableOpacity>
                </LinearGradient>
                </View>
            </View>
        
    );
};



export default Finalpizzafun;
