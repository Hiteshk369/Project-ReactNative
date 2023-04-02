import {Text, View, ScrollView, StyleSheet, TextInput} from 'react-native';
import React, {Component} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StepsIndicator} from '../../../../components';
import {Colors} from '../../../../constants/colors';

const ChiefComplaints = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexContainer}>
        {/* <StepsIndicator /> */}
        <View style={styles.alignmentContainer}>
          <MaterialIcons
            name="arrow-back-ios"
            color={Colors.black}
            style={styles.backIcon}
          />
          <Text style={styles.headerText}>Chief Complaints</Text>
          <TextInput
            placeholderTextColor={Colors.gray_200}
            style={styles.inputField}
            placeholder="Search for Chief Complaints"
          />
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
  flexContainer: {
    flexDirection: 'row',
  },
  alignmentContainer: {
    margin: '7%',
  },
  backIcon: {
    // paddingTop: '10%',
    marginBottom: '4%',
    fontSize: 20,
  },
  headerText: {
    marginBottom: '6%',
    fontSize: 17,
    fontWeight: '500',
    color: Colors.black,
  },
  inputField: {
    backgroundColor: Colors.slate_100,
    borderRadius: 10,
    paddingRight: '47%',
    // marginLeft:'10%'
    // paddingLeft: '1%',
  },
});

export default ChiefComplaints;
