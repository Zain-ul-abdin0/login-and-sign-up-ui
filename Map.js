import React from 'react';
import MapView from 'react-native-maps';
import { View , Dimensions,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Math.round(Dimensions.get('window').width);

export default class Map extends React.Component {
  render() {
    return (
      <View style={{flex:1,flexDirection:'column'}}>
      
      <View style={{height:80,width:'100%',backgroundColor:'#30B349',justifyContent:'center',paddingLeft:10,paddingTop:10}}>
      <Ionicons name="ios-menu" size={40} color="white"/>

            </View>
      <MapView style={{flex:1}}/>
    
</View>
    );
  }
}