import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const MainAppointment = ({navigation}) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <View style={styles.bgColor}>
        <View style={styles.navigation}>
          <Text style={styles.navHeader}>PRANA</Text>
          <Text style={styles.drHeader}>Doctor</Text>
          <View style={styles.navIcons}>
            <MaterialIcons
              name="notifications"
              color={Colors.white}
              style={styles.circleIcon}
            />
            <AntDesign
              name="questioncircle"
              color={Colors.white}
              style={styles.circleIcon}
            />
            <MaterialIcons
              name="settings"
              color={Colors.white}
              style={styles.circleIcon}
            />
          </View>
        </View>
        <View style={styles.Card}>
          <View style={styles.doctorCard}>
            <LinearGradient
              colors={[Colors.darkPurple, Colors.lightPurple]}
              style={styles.gradient}>
              <View style={styles.box}>
                <Fontisto
                  name="doctor"
                  color={Colors.white}
                  style={styles.drIcon}
                />
              </View>
              <Text style={styles.boxText}>Dr.Chandra Shekar</Text>
              <View style={styles.bottomText}>
                <Text style={styles.numberText}>4 </Text>
                <Text style={styles.consultedText}>Patients Consulted</Text>
                <Text style={styles.lineText}> </Text>
                <Text style={styles.numbersText}>2 </Text>
                <Text style={styles.consultedText}>Completed Appointments</Text>
              </View>
            </LinearGradient>
          </View>
        </View>
        <Text style={styles.Text}>Your Appointments</Text>
        <View style={styles.dashButtons}>
          <TouchableOpacity>
            <LinearGradient
              colors={[Colors.darkPurple, Colors.lightPurple]}
              style={styles.gradientButtons}>
              <Text style={styles.dashButton}>Mar 6th</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={[Colors.darkPurple, Colors.lightPurple]}
              style={styles.gradientButtons}>
              <Text style={styles.dashButton}>Mar 7th</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={[Colors.darkPurple, Colors.lightPurple]}
              style={styles.gradientButtons}>
              <Text style={styles.dashButton}>Mar 8th</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.bigButtons}>
          <TouchableOpacity>
            <Text style={styles.dashBigButton}>Week In Review</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.dashBigButton}>Next Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('BookAppointment')}>
          <Text style={styles.addButton}>Add New +</Text>
        </TouchableOpacity>
        <Text style={styles.Text}>Your Calender</Text>
        <View style={styles.calenderCard}>
          <Text style={styles.nameCard}>Sundeep R Reddy</Text>
          <Text style={styles.timeCard}>03:30 PM - 04:30 PM</Text>
          <MaterialIcons
            name="calendar-today"
            color={Colors.black}
            style={styles.calenderIcon}
          />
          <TouchableOpacity>
            <Text style={styles.cardButton}>Add New +</Text>
          </TouchableOpacity>
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
  navigation: {
    height: 60,
    width: '100%',
    backgroundColor: Colors.darkPurple,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drHeader: {
    marginHorizontal: '5%',
    marginLeft: '17%',
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
  },
  navHeader: {
    fontSize: 15,
    color: Colors.lightgreen,
    paddingLeft: '5%',
  },
  navIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleIcon: {
    paddingHorizontal: '2%',
    fontSize: 23,
  },
  drIcon: {
    padding: '17%',
    display: 'flex',
    alignItems: 'center',
    fontSize: 62,
  },
  Card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    height: '100%',
    width: '100%',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
  },
  doctorCard: {
    marginTop: 20,
    height: 220,
    width: '90%',
  },
  box: {
    height: 90,
    width: 90,
    borderColor: Colors.white,
    borderWidth: 1,
    marginVertical: '5%',
    borderRadius: 100,
  },
  boxText: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: '5%',
  },
  bottomText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.white,
    fontSize: 35,
  },
  lineText: {
    textAlign: 'center',
    fontSize: 35,
    marginLeft: '10%',
    borderLeftWidth: 2,
    borderLeftColor: Colors.gray_200,
  },
  numbersText: {
    color: Colors.white,
    paddingLeft: '3%',
    fontSize: 35,
  },
  consultedText: {
    color: Colors.white,
    fontSize: 10,
  },
  Text: {
    color: Colors.black,
    textAlign: 'center',
    marginTop: '5%',
    fontSize: 18,
    fontWeight: '500',
  },
  dashButton: {
    color: Colors.white,
    height: 80,
    width: 80,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  dashButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    gap: 20,
  },
  gradientButtons: {
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bigButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    margin: '5%',
  },
  dashBigButton: {
    color: Colors.black,
    borderRadius: 20,
    backgroundColor: Colors.white,
    elevation: 11,
    height: 140,
    width: 140,
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  addButton: {
    color: Colors.white,
    borderRadius: 25,
    // width: '30%',
    // display: 'flex',
    backgroundColor: Colors.darkPurple,
    textAlign: 'center',
    alignSelf: 'center',
    // marginLeft: '35%',
    padding: '4%',
    fontSize: 13,
  },
  calenderCard: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 250,
    borderRadius: 20,
    margin: '5%',
    borderWidth: 1.5,
    borderColor: Colors.gray_200,
  },
  nameCard: {
    color: Colors.black,
    fontSize: 18,
    // marginTop: '2%',
    alignSelf: 'center',
  },
  timeCard: {
    color: Colors.black,
    alignSelf: 'center',
    fontWeight: 300,
    fontSize: 12,
  },
  calenderIcon: {
    fontSize: 150,
  },
  cardButton: {
    color: Colors.white,
    borderRadius: 25,
    backgroundColor: Colors.darkPurple,
    textAlign: 'center',
    paddingHorizontal: '6%',
    paddingVertical: '2%',
    fontSize: 13,
  },
});
export default MainAppointment;
