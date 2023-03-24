import { Text, View,StyleSheet, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

import OTPTextView from 'react-native-otp-textinput';

const Otpkey = () => {
    return (
      <View style={styles.inputFormContainer}>
        <View>
          <Text style={styles.headerContainer}>You're Almost there!</Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
          </View>
          <Text style={styles.keyText}>Key in OTP Code</Text>
          <Text style={styles.otpText}>You'll recive an OTP code in SMS.Please fill in the OTP to verify your identity.</Text>
          <OTPTextView
            containerStyle={styles.InputContainer}
            textInputStyle={styles.roundedTextInput}
            inputCount={5}
            tintColor="#1e1262"
          />
        <TouchableOpacity style={styles.buttonBackground} >
          <Text style={styles.buttonText} >Submit</Text>
         </TouchableOpacity>        
        <TouchableOpacity style={styles.buttonBackground} >
          <Text style={styles.buttonText} >Cancel</Text>
         </TouchableOpacity>        
        </View>
      </View>
    )
  }
  const styles = StyleSheet.create({
    inputFormContainer: {
      height: 700,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      borderRadius: 25,
      marginBottom: 50,
      marginTop: 50
    },
    headerContainer:{
      marginTop:50,
      marginLeft:95,
      alignItems:'center',
      justifyContent:'center',
      fontSize:18,
      fontWeight:'bold',
      color:'#000000'
    },
    boxContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    box: {
      height: 125,
      width: 125,
      borderColor: '#000',
      borderWidth: 1,
      marginTop: 60,
      marginBottom: 15,
      borderRadius: 100,
    },
    keyText:{
      marginTop:20,
      color:'#000000',
      fontSize:18,
      alignItems:'center',
      justifyContent:'center'
    },
    otpText:{
      padding:20,
      paddingLeft:50,
      paddingRight:50,
      color: '#000000'
    },
    InputContainer: {
      marginBottom: 20,
    },
    roundedTextInput: {
      borderRadius: 10,
      borderWidth: 2,
      backgroundColor:'#D3D3D3',
    },
    buttonBackground: {
      margin: 5,
      width: '36%',
      paddingVertical: 12,
      backgroundColor: '#1e1262',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 15,
      fontWeight: '600',
      color: '#fff',
    },
  })


export default Otpkey;