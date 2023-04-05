import {ScrollView, Text, View, StyleSheet, Pressable} from 'react-native';
import React, {Component} from 'react';

import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../constants/colors';

const DashBoardAmount = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <LinearGradient
        colors={[Colors.darkPurple, Colors.lightPurple]}
        style={styles.gradient}>
        <View style={styles.navBackground}>
          <MaterialIcons
            name="arrow-back-ios"
            color={Colors.white}
            style={styles.backIcon}
          />
          <Text style={styles.leftText}>Dashboard</Text>
        </View>
      </LinearGradient> */}
      <View style={styles.topButtons}>
        <View style={styles.columnButtons}>
          <Pressable style={styles.activeDayButtonBackground}>
            <Text style={styles.activeDayButtonText}>Today</Text>
          </Pressable>
          <Pressable style={styles.daysButtonBackground}>
            <Text style={styles.daysButtonText}>Current Month</Text>
          </Pressable>
          <Pressable style={styles.daysButtonBackground}>
            <Text style={styles.daysButtonText}>Last FY</Text>
          </Pressable>
        </View>
        <View style={styles.columnButtons}>
          <Pressable style={styles.daysButtonBackground}>
            <Text style={styles.daysButtonText}>Yesterday</Text>
          </Pressable>
          <Pressable style={styles.daysButtonBackground}>
            <Text style={styles.daysButtonText}>Last Month</Text>
          </Pressable>
          <Pressable style={styles.daysButtonBackground}>
            <Text style={styles.daysButtonText}>Select Range</Text>
          </Pressable>
        </View>
        <View style={styles.columnButtons}>
          <Pressable style={styles.daysButtonBackground}>
            <Text style={styles.daysButtonText}>Last Week</Text>
          </Pressable>
          <Pressable style={styles.daysButtonBackground}>
            <Text style={styles.daysButtonText}>Current FY</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.Card}>
        <View style={styles.bgWhite}>
          <View style={styles.cardRightText}>
            <Text style={styles.cardText}>Payment</Text>
            <View style={styles.paymentText}>
              <Text style={styles.receviedText}>Received</Text>
              <Text style={styles.rupeesText}>₹ 0</Text>
            </View>
            <View style={styles.paymentText}>
              <Text style={styles.dueText}>Due</Text>
              <Text style={styles.rupeesText}>₹ 0</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Card}>
        <View style={styles.bgWhite}>
          <View style={styles.cardLeftText}>
            <Text style={styles.cardText}>Patient Status</Text>
            <View style={styles.paymentText}>
              <Text style={styles.receviedText}>Received</Text>
              <Text style={styles.rupeesText}>₹ 0</Text>
            </View>
            <View style={styles.paymentText}>
              <Text style={styles.dueText}>Due</Text>
              <Text style={styles.rupeesText}>₹ 0</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Card}>
        <View style={styles.bgWhite}>
          <View style={styles.cardRightText}>
            <Text style={styles.cardText}>Appointment</Text>
            <View style={styles.paymentText}>
              <Text style={styles.receviedText}>Received</Text>
              <Text style={styles.rupeesText}>₹ 0</Text>
            </View>
            <View style={styles.paymentText}>
              <Text style={styles.dueText}>Due</Text>
              <Text style={styles.rupeesText}>₹ 0</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
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
    marginLeft: '2%',
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
  topButtons: {
    // width: '90%',
    margin: '5%',
    flexDirection: 'row',
    gap: 10,
  },

  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '1%',
  },
  daysButtonBackground: {
    elevation: 5,
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderRadius: 10,
  },
  columnButtons: {
    gap: 15,
  },
  activeDayButtonBackground: {
    // width: '80%',
    alignItems: 'center',
    backgroundColor: Colors.lightPurple,
    justifyContent: 'center',
    borderRadius: 10,
  },
  activeDayButtonText: {
    color: Colors.white,
    fontSize: 13,
    paddingVertical: '2%',
    // margin: '7%',
    // paddingHorizontal: '5%',
  },
  daysButtonText: {
    color: Colors.black,
    fontSize: 13,
    paddingVertical: '2%',
    marginHorizontal: '5%',
    // margin: '7%',
  },
  daysFlexButton: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '1%',
    gap: 5,
  },
  daysFlexMarginButton: {
    marginLeft: '5%',
  },
  thirdLineButtonBackground: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  thirdLineButtonText: {
    color: Colors.black,
    fontSize: 13,
    margin: '7%',
    marginRight: '9%',
    marginHorizontal: '5%',
  },
  daysThirdFlexButton: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    margin: '1%',
    marginLeft: '10%',
    gap: 20,
  },
  Card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgWhite: {
    marginTop: '2%',
    marginBottom: '5%',
    height: 180,
    width: '90%',
    borderRadius: 25,
    backgroundColor: Colors.white,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '600',
  },
  paymentText: {
    flexDirection: 'row',
  },
  receviedText: {
    fontSize: 15,
    marginTop: '2%',
    color: Colors.green,
  },
  dueText: {
    fontSize: 15,
    color: Colors.red,
    marginTop: '2%',
  },
  rupeesText: {
    fontSize: 15,
    marginLeft: '3%',
    marginTop: '2%',
    color: Colors.black,
  },
  cardRightText: {
    marginTop: '14%',
    marginLeft: '53%',
  },
  cardLeftText: {
    marginTop: '14%',
    marginLeft: '10%',
  },
});

export default DashBoardAmount;
