import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {PatientsData} from '../../../components';
import {Colors} from '../../../constants/colors';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PatientsHistory = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PatientsData navigation={navigation} />
      <View style={styles.bgShade}>
        <View style={styles.bgShadeFlex}>
          <Entypo name="dot-single" color={Colors.black} style={styles.dot} />
          <Text style={styles.bgShadeText}>Hyperthyroidism</Text>
        </View>
        <View style={styles.bgShadeFlex}>
          <Entypo name="dot-single" color={Colors.black} style={styles.dot} />
          <Text style={styles.bgShadeText}>Emphysema</Text>
        </View>
      </View>
      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionsText}>Suggestions:</Text>
        <View style={styles.buttonFlex}>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>Diabetes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>High Blood Pressure</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>Heart Attack</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonRight}>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('FamilyHistory')}
          style={styles.bottomButtonBackground}>
          <Text style={styles.bottomButtonText}>Family History</Text>
          <AntDesign
            name="doubleright"
            color={Colors.lightPurple}
            style={styles.rightArrow}
          />
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
  bgShade: {
    height: 200,
    width: '83%',
    margin: '8%',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: Colors.purple_100,
  },
  bgShadeFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  dot: {
    fontSize: 30,
  },
  bgShadeText: {
    fontSize: 15,
    color: Colors.black,
  },
  suggestionsContainer: {
    marginHorizontal: '8%',
    paddingTop: '40%',
  },
  suggestionsText: {
    fontSize: 14,
    color: Colors.gray_800,
  },
  buttonFlex: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonBackground: {
    // width: '30%',
    marginTop: '3%',
    paddingVertical: '1%',
    paddingHorizontal: '3%',
    borderColor: Colors.darkPurple,
    borderWidth: 1,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.darkPurple,
  },
  buttonRight: {
    alignItems: 'flex-end',
  },
  bottomButtonBackground: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    margin: '8%',
    width: '40%',
    paddingVertical: '3%',
    paddingHorizontal: '2%',
    borderColor: Colors.lightPurple,
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
  },
  bottomButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.lightPurple,
  },
  rightArrow: {
    fontSize: 18,
  },
});

export default PatientsHistory;
