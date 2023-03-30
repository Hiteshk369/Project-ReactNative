import {ScrollView, Text, View, StyleSheet, TextInput} from 'react-native';
import React, {Component} from 'react';

import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Colors} from '../../../constants/colors';


const CreateNewPackage = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <LinearGradient colors={[Colors.darkPurple,Colors.lightPurple]} style={styles.gradient}>
          <View style={styles.navBackground}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.white}
              style={styles.backIcon}
            />
            <Text style={styles.leftText}>Create New Package</Text>
          </View>
        </LinearGradient>
        <View style={styles.onlineFlexText}>
          <Text style={styles.onlineText}>Patient will pay Online</Text>
          <MaterialIcons
            name="toggle-on"
            color={Colors.blue_500}
            style={styles.togglIcon}
          />
        </View>
        <View style={styles.nameInputHolder}>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.inputField}
            placeholder="Package Name"
          />
        </View>
        <View style={styles.nameInputHolder}>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.inputField}
            placeholder="Package Description"
          />
        </View>
        <Text style={styles.descriptionText}>
          You should provide package description in detail
        </Text>
        <Text style={styles.validityHeader}>Validity</Text>
        <View style={styles.validityInput}>
          <TextInput
            placeholderTextColor={Colors.black}
            style={styles.validityDayInput}
            placeholder="Days"
          />
          <FontAwesome
            name="angle-down"
            color={Colors}
            style={styles.validityDayDown}
          />
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.numberInputField}
            placeholder="Enter Number"
          />
        </View>
        <Text style={styles.descriptionText}>
          You should provide validity in days,weeks or months for this package
          Do not forget to provide number of days,weeks or months
        </Text>
        <Text style={styles.validityHeader}>Number Of Consultations</Text>
        <View style={styles.consultationInput}>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.consultationinputField}
            placeholder="Text"
          />
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.consultationinputField}
            placeholder="Audio"
          />
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.consultationinputField}
            placeholder="Video"
          />
        </View>
        <Text style={styles.audioHeader}>
          Audio/Video call duration (In Mins)
        </Text>
        <View style={styles.nameInputHolder}>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.audioInputField}
            placeholder="10"
          />
          <FontAwesome
            name="angle-down"
            color={Colors}
            style={styles.audioDayDown}
          />
        </View>
        <Text style={styles.descriptionText}>
          Not applicable is the default value for this package you can change
          the call duration as per your convenience
        </Text>
        <View style={styles.onlineFlexText}>
          <Text style={styles.onlineText}>Medicines Included ?</Text>
          <MaterialIcons
            name="toggle-off"
            color={Colors.gray_200}
            style={styles.togglIcon}
          />
        </View>
        <View style={styles.nameInputHolder}>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.inputField}
            placeholder="MRP (Rs)"
          />
        </View>
        <View style={styles.nameInputHolder}>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.inputField}
            placeholder="Online Price (Rs)"
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
  },
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
    justifyContent: 'center',
    marginLeft: '12%',
    fontSize: 20,
    color: Colors.white,
  },
  backIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '8%',
    fontSize: 25,
    fontWeight: '600',
  },
  onlineText: {
    // paddingTop: '5%',
    // marginLeft: '4%',
    fontSize: 19,
    color: Colors.black,
    fontWeight: '500',
  },
  onlineFlexText: {
    paddingTop: '5%',
    marginLeft: '4%',
    gap: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  togglIcon: {
    fontSize: 45,
    marginLeft: '15%',
    fontWeight: '600',
  },
  inputField: {
    width: '100%',
    fontSize: 16,
    color: Colors.gray_700,
  },
  nameInputHolder: {
    height: 42,
    width: '93%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray_200,
    borderBottomWidth: 1.5,
    color: Colors.gray_700,
    paddingLeft: '1%',
    margin: '4%',
    marginTop: '4%',
    marginLeft: '3%',
    marginBottom: '0%',
  },
  descriptionText: {
    padding: '5%',
    paddingTop: '1%',
    paddingBottom: '0%',
    fontSize: 11,
    color: Colors.gray_200,
  },
  validityHeader: {
    paddingTop: '5%',
    marginLeft: '4%',
    fontSize: 19,
    color: Colors.black,
    fontWeight: '500',
  },
  validityDayDown: {
    fontSize: 25,
    gap: 0,
    padding: 0,
  },
  validityDayInput: {
    fontSize: 18,
    fontWeight: '500',
    borderColor: Colors.gray_200,
    borderBottomWidth: 1.5,
    width: '30%',
  },
  validityInput: {
    height: 42,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: Colors.gray_700,
    paddingLeft: '1%',
    margin: '4%',
    marginLeft: '3%',
    marginBottom: '0%',
  },
  numberInputField: {
    fontSize: 16,
    borderColor: Colors.gray_200,
    borderBottomWidth: 1.5,
    width: '53%',
  },
  consultationInput: {
    height: 42,
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: Colors.gray_700,
    paddingLeft: '1%',
    margin: '4%',
    marginLeft: '3%',
    marginBottom: '0%',
  },
  consultationinputField: {
    width: '100%',
    fontSize: 16,
    color: Colors.gray_700,
    borderColor: Colors.gray_200,
    borderBottomWidth: 1.5,
  },
  audioHeader: {
    paddingTop: '5%',
    marginLeft: '4%',
    fontSize: 15,
    color: Colors.black,
    fontWeight: '500',
  },
  audioInputField: {},
  audioDayDown: {
    fontSize: 25,
    gap: 0,
    padding: 0,
  },
  audioInputField: {
    width: '93%',
    fontSize: 16,
    color: Colors.gray_700,
  },
});

export default CreateNewPackage;

//togle onof