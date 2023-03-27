import {Text, View, ScrollView, StyleSheet, TextInput} from 'react-native';
import React, {Component} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SaveButton } from '../../../components';

const ClinicAppointmentDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>In-Clinic Timings</Text>
          <MaterialIcons
            name="add-circle"
            color="#fff"
            style={styles.circleNavIcon}
          />
          <Text style={styles.HeaderText}>Add Clinic</Text>
        </View>
        <View style={styles.Card}>
          <View style={styles.bgWhite}>
            <View style={styles.cardTopTextFlex}>
              <Text style={styles.cardTopText}>Green-health clinic</Text>
              <Entypo
                name="chevron-thin-up"
                color="#000"
                style={styles.upIcon}
              />
            </View>
            <View style={styles.onlineFlexText}>
              <Text style={styles.onlineText}>
                Enabled for receving appointments
              </Text>
              <MaterialIcons
                name="toggle-on"
                color="#0077CD"
                style={styles.toggleTopIcon}
              />
            </View>
            <Text style={styles.inputsHeader}>Appointment Duration</Text>
            <View style={styles.cityInputHolder}>
              <TextInput
                placeholderTextColor={'#000'}
                style={styles.inputField}
                placeholder="15 Mins"
              />
              <FontAwesome
                name="angle-down"
                color="#000"
                style={styles.timeDown}
              />
            </View>
            <View style={styles.bgShadeHeaderContainer}>
              <Text style={styles.bgShadeHeader}>From</Text>
              <Text style={styles.bgShadeHeader}>To</Text>
            </View>
            <View style={styles.fromTwoInputHolder}>
              <View style={styles.fromInputHolder}>
                <TextInput
                  placeholderTextColor={'#000'}
                  style={styles.inputField}
                  placeholder="Open 24Hrs"
                />
                <FontAwesome
                  name="angle-down"
                  color="#000"
                  style={styles.timeDown}
                />
              </View>
              <View style={styles.fromInputHolder}>
                <TextInput
                  placeholderTextColor={'#000'}
                  style={styles.inputField}
                  placeholder="Open 24Hrs"
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
                <MaterialIcons
                  name="check-circle"
                  color="#4d0d7e"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Monday</Text>
              </View>
              <View style={styles.daysRowText}>
                <MaterialIcons
                  name="check-circle"
                  color="#4d0d7e"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Tuesday</Text>
              </View>
              <View style={styles.daysRowText}>
                <MaterialIcons
                  name="check-circle"
                  color="#4d0d7e"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Wednesday</Text>
              </View>
              <View style={styles.daysRowText}>
                <MaterialIcons
                  name="check-circle"
                  color="#4d0d7e"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Thursday</Text>
              </View>
            </View>
            <View style={styles.daysColumn}>
              <View style={styles.daysRowText}>
                <MaterialIcons
                  name="check-circle"
                  color="#4d0d7e"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Friday</Text>
              </View>
              <View style={styles.daysRowText}>
                <MaterialIcons
                  name="check-circle"
                  color="#4d0d7e"
                  style={styles.circleIcon}
                />
                <Text style={styles.daysText}>Saturday</Text>
              </View>
              <View style={styles.daysRowText}>
                <MaterialIcons
                  name="check-circle"
                  color="#4d0d7e"
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
          <Text style={styles.inputsHeader}>In-Clinic Consultation Fees *</Text>
            <View style={styles.cityInputHolder}>
              <TextInput
                placeholderTextColor={'#000'}
                style={styles.inputField}
                placeholder="₹450"
              />
            </View>
          </View>
            <SaveButton/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  Header: {
    marginHorizontal: '2%',
    marginVertical: '3%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 18,
    color: '#fff',
  },
  circleNavIcon: {
    marginLeft: '31%',
    marginRight: '2%',
    fontSize: 18,
  },
  Card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgWhite: {
    marginTop: '2%',
    marginBottom: '5%',
    height: 600,
    width: 358,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  cardTopTextFlex: {
    backgroundColor: '#d3d3d3',
    flexDirection: 'row',
    // margin:'5%',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardTopText: {
    fontSize: 18,
    color: '#000',
    margin: '5%',
  },
  upIcon: {
    marginLeft: '35%',
    fontSize: 20,
  },
  onlineFlexText: {
    marginLeft: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '800',
  },
  toggleTopIcon: {
    fontSize: 45,
    marginLeft: '18%',
  },
  inputsHeader: {
    margin: '5%',
    marginTop: '2%',
    fontSize: 16,
    marginBottom: '0%',
    color: '#d3d3d3',
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
  timeDown: {
    fontSize: 25,
    marginRight: '2%',
  },
  inputField: {
    width: '100%',
    fontSize: 16,
    color: '#606060',
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
  bgShadeHeaderContainer: {
    flexDirection: 'row',
    gap: 100,
    marginTop: '3%',
    marginBottom: '0%',
  },
  bgShadeHeader: {
    flexDirection: 'row',
    marginHorizontal: '6%',
    marginBottom: '0%',
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
});

export default ClinicAppointmentDetails;
