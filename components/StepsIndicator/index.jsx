import {Text, View, ScrollView, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Colors} from '../../constants/colors';
import {useState} from 'react';

const StepsIndicator = ({active}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexBox}>
        <View style={styles.bigBox} />
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.smallBox} />
            {active === 'one' && <View style={styles.line} />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPressIn={() => setActive('second')}>

          <View style={styles.rowContainer}>
            <View style={styles.smallBox} />
            {active === 'two' && <View style={styles.line} />}
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.smallBox} />
            {active === 'three' && <View style={styles.line} />}
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.smallBox} />
            {active === 'four' && <View style={styles.line} />}
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.smallBox} />
            {active === 'five' && <View style={styles.line} />}
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.smallBox} />
            {active === 'six' && <View style={styles.line} />}
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.smallBox} />
            {active === 'seven' && <View style={styles.line} />}
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.smallBox} />
            {active === 'eight' && <View style={styles.line} />}
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.smallBox} />
            {active === 'nine' && <View style={styles.line} />}
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.smallBox} />
            {active === 'ten' && <View style={styles.line} />}
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.smallBox} />
            {active === 'eleven' && <View style={styles.line} />}
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
  flexBox: {
    height: '100%',
    // width: 55,
    width: '100%',
    borderRightWidth: 1,
    borderColor: Colors.gray_100,
  },
  bigBox: {
    height: 40,
    width: 40,
    borderColor: Colors.black,
    borderWidth: 1,
    marginHorizontal: '25%',
    marginVertical: '28%',
    // margin: '33%',
    // marginLeft: '28%',
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
    marginHorizontal: '28%',
    marginVertical: '21%',
    // margin: '25%',
    // marginLeft: '30%',
    // marginTop: '5%',
    borderRadius: 100,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  line: {
    backgroundColor: Colors.darkPurple,
    height: '100%',
    width: '5%',
    marginLeft: '2%',
  },
  active: {
    borderRightColor: Colors.darkPurple,
    borderRightWidth: 3,
  },
});

export default StepsIndicator;
