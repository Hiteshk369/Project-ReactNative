import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import PhoneInput from 'react-native-phone-number-input';

const SellPackage = () => {
  return (
    <ScrollView>
      <View>
        <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}>
          <View style={styles.navBackground}>
            <MaterialIcons
              name="arrow-back-ios"
              color="#fff"
              style={styles.backIcon}
            />
            <Text style={styles.leftText}>Sell Package</Text>
            <Text style={styles.leftText}>Send</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.containerInput}>
        <PhoneInput
          containerStyle={styles.phoneNumberView}
          textContainerStyle={styles.textContainer}
        />
      </View>
      <View style={styles.nameInputHolder}>
        <TextInput
          placeholderTextColor={'#d3d3d3'}
          style={styles.inputField}
          placeholder="Name"
        />
      </View>
      <View style={styles.nameInputHolder}>
        <TextInput
          placeholderTextColor={'#d3d3d3'}
          style={styles.inputField}
          placeholder="E-mail"
        />
      </View>
      <Text style={styles.consultationHeader}>Consultations</Text>
      <View style={styles.consultationInput}>
        <TextInput
          placeholderTextColor={'#d3d3d3'}
          style={styles.consultationinputField}
          placeholder="Text"
        />
        <TextInput
          placeholderTextColor={'#d3d3d3'}
          style={styles.consultationinputField}
          placeholder="Audio"
        />
        <TextInput
          placeholderTextColor={'#d3d3d3'}
          style={styles.consultationinputField}
          placeholder="Video"
        />
      </View>
      <Text style={styles.consultationBottomText}>
        Please provide the number of consultaions offered
      </Text>
      <Text style={styles.consultationHeader}>Validity (in days)</Text>
      <View style={styles.nameInputHolder}>
        <TextInput
          placeholderTextColor={'#d3d3d3'}
          style={styles.inputField}
          placeholder="30"
        />
      </View>
      <Text style={styles.consultationBottomText}>
        You can set the days within which patient has to start consultations
        after making a payment
      </Text>
      <Text style={styles.consultationHeader}>Price</Text>
      <View style={styles.priceInput}>
        <TextInput
          placeholderTextColor={'#000'}
          style={styles.priceInputField}
          placeholder="₹(INR)"
        />
        <FontAwesome
          name="angle-down"
          color="#000"
          style={styles.priceDropDown}
        />
        <TextInput
          placeholderTextColor={'#d3d3d3'}
          style={styles.amountInputField}
          placeholder="Amount"
        />
      </View>
      <Text style={styles.consultationBottomText}>
        Patients will receive instructions to make payment by SMS and email
      </Text>
      <TouchableOpacity style={styles.buttonBackground}>
        <MaterialIcons
          name="add-circle"
          color="#fff"
          style={styles.addButtonIcon}
        />
        <Text style={styles.buttonText}>Create New Package</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  navBackground: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '25%',
    marginBottom: '5%',
  },
  leftText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '19%',
    fontSize: 20,
    color: '#fff',
  },
  backIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '8%',
    fontSize: 25,
    fontWeight: '600',
  },

  containerInput: {
    marginTop: 10,
    // marginBottom: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  phoneNumberView: {
    width: '99%',
    height: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1.5,
    borderColor: '#D3D3D3',
  },
  textContainer: {
    paddingVertical: 0,
    borderRadius: 10,
  },
  inputField: {
    width: '100%',
    fontSize: 16,
    color: '#606060',
  },
  nameInputHolder: {
    height: 42,
    width: '93%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D3D3D3',
    borderBottomWidth: 1.5,
    color: '#606060',
    paddingLeft: '1%',
    margin: '4%',
    marginTop: '2%',
    marginLeft: '3%',
    marginBottom: '0%',
  },
  consultationHeader: {
    paddingTop: '5%',
    marginLeft: '4%',
    fontSize: 19,
    color: '#000',
    fontWeight: '500',
  },
  consultationInput: {
    height: 42,
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: '#606060',
    paddingLeft: '1%',
    margin: '4%',
    marginLeft: '3%',
    marginBottom: '0%',
  },
  consultationinputField: {
    width: '100%',
    fontSize: 16,
    color: '#606060',
    borderColor: '#D3D3D3',
    borderBottomWidth: 1.5,
  },
  consultationBottomText: {
    padding: '5%',
    paddingTop: '1%',
    paddingBottom: '0%',
    fontSize: 11,
    color: '#D3D3D3',
  },
  priceDropDown: {
    fontSize: 25,
    gap: 0,
    padding: 0,
  },
  priceInputField: {
    fontSize: 20,
    borderColor: '#D3D3D3',
    borderBottomWidth: 1.5,
    width: '30%',
  },
  priceInput: {
    height: 42,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: '#606060',
    paddingLeft: '1%',
    margin: '4%',
    marginLeft: '3%',
    marginBottom: '0%',
  },
  amountInputField: {
    fontSize: 16,
    borderColor: '#D3D3D3',
    borderBottomWidth: 1.5,
    width: '53%',
  },
  buttonBackground: {
    marginLeft: '37%',
    marginTop: '20%',
    width: '60%',
    paddingVertical: 15,
    backgroundColor: '#1e1262',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  addButtonIcon: {
    marginLeft: '0%',
    fontSize: 25,
    gap: 0,
    padding: 0,
  },
});

export default SellPackage;
