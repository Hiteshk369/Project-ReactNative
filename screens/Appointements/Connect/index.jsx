import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Connect = () => {
  return (
      <View style={styles.container}>
        <View style={styles.wholeContainer}>
        <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}>
          <View style={styles.navBackground}>
            <MaterialIcons
              name="arrow-back-ios"
              color="#fff"
              style={styles.backIcon}
            />
            <Text style={styles.mainHeader}>CONNECT</Text>
          </View>
          <View style={styles.inputContainer}>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
              style={styles.inputField}
              placeholder="Enter Room Id"
            />
          </View>
          <Text style={styles.idBottomText}>
            The Room Id is a 10 Character alpha-numeric ID that can be found in
            the confirmation SMS/E-Mail/WhatsApp message.
          </Text>
          </View>
        </LinearGradient>
        </View>
        <TouchableOpacity style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Save & Proceed</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  wholeContainer:{
    height:'75%'
  },
  gradient: {
    height: '75%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position:'relative'
  },
  navBackground: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '25%',
    marginBottom: '5%',
  },
  mainHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '19%',
    fontSize: 28,
    fontWeight: '500',
    color: '#fff',
  },
  backIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '8%',
    fontSize: 25,
    fontWeight: '600',
  },
  inputField: {
    fontSize: 18,
    width: '100%',
    color: '#606060',
  },
  inputContainer:{
    height:'75%'
  },
  nameInputHolder: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#afafaf',
    borderWidth: 1,
    borderRadius: 8,
    color: '#d3d3d3',
    paddingLeft: '24%',
    margin: '10%',
    marginTop: '30%',
  },
  idBottomText: {
    padding: '12%',
    paddingTop: '1%',
    paddingBottom: '0%',
    fontSize: 14,
    color: '#D3D3D3',
  },
  buttonBackground: {
    // margin: 5,
    height:'25%',
    margin:'2%',
    marginTop:'5%',
    width: '95%',
    paddingVertical: '5%',
    backgroundColor: '#1e1262',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    bottom:0
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
});

export default Connect;

//keyboard