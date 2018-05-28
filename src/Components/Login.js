import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,TextInput,Text,NativeModules,Platform,
  StatusBar,Dimensions,Keyboard, KeyboardAvoidingView,AsyncStorage,
} from 'react-native';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password: '',
    }
  }

 render() {

   return (
     <View style={{backgroundColor:'#292457',flex:1}}>
     <KeyboardAwareScrollView contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center'}}>
 <View style={styles.loginForm}>
 <StatusBar barStyle='light-content'/>
         <Image style={styles.ImageLogo} source={require('../Icons/HomeLogo.png')} />
          <View style={styles.loginContainer}>
          <Text style={styles.labelText}>Email</Text>
          <View style={styles.inputView}>
            <Image style={styles.inputIcon} source={require('../Icons/userProfile.png')} />
            <TextInput style = {styles.loginInput}
                           returnKeyType = {"next"}
                           onChangeText={(emailid)=>this.setState({email:emailid.toLowerCase()})}
                           underlineColorAndroid = "transparent"
                           placeholder = "Enter your Email"
                           placeholderTextColor = "#433E6B"
                           autoCapitalize = "none"
                           onSubmitEditing={(event) => {
                             this.refs.password.focus();
                           }}/>
            </View>
            <Text style={styles.labelText}>Password</Text>
          <View style={styles.inputView}>
            <Image style={styles.inputIcon} source={require('../Icons/userPassword.png')} />
            <TextInput style = {styles.loginInput}
              ref='password'
              onChangeText={(pass)=>this.setState({password:pass})}
              returnKeyType = {"done"}
              underlineColorAndroid = "transparent"
              placeholder = "Enter your Password"
              placeholderTextColor = "#433E6B"
              autoCapitalize = "none" secureTextEntry
              onSubmitEditing={(event) => {

              }}/>
          </View>
          </View>
          <View style={styles.newForgetPassView}>
            <TouchableOpacity style={styles.forgotPassword} transparent
              >
              <Text style={{color:'white',fontSize:14}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton} >
            <Text style={{color:"white",fontWeight:"bold",fontSize:15}}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fbloginButton} >
            <Image source={require('../Icons/facebook.png')} style={{marginRight:5}} />
            <Text style={{color:"white",fontWeight:"bold",fontSize:15}}>LOGIN WITH FACEBOOK</Text>
          </TouchableOpacity>
        < TouchableOpacity style={styles.newRegitration} transparent  >
            <Text style={{color:'white',fontSize:14}}>New User? Register</Text>
          </TouchableOpacity>
        </View>
         </KeyboardAwareScrollView>
         </View>

   )
 }
}
const styles = StyleSheet.create({
  labelText: {
    marginLeft:20,
    marginTop:10,
    color:'white',
    fontSize:12,
  },
  inputView: {
    flexDirection:"row",
    width:screenHeight*0.45,
    height: 40,
    borderColor: '#433E6B',
    borderBottomWidth: 0.5,
  },
  loginInput: {
    width:screenHeight*0.45,
    color:"white",
    fontSize:12,
  },
  loginForm:{
    flex:1,
    backgroundColor:'#292457',
    alignItems: 'center',
    justifyContent:"center"
  },
  loginContainer: {
    alignItems: 'flex-start',
    justifyContent:"center",
    height:130,
    marginTop:screenHeight*0.11
  },
  ImageLogo : {
    //marginTop:screenHeight*0.11,
    height:120,
    width:120,
  },
  inputIcon: {
    height:15,
    width:15,
    marginTop:10,
    marginRight:5,
    tintColor:'#433E6B'
  },
  loginButton: {
    width:screenHeight*0.5,
    height:50,
    borderRadius:25,
    backgroundColor:"#67DADA",
    alignItems:"center",
    justifyContent: 'center',
    elevation: 8,
    shadowColor:'black',
    shadowOffset: {
      width:3,
      height:3,
    },
    shadowOpacity: 0.5,
    shadowRadius:5
  },
  fbloginButton: {
    flexDirection: 'row',
    width:screenHeight*0.5,
    height:50,
    borderRadius:25,
    backgroundColor:"#3B5998",
    alignItems:"center",
    justifyContent: 'center',
    elevation: 8,
    shadowColor:'black',
    shadowOffset: {
      width:3,
      height:3,
    },
    shadowOpacity: 0.5,
    shadowRadius:5,
    marginTop: 15,
  },
  forgotPassword: {
    marginTop:10,
    width:120,
    alignItems: 'center',
  },
  newForgetPassView: {
    width:screenHeight*0.5,
    alignItems:'flex-end',
    height:12,
    marginBottom:40
  },
  newRegitration: {
    marginTop:10,
    width:128,
    alignItems: 'center',
    marginBottom:10,
  },
  modalContent: {
    margin: screenWidth*0.0379,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:screenWidth*0.025,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  sumbitButton: {
    height:40,
    marginRight:20,
    borderRadius:10,
    padding:10
  },
});


 export default Login;
