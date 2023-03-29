import {Text, View, ScrollView, StyleSheet, TextInput} from 'react-native';
import React, {Component} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SaveButton} from '../../../components';

const AddClinic = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.navBar}>
        <MaterialIcons
          name="arrow-back-ios"
          color="#fff"
          style={styles.backIcon}
        />
        <Text style={styles.navText}>Add Clinic</Text>
      </View>
      <View style={styles.Card}>
        <View style={styles.bgWhite}>
          <View style={styles.nameInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
              style={styles.inputField}
              placeholder="Package Name"
            />
          </View>
          <Text style={styles.inputsHeader}>Address</Text>
          <View style={styles.addressInputHolder}>
            <TextInput
              placeholderTextColor={'#C0C0C0'}
              style={styles.addressInputField}
              placeholder="Selected address location"
            />
          </View>
          <Text style={styles.inputsHeader}>City</Text>
          <View style={styles.cityInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
              style={styles.inputField}
              placeholder="City"
            />
          </View>
          <Text style={styles.mainHeader}>Practice Timings</Text>
          <Text style={styles.inputsHeader}>Appointment Duration</Text>
          <View style={styles.cityInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
              style={styles.inputField}
              placeholder="10 Mins"
            />
            <FontAwesome
              name="angle-down"
              color="#000"
              style={styles.timeDown}
            />
          </View>
          <View style={styles.fromTwoInputHolder}>
            <View style={styles.fromInputHolder}>
              <TextInput
                placeholderTextColor={'#d3d3d3'}
                style={styles.inputField}
                placeholder="From"
              />
              <FontAwesome
                name="angle-down"
                color="#000"
                style={styles.timeDown}
              />
            </View>
            <View style={styles.fromInputHolder}>
              <TextInput
                placeholderTextColor={'#d3d3d3'}
                style={styles.inputField}
                placeholder="To"
              />
              <FontAwesome
                name="angle-down"
                color="#000"
                style={styles.timeDown}
              />
            </View>
          </View>
          <View style={styles.daysFlexText}>
            <Text style={styles.LeftText}>Days of Practice</Text>
            <Text style={styles.RightText}>Apply To All</Text>
            <MaterialIcons
              name="toggle-on"
              color="#0077CD"
              style={styles.togglIcon}
            />
          </View>
          <View style={styles.daysRow}>
            <View style={styles.daysColumn}>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color="#000"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Monday</Text>
              </View>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color="#000"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Tuesday</Text>
              </View>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color="#000"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Wednesday</Text>
              </View>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color="#000"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Thursday</Text>
              </View>
            </View>
            <View style={styles.daysColumn}>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color="#000"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Friday</Text>
              </View>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color="#000"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Saturday</Text>
              </View>
              <View style={styles.daysRowText}>
                <FontAwesome
                  name="circle-thin"
                  color="#000"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Sunday</Text>
              </View>
            </View>
          </View>
          <View style={styles.additionalDaysText}>
            <Ionicons
              name="add-circle-outline"
              color="#4d0d7e"
              style={styles.circleaddIcon}
            />
            <Text style={styles.addDaysText}>
              Add additional days and timings
            </Text>
          </View>
          <Text style={styles.inputsHeader}>Age Restriction</Text>
          <View style={styles.yesNoContainer}>
            <MaterialIcons
              name="radio-button-off"
              color="#4d0d7e"
              style={styles.radioButtonIcon}
            />
            <Text style={styles.yesNoText}>Yes</Text>
            <MaterialIcons
              name="radio-button-on"
              color="#4d0d7e"
              style={styles.radioButtonIcon}
            />
            <Text style={styles.yesNoText}>No</Text>
          </View>
          <View style={styles.bgShadeHeaderContainer}>
            <Text style={styles.bgShadeHeader}>From</Text>
            <Text style={styles.bgShadeHeader}>To</Text>
          </View>
          <View style={styles.fromTwoInputHolder}>
            <View style={styles.bgshadeInput}>
              <TextInput
                placeholderTextColor={'#d3d3d3'}
                style={styles.inputField}
                placeholder="0"
              />
            </View>
            <View style={styles.bgshadeInput}>
              <TextInput
                placeholderTextColor={'#d3d3d3'}
                style={styles.inputField}
                placeholder="70"
              />
            </View>
          </View>
          <Text style={styles.inputsHeader}>Gender Restriction</Text>
          <View style={styles.yesNoContainer}>
            <MaterialIcons
              name="radio-button-off"
              color="#4d0d7e"
              style={styles.radioButtonIcon}
            />
            <Text style={styles.yesNoText}>Yes</Text>
            <MaterialIcons
              name="radio-button-on"
              color="#4d0d7e"
              style={styles.radioButtonIcon}
            />
            <Text style={styles.yesNoText}>No</Text>
          </View>
          <Text style={styles.inputsHeader}>Select Gender</Text>
          <View style={styles.genderInputHolder}>
            <TextInput
              placeholderTextColor={'#000'}
              style={styles.genderInputField}
              placeholder="Male"
            />
          </View>
          <Text style={styles.mainHeader}>
            Appointment Confirmation Details
          </Text>
          <Text style={styles.inputsHeader}>Mobile Number</Text>
          <View style={styles.cityInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
              style={styles.inputField}
              placeholder="+91"
            />
          </View>
          <View style={styles.addMoreText}>
            <Ionicons
              name="add-circle-outline"
              color="#4d0d7e"
              style={styles.circleaddIcon}
            />
            <Text style={styles.addDaysText}>Add More</Text>
          </View>
          <Text style={styles.AddMoreBottomText}>LandLine</Text>
          <View style={styles.cityInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
              style={styles.inputField}
              placeholder=""
            />
          </View>
          <View style={styles.addMoreText}>
            <Ionicons
              name="add-circle-outline"
              color="#4d0d7e"
              style={styles.circleaddIcon}
            />
            <Text style={styles.addDaysText}>Add More</Text>
          </View>
          <Text style={styles.AddMoreBottomText}>E-Mail</Text>
          <View style={styles.cityInputHolder}>
            <TextInput
              placeholderTextColor={'#d3d3d3'}
              style={styles.inputField}
              placeholder=""
            />
          </View>
        </View>
        <SaveButton />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  navBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 100,
    padding: '4%',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  backIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: '600',
  },
  navText: {
    fontSize: 20,
    color: '#fff',
  },
  Card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgWhite: {
    marginTop: '2%',
    marginBottom: '5%',
    height: 1460,
    width: 358,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  inputField: {
    width: '100%',
    fontSize: 16,
    color: '#606060',
  },
  nameInputHolder: {
    height: 45,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D3D3D3',
    borderBottomWidth: 1.5,
    color: '#606060',
    paddingLeft: '1%',
    margin: '5%',
    marginTop: '5%',
    marginBottom: '4%',
  },
  addressInputHolder: {
    height: 60,
    width: '90%',
    display: 'flex',
    backgroundColor: '#EDEEF1',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#EDEEF1',
    borderBottomWidth: 1.5,
    paddingLeft: '1%',
    margin: '5%',
    marginTop: '1%',
  },
  inputsHeader: {
    margin: '5%',
    fontSize: 16,
    marginBottom: '0%',
    color: '#d3d3d3',
  },
  addressInputField: {
    width: '100%',
    fontSize: 16,
    fontWeight: '800',
  },
  cityInputHolder: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 0,
    alignItems: 'center',
    borderColor: '#EDEEF1',
    borderBottomWidth: 1.5,
    margin: '5%',
    marginTop: '0%',
  },
  mainHeader: {
    marginHorizontal: '5%',
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  timeDown: {
    fontSize: 25,
    marginRight: '2%',
  },
  daysFlexText: {
    paddingTop: '5%',
    marginLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  LeftText: {
    marginRight: '10%',
    fontSize: 15,
    fontWeight: '500',
  },
  RightText: {
    marginLeft: '15%',
    fontSize: 15,
    fontWeight: '500',
  },
  togglIcon: {
    marginLeft: '4%',
    fontSize: 35,
  },
  daysRow: {
    marginHorizontal: '4%',
    flexDirection: 'row',
    gap: 40,
  },
  daysRowText: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    margin: '2%',
  },
  daysColumn: {
    // alignItems:'center'
  },
  circleIcon: {
    fontSize: 20,
    color: '#d3d3d3',
  },
  daysText: {
    fontSize: 17,
    color: '#000',
    fontWeight: '400',
  },
  additionalDaysText: {
    flexDirection: 'row',
    gap: 10,
    margin: '3%',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  circleaddIcon: {
    fontSize: 22,
  },
  addDaysText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4d0d7e',
  },
  fromInputHolder: {
    height: 45,
    width: '38%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#EDEEF1',
    borderBottomWidth: 1.5,
    paddingLeft: '1%',
    margin: '5%',
    marginTop: '1%',
  },
  fromTwoInputHolder: {
    flexDirection: 'row',
  },
  radioButtonIcon: {
    fontSize: 25,
    marginRight: '2%',
  },
  yesNoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginTop: '3%',
  },
  yesNoText: {
    marginRight: '15%',
  },
  bgShadeHeader: {
    flexDirection: 'row',
    marginHorizontal: '6%',
    marginBottom: '0%',
  },
  bgshadeInput: {
    height: 45,
    width: '42%',
    backgroundColor: '#EDEEF1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#EDEEF1',
    borderBottomWidth: 1.5,
    paddingLeft: '1%',
    margin: '5%',
    marginRight: '1%',
    marginTop: '1%',
  },
  bgShadeHeaderContainer: {
    flexDirection: 'row',
    gap: 90,
    marginTop: '3%',
    marginBottom: '0%',
  },
  genderInputHolder: {
    height: 45,
    width: '90%',
    display: 'flex',
    backgroundColor: '#EDEEF1',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#EDEEF1',
    borderBottomWidth: 1.5,
    paddingLeft: '1%',
    margin: '5%',
    marginTop: '4%',
  },
  genderInputField: {
    width: '100%',
    fontSize: 16,
    fontWeight: '800',
  },
  addMoreText: {
    flexDirection: 'row',
    gap: 10,
    margin: '3%',
    marginBottom: '0%',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  AddMoreBottomText: {
    fontSize: 13,
    margin: '5%',
    fontWeight: '400',
    marginTop: '2%',
    marginBottom: '0%',
    color: '#d3d3d3',
  },
});

export default AddClinic;
