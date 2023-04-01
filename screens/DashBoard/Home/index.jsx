import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {Colors} from '../../../constants/colors';

import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navigation}>
        <Text style={styles.navHeader}>Prana</Text>
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

      <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
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
  navHeader: {
    fontSize: 18,

    color: Colors.white,

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
    borderColor: Colors.white,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 100,
  },
  boxText: {
    color: Colors.white,

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
    color: Colors.white,

    fontSize: 35,
  },
  lineText: {
    textAlign: 'center',
    fontSize: 35,
    marginLeft: 30,
    borderLeftWidth: 2,

    borderLeftColor: Colors.gray_200,
  },
  numbersText: {
    color: Colors.white,

    paddingLeft: 10,
    fontSize: 35,
  },
  consultedText: {
    color: Colors.white,
    fontSize: 10,
  },
  dashboard: {
    height: 'auto',
    width: '100%',
    backgroundColor: Colors.white,

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
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderBottomColor: Colors.darkPurple,
    borderBottomWidth: 2,
  },
  notSelectedButton: {
    marginRight: 5,
    width: '50%',
    paddingVertical: 12,
    backgroundColor: Colors.white,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 4,
  },
  selectedTextColor: {
    color: Colors.darkPurple,
    fontWeight: 'bold',
    fontSize: 16,
  },
  notSelectedTextColor: {
    color: Colors.gray_500,
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
    borderColor: Colors.gray_200,
    elevation: 3,
  },
  dashboardButtonText: {
    color: Colors.gray_800,
    fontWeight: '500',
  },
});

export default Home;

// scrolling function
// bottom nav
