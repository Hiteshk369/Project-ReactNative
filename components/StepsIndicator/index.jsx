import { Text, View, ScrollView, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { Colors } from '../../constants/colors'

const StepsIndicator = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexBox}>
        <View style={styles.bigBox}></View>
        <View style={styles.smallBox}></View>
        <View style={styles.smallBox}></View>
        <View style={styles.smallBox}></View>
        <View style={styles.smallBox}></View>
        <View style={styles.smallBox}></View>
        <View style={styles.smallBox}></View>
        <View style={styles.smallBox}></View>
        <View style={styles.smallBox}></View>
        <View style={styles.smallBox}></View>
        <View style={styles.smallBox}></View>
        <View style={styles.smallBox}></View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  flexBox: {
    height: 820,
    // width: 55,
    width: '79%',
    borderRightWidth: 1,
    borderColor: Colors.gray_100,
  },
  bigBox: {
    height: 40,
    width: 40,
    borderColor: Colors.black,
    borderWidth: 1,
    margin: '35%',
    marginLeft: '15%',
    // marginRight: '0%',
    borderRadius: 100,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  smallBox: {
    height: 30,
    width: 30,
    borderColor: Colors.gray_100,
    borderWidth: 1,
    margin: '30%',
    marginLeft: '25%',
    marginTop: '35%',
    borderRadius: 100,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
})

export default StepsIndicator