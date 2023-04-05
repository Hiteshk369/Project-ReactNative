import {Text, View, ScrollView, StyleSheet} from 'react-native';
import React, {Component} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

const Timeline = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <LinearGradient
          colors={[Colors.darkPurple, Colors.lightPurple]}
          style={styles.gradient}>
          <View style={styles.navHeader}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.white}
              style={styles.backIcon}
            />
            <Text style={styles.leftText}>Timeline</Text>
          </View>
          <View style={styles.navText}>
            <Text style={styles.navTextFlex}>Profile</Text>
            <Text style={styles.activeText}>Timeline</Text>
            <Text style={styles.navTextFlex}>Prescription</Text>
            <Text style={styles.navTextFlex}>Report</Text>
            <Text style={styles.navTextFlex}>Invoice</Text>
          </View>
        </LinearGradient>
        <Text style={styles.bodyText}>Sandeep | M 0 | 8987992735</Text>
        <Text style={styles.recordText}>No Records Found</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  gradient: {
    height: 150,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  navHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%',
    marginBottom: '5%',
  },
  backIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '8%',
    fontSize: 25,
    fontWeight: '600',
  },
  leftText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '2%',
    fontSize: 20,
    color: Colors.white,
  },
  navText: {
    flexDirection: 'row',
    gap: 13,
    margin: '2%',
    marginLeft: '8%',
  },
  navTextFlex: {
    fontSize: 15,
    color: Colors.white,
  },
  activeText: {
    fontSize: 15,
    color: Colors.orange,
    borderBottomWidth: 2,
    borderBottomColor: Colors.orange,
  },
  bodyText: {
    margin: '5%',
    color: Colors.black,
    fontSize: 18,
    fontWeight: '500',
  },
  recordText: {
    marginHorizontal: '30%',
    marginVertical: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: Colors.gray_200,
    fontWeight: '500',
  },
});

export default Timeline;
