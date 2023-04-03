import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

const FeedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        {/* <LinearGradient
          colors={[Colors.darkPurple, Colors.lightPurple]}
          style={styles.gradient}>
          <Text style={styles.leftText}>Dr.Prana</Text>
        </LinearGradient> */}
        <View style={styles.darkScreen}></View>
        <Text style={styles.darkScreenText}>Health Minute</Text>
        <View style={styles.darkScreen}></View>
        <Text style={styles.darkScreenTextSmall}>
          India : surge in high-grade.................
        </Text>
        <TouchableOpacity style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Create Your Feed</Text>
        </TouchableOpacity>
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
  leftText: {
    marginTop: '22%',
    marginLeft: '10%',
    fontSize: 20,
    color: Colors.white,
  },
  darkScreen: {
    height: 300,
    width: '100%',
    marginTop: '5%',
    backgroundColor: Colors.black,
  },
  darkScreenText: {
    marginTop: '10%',
    marginLeft: '5%',
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
  },
  darkScreenTextSmall: {
    fontSize: 18,
    color: Colors.black,
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '10%',
  },
  buttonBackground: {
    margin: '20%',
    marginLeft: '15%',
    width: '70%',
    paddingVertical: 15,
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

export default FeedScreen;
