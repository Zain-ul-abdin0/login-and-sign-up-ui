import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../pics/logoGreen.png')} style={{height:132.61,width:91.98 }}/>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.login}>Login to continue </Text>
         
         <View style={styles.inputBox}> 
             <View style={styles.inputCarrier}>
               <Ionicons name ="ios-mail" size={25} color='#30B349'/>
               <View style={{flex:1,paddingLeft:20}}>
                 <TextInput placeholder="Email Address"/>
               </View>
            </View>
         </View>

         <View style={styles.inputBox}> 
             <View style={styles.inputCarrier}>
               <Ionicons name ="ios-lock" size={25} color='#30B349'/>
               <View style={{flex:1,paddingLeft:20}}>
                 <TextInput placeholder="Password"/>
               </View>
            </View>
         </View>
        
        <View style={{flex:1,alignSelf:'flex-end',padding:20}}>
             <Text style={styles.forget}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate('SignUp')}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white',fontSize:20,fontWeight:'500'}}>Log In</Text>
           </View>
        </TouchableOpacity>

        <Text style={{fontWeight:'500',color:'#30B349',marginTop:20}}>New user? Sign up</Text>

        <Text style={{color:'#BDBDBD',marginTop:30}}>By signing up you indicate that you have read and </Text>
        <Text style={{color:'#BDBDBD'}}>agreed to the Terms of Service</Text>

      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        alignItems:'center',
        flexDirection:'column'
    },
    welcome:{
        fontSize:25,
        fontWeight:'500',
        color:'#30B349',
        paddingTop:10
    },
    inputCarrier:{
       flex:1,justifyContent:'center',paddingLeft:10,flexDirection:'row',alignItems:'center'
    },

    login:{
        color:'#30B349',
        fontSize:18,
        paddingTop:10
    },
    inputBox:{
        height:50,width:315,backgroundColor:'white',borderRadius:20,
        marginTop:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5

    },
    forget:{
      color:'#30B349'
    },
    btn:{
      width:315,
      height:48,
      marginBottom:30,
      backgroundColor:'#30B349',
      borderRadius:20,
      shadowColor: '#30B349',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
    }
})