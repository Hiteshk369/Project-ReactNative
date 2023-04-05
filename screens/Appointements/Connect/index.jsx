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
import {Colors} from '../../../constants/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Connect = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wholeContainer}>
        <LinearGradient
          colors={[Colors.darkPurple, Colors.lightPurple]}
          style={styles.gradient}>
          <View style={styles.navBackground}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.white}
              style={styles.backIcon}
            />
            <Text style={styles.mainHeader}>CONNECT</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.nameInputHolder}>
              <TextInput
                placeholderTextColor={Colors.gray_200}
                style={styles.inputField}
                placeholder="Enter Room Id"
              />
            </View>
            <Text style={styles.idBottomText}>
              The Room Id is a 10 Character alpha-numeric{'\n'}
              {'     '}ID that can be found in the confirmation {'\n'}
              {'          '}SMS/E-Mail/WhatsApp message.
            </Text>
          </View>
        </LinearGradient>
      </View>
      <TouchableOpacity style={styles.buttonBackground}>
        <Text style={styles.buttonText}>Click To Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  wholeContainer: {
    // height: '85%',
  },
  gradient: {
    height: '90%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
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
    color: Colors.white,
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
    color: Colors.gray_700,
  },
  inputContainer: {
    // height: '75%',
  },
  nameInputHolder: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.slate_300,
    borderWidth: 1,
    borderRadius: 8,
    color: Colors.gray_200,
    paddingLeft: '24%',
    margin: '10%',
    marginTop: '30%',
  },
  idBottomText: {
    paddingHorizontal: '13%',
    paddingTop: '1%',
    fontSize: 14,
    color: Colors.gray_200,
  },
  buttonBackground: {
    margin: '2%',
    width: '95%',
    paddingVertical: '5%',
    backgroundColor: Colors.darkPurple,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default Connect;

//keyboard
