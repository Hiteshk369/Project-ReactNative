import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {Colors} from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const FeedScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.darkScreen} />
        <Text style={styles.darkScreenText}>Health Minute</Text>
        <View style={styles.darkScreen} />
        <Text style={styles.darkScreenTextSmall}>
          India : surge in high-grade.................
        </Text>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('CreateYourFeed')}
          style={styles.buttonBackground}>
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
    backgroundColor: Colors.white,
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
