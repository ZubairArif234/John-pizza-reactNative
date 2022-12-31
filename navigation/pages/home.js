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

import LinearGradient from 'react-native-linear-gradient';



const Homefunc = ({navigation, route}) => {

  function Nextstep (){
    navigation.navigate('stack')
 
  }
  return (
    <View>
     
      <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} >

      <View style={{  color: 'white', height: 130 }}>
        <View style={{ marginLeft: 25, marginTop: 15 }}>
          <View>
            <Text style={{ color: 'white' }}>Hi Jaykey!</Text>
          </View>
          <View style={{ borderLeftWidth: 1, borderColor: 'white', marginTop: 5, width: 250 }}>
            <Text style={{ color: 'white', fontSize: 23, paddingLeft: 10 }}>What <Text style={{ fontWeight: "bold" }}>Pizza</Text> do you want to try today?</Text>
          </View>
        </View>
      </View>
      </LinearGradient>
      <View style={{ justifyContent: "center", alignItems: "center" }}>

        <View style={{
          backgroundColor: "#ffffff80",
          width: 332, borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute', top: -20,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          height: 200
        }}>
          <View><Image
            style={{
              width: 175, height: 180,
              top: 20, backgroundColor: '#ffffff80',
              borderBottomLeftRadius: 20,
            }}
            source={require('../../assets/thincrustpizza.jpg')}
          /></View>
          <View style={{ width: 155, backgroundColor: '#ffffff', borderBottomRightRadius: 20, height: 180, top: 20, justifyContent: 'center' }}>
            <Text style={{ color: '#F5313F', fontSize: 18, fontWeight: 'bold' }}>Reorder again?</Text>
            <Text style={{ fontSize: 10, color: '#6D6E9C' }}>SMALL, THIN CRUST, TOMATOES, BASIL, CHEESE</Text>
            <Text style={{ fontSize: 20, color: '#6D6E9C', marginBottom: 20 }}>$ 12</Text>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#F5313F', '#FFA360']} style={{width: 123, borderBottomLeftRadius: 20,borderBottomRightRadius: 20,
               borderTopLeftRadius: 20, borderTopRightRadius: 20,
               shadowColor: ["#F5313F","#FFA360"],
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.30,
              
              elevation: 13,
               height: 38, alignItems: 'center', justifyContent: 'center',}} >

            <TouchableOpacity >
              <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 9, color: 'white', fontWeight: 'bold' }}>Add To Cart</Text>
            </TouchableOpacity>
              </LinearGradient>
          </View>
        </View>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>

        <View style={{
          backgroundColor: "white",
          width: 332, 
          // borderBottomLeftRadius: 20,
          // borderBottomRightRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          top: 190,
          
          
          // justifyContent: 'center',

          height: 260
        }}>
          <View style={{justifyContent:'center',alignItems:'center' , paddingTop:10}}>
            <Text style={{fontSize:20 , color:'red'}}>Create your<Text style={{fontWeight:'bold'}} onPress={Nextstep}> own pizza</Text></Text>
            <Text style={{fontSize:10}}>THE COST WILL DEPEND ON YOUR CUSTOMIZATION</Text>
          </View>
          <View style={{backgroundColor:'white'
          ,justifyContent:"center",alignContent:'center',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop:10
          }}>
            <Image
            style={{width:345, height:215 ,right:8}}
              source={require('../../assets/thincrustpizza2.png')}
            />
          </View>

        </View>
      </View>





    </View>
  )
}

export default Homefunc