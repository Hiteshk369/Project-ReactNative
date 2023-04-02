import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PatientsList = () => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.darkPurple, Colors.lightPurple]}
        style={styles.gradient}>
        <View style={styles.navHeader}>
          <MaterialIcons
            name="arrow-back-ios"
            color={Colors.white}
            style={styles.backIcon}
          />
          <Text style={styles.navText}> Select a patient to prescribe</Text>
        </View>
      </LinearGradient>
      <View style={styles.bodyContainer}>
        <View style={styles.searchContainer}>
          <MaterialIcons
            name="search"
            color={Colors.black}
            style={styles.searchIcon}
          />
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.searchInputField}
            placeholder="Search"
          />
        </View>
        <View style={styles.patientsContainer}>
          <Text style={styles.patientsHeader}>Recent patients</Text>
          <View style={styles.patientsBorder}>
            <View style={styles.profiles}>
              <View style={styles.box}></View>
              <Text style={styles.boxText}>Rajesh</Text>
            </View>
            <View style={styles.profiles}>
              <View style={styles.box}></View>
              <Text style={styles.boxText}>Sandeep R</Text>
            </View>
          </View>
          <Text style={styles.sText}>S</Text>
          <View style={styles.namesText}>
            <View style={styles.box}></View>
            <View style={styles.flexText}>
              <Text style={styles.nameText}>Sandeep R Reddy M/32Y</Text>
              <Text>8919797512</Text>
              {/* <Text>M/32Y</Text> */}
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonBackground}>
          <MaterialIcons
            name="add-circle"
            color={Colors.white}
            style={styles.addIcon}
          />
          <Text style={styles.buttonText}> Add Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.gray_300,
  },
  gradient: {
    height: 140,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomWidth: 5,
    borderBottomColor: Colors.gray_300,
    // elevation: 5
  },
  navHeader: {
    flexDirection: 'row',
    margin: '7%',
    marginTop: '20%',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 10,
  },
  backIcon: {
    fontSize: 25,
  },
  navText: {
    color: Colors.white,
    fontSize: 18,
  },
  bodyContainer: {},
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    margin: '5%',
    borderRadius: 10,
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 25,
    marginLeft: '5%',
  },
  searchInputField: {
    fontSize: 18,
  },
  patientsContainer: {
    backgroundColor: Colors.white,
    margin: '5%',
    marginBottom: '0%',
    borderRadius: 10,
    height: 700,
  },
  patientsHeader: {
    fontSize: 15,
    color: Colors.black,
    fontWeight: '500',
    marginHorizontal: '7%',
    marginTop: '5%',
  },
  patientsBorder: {
    flexDirection: 'row',
    margin: '5%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.slate_100,
  },
  box: {
    height: 40,
    width: 40,
    borderColor: Colors.gray_200,
    borderWidth: 1,
    margin: '5%',
    marginTop: '0%',
    borderRadius: 100,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  boxText: {
    color: Colors.black,
  },
  profiles: {
    alignItems: 'center',
    marginHorizontal: '2%',
    marginBottom: '5%',
  },
  sText: {
    marginHorizontal: '5%',
    fontSize: 25,
    fontWeight: '500',
    color: Colors.darkPurple,
  },
  namesText: {
    flexDirection: 'row',
  },
  flexText: {
    // flexDirection: 'row'
  },
  nameText: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.black,
  },
  buttonBackground: {
    margin: '5%',
    marginLeft: '44%',
    width: '50%',
    paddingVertical: 7,
    backgroundColor: Colors.darkPurple,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.white,
  },
  addIcon: {
    fontSize: 25,
  },
});

export default PatientsList;
