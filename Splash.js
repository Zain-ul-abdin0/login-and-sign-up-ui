import React, { Component } from 'react';
import {View, Image} from 'react-native';

class Splash extends Component {

componentDidMount(){
  setTimeout(()=>{
   this.props.navigation.navigate('Login')
  },5000)
}
  render() {
    return (

         <View style={{height:'100%',width:'100%',backgroundColor:'#30B349'}}>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../pics/logo.png')}/>
            </View>
        </View>
    );
  }
}

export default Splash;
