import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Dashboard = () => {
  return (
    <View>
      <View style={styles.navigation}>
        <Text style={styles.navHeader}>Prana</Text>
        <View style={styles.navIcons}>
          <MaterialIcons
            name="notifications"
            color="#fff"
            style={styles.circleIcon}
          />
          <AntDesign
            name="questioncircle"
            color="#fff"
            style={styles.circleIcon}
          />
          <MaterialIcons
            name="settings"
            color="#fff"
            style={styles.circleIcon}
          />
        </View>
      </View>

      <ScrollView
        style={styles.container}>
        <View style={styles.Card}>
          <View style={styles.doctorCard}>
            <LinearGradient
              colors={['#1e1262', '#4d0d7e']}
              style={styles.gradient}>
              <View style={styles.box}>
                <Fontisto name="doctor" color="#fff" style={styles.drIcon} />
              </View>
              <Text style={styles.boxText}>Dr.Chandra Shekar</Text>
              <View style={styles.bottomText}>
                <Text style={styles.numberText}>4 </Text>
                <Text style={styles.consultedText}>Patients Consulted</Text>
                <Text style={styles.lineText}> </Text>
                <Text style={styles.numbersText}>2 </Text>
                <Text style={styles.consultedText}>Completed Appoinments</Text>
              </View>
            </LinearGradient>
          </View>
        </View>

        <View style={styles.dashboard}>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonBackground}>
              <Text style={styles.buttonText}>DASHBOARD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBackground}>
              <Text>SUMMARY</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dashButtons}>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Today's Dairy </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Online Consult</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Clinic visit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dashButtons}>
            <TouchableOpacity>
              <Text style={styles.dashButton}>View Calender</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Book Appointment</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Patient Details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dashButtons}>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Earnings</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Health Feeds</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dashButtons}>
            <TouchableOpacity>
              <Text style={styles.dashButton}>In Patient Hospitalization</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Community</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Services</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dashButtons}>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Emergency</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Blood Locator</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.dashButton}>Lab Test</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
            <MaterialIcons
                name="home"
                color="#000"
                style={styles.footerIcon}
            />
            <MaterialIcons
                name="group"
                color="#000"
                style={styles.footerIcon}
            />
            <MaterialIcons
                name="calendar-today"
                color="#000"
                style={styles.footerIcon}
            />
            <MaterialIcons
                name="calendar-today"
                color="#000"
                style={styles.footerIcon}
            />
            <FontAwesome
                name="user-circle-o"
                color="#000"
                style={styles.footerIcon}
            />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  navigation: {
    height: 60,
    width: '100%',
    backgroundColor: '#1e1262',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navHeader: {
    fontSize: 18,
    color: '#fff',
    paddingLeft: 10,
  },
  navIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circleIcon: {
    padding: 8,
    fontSize: 25,
  },
  drIcon: {
    padding: 16,
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
    padding: 10,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
  },
  doctorCard: {
    marginTop: 20,
    height: 220,
    width: 350,
  },
  box: {
    height: 90,
    width: 90,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 100,
  },
  boxText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  bottomText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: '#fff',
    fontSize: 35,
  },
  lineText: {
    textAlign: 'center',
    fontSize: 35,
    marginLeft: 30,
    borderLeftWidth: 2,
    borderLeftColor: '#D3D3D3',
  },
  numbersText: {
    color: '#fff',
    paddingLeft: 10,
    fontSize: 35,
  },
  consultedText: {
    color: '#fff',
    fontSize: 10,
    paddingRight: 10,
  },
  dashboard: {
    height: 450,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBackground: {
    margin: 5,
    width: '47%',
    paddingVertical: 12,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#1e1262',
    fontWeight: 'bold',
    fontSize: 17,
  },
  dashButton: {
    margin: 5,
    height: 110,
    width: 90,
    padding: 10,
    paddingVertical: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#D3D3D3',
    elevation: 10,
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
    gap: 20,
    padding: 5,
  },
    footer:{
      height: 50,
      width: '100%',
      backgroundColor:'#fff',
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      borderTopWidth:1.5,
      borderTopColor:'#D3D3D3',
    },
    footerIcon:{
      fontSize:30,
      marginLeft:25,
      marginRight:25,
    },
});

export default Dashboard;

// scrolling function
// bottom nav
