import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../constants/colors';

const PictureVideo = ({navigation}) => {
  return (
    <LinearGradient
      colors={[Colors.darkPurple, Colors.lightPurple]}
      style={styles.gradient}>
      <ScrollView style={styles.container}>
        <View style={styles.navContainer}>
          <TouchableOpacity
            onPressIn={() => navigation.navigate('BankingDetails')}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.white}
              style={styles.navIcon}
            />
          </TouchableOpacity>
          <Text style={styles.navText}>Edit Profile</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  navContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 110,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray_200,
  },
  navIcon: {
    fontSize: 22,
  },
  navText: {
    fontSize: 18,
    color: Colors.white,
  },
});

export default PictureVideo;
