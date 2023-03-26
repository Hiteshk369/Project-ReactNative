import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Dashboard = () => {
  return (
    <View style={styles.mainContainer}>
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

      <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
        <View style={styles.Card}>
          <View style={styles.doctorCard}>
            <LinearGradient
              colors={['#1e1262', '#4d0d7e']}
              style={styles.gradient}>
              <View style={styles.box}>
                <Fontisto name="doctor" color="#fff" style={styles.drIcon} />
              </View>
              <Text style={styles.boxText}>Dr. Chandra Shekar</Text>
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
            <TouchableOpacity style={styles.selectedButton}>
              <FontAwesome name="circle-o" style={styles.selectedTextColor} />
              <Text style={styles.selectedTextColor}>DASHBOARD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notSelectedButton}>
              <FontAwesome
                name="circle-o"
                style={styles.notSelectedTextColor}
              />
              <Text style={styles.notSelectedTextColor}>SUMMARY</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.dashboardContainer}>
          <View style={styles.dashboardRowContainer}>
            <View style={styles.shadow}>
              <TouchableOpacity style={styles.dashboardButton}>
                <Text style={styles.dashboardButtonText}>Today's Dairy</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.dashboardButton}>
              <Text style={styles.dashboardButtonText}>Online Consult</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dashboardButton}>
              <Text style={styles.dashboardButtonText}>Clinic Visit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dashboardRowContainer}>
            <View style={styles.shadow}>
              <TouchableOpacity style={styles.dashboardButton}>
                <Text style={styles.dashboardButtonText}>View Calender</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.dashboardButton}>
              <Text style={styles.dashboardButtonText}>
                Book
                {'\n'}Appointment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dashboardButton}>
              <Text style={styles.dashboardButtonText}>Patient Details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dashboardRowContainer}>
            <View style={styles.shadow}>
              <TouchableOpacity style={styles.dashboardButton}>
                <Text style={styles.dashboardButtonText}>Reports</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.dashboardButton}>
              <Text style={styles.dashboardButtonText}>Earnings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dashboardButton}>
              <Text style={styles.dashboardButtonText}>Health Feeds</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dashboardRowContainer}>
            <View style={styles.shadow}>
              <TouchableOpacity style={styles.dashboardButton}>
                <Text style={styles.dashboardButtonText}>
                  In patient{'\n'}Hospitalization
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.dashboardButton}>
              <Text style={styles.dashboardButtonText}>Community</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dashboardButton}>
              <Text style={styles.dashboardButtonText}>Services</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dashboardRowContainer}>
            <View style={styles.shadow}>
              <TouchableOpacity style={styles.dashboardButton}>
                <Text style={styles.dashboardButtonText}>Emergency</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.dashboardButton}>
              <Text style={styles.dashboardButtonText}>Blood Locator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dashboardButton}>
              <Text style={styles.dashboardButtonText}>Lab Test</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.footer}>
          <MaterialIcons name="home" color="#000" style={styles.footerIcon} />
          <MaterialIcons name="group" color="#000" style={styles.footerIcon} />
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
        </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
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
    width: 340,
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
  },
  dashboard: {
    height: 'auto',
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
  selectedButton: {
    marginLeft: 5,
    width: '50%',
    paddingVertical: 12,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderBottomColor: '#1e1262',
    borderBottomWidth: 2,
  },
  notSelectedButton: {
    marginRight: 5,
    width: '50%',
    paddingVertical: 12,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  selectedTextColor: {
    color: '#1e1262',
    fontWeight: 'bold',
    fontSize: 16,
  },
  notSelectedTextColor: {
    color: '#b0b0b0',
    fontSize: 16,
  },
  dashboardContainer: {
    width: '100%',
    height: 'auto',
    paddingVertical: 10,
    marginBottom: 30,
  },
  dashboardRowContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 110,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dashboardButton: {
    width: 90,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 20,
    borderWidth: 0.1,
    borderColor: '#D3D3D3',
    elevation: 3,
  },
  dashboardButtonText: {
    color: '#8a8a8a',
    fontWeight: '500',
  },
  //   footer:{
  //     height: 50,
  //     width: '100%',
  //     backgroundColor:'#fff',
  //     display:'flex',
  //     flexDirection:'row',
  //     alignItems:'center',
  //     justifyContent:'center',
  //     borderTopWidth:1.5,
  //     borderTopColor:'#D3D3D3',
  //   },
  //   footerIcon:{
  //     fontSize:30,
  //     marginLeft:25,
  //     marginRight:25,
  //   },
});

export default Dashboard;

// scrolling function
// bottom nav
