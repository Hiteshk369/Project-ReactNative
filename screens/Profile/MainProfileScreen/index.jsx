import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MainProfilescreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View >
        <LinearGradient colors={['#1e1262', '#4d0d7e']} style={styles.gradient}>
          <View style={styles.navBackground}>
            <View style={styles.box}></View>
            <Text style={styles.nameText}>Umar</Text>
            <Text style={styles.numberText}>9866733112</Text>
          </View>
          <TouchableOpacity style={styles.buttonBackground}>
            <MaterialIcons name="mode-edit" color="#fff" />
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Activation Profile</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Activation Profile</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Add Clinic</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Dashboard</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Campaign</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Sell Package/Create Package</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Ask us a Question</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Share Patient App</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Change Password</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Sync Patient Data</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>About</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Privacy Policy</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Terms of Service</Text>
        </View>
        <View style={styles.optionsTextConatiner}>
          <FontAwesome
            name="circle-thin"
            color="#000"
            style={styles.circleIcon}
          />
          <Text style={styles.optionsText}>Logout</Text>
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
  gradient: {
    height: '14%',
    marginBottom:'22%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  navBackground: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
    borderColor: '#1e1262',
    backgroundColor: '#fff',
    borderWidth: 2,
    marginTop: '30%',
    // marginBottom: 15,
    borderRadius: 100,
  },
  nameText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: '0%',
  },
  numberText: {
    marginBottom: '0%',
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonBackground: {
    marginLeft: '70%',
    marginTop: '0%',
    width: '24%',
    paddingVertical: 5,
    backgroundColor: '#1e1262',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#fff',
  },
  optionsTextConatiner: {
    flexDirection: 'row',
    alignContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    width: '92%',
    marginTop: '0%',
    marginLeft: '4%',
    marginRight: '4%',
  },
  circleIcon: {
    margin: '5%',
    marginLeft: '2%',
    marginTop: '4%',
    fontSize: 25,
  },
  optionsText: {
    margin: '5%',
    marginLeft: '0%',
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});

export default MainProfilescreen;
