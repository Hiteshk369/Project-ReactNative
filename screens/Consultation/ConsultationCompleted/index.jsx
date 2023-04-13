import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../constants/colors';

const ConsultationCompleted = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.green_100, Colors.green_200]}
        style={styles.gradient}>
        <View style={styles.navBackground}>
          <View style={styles.navText}>
            <TouchableOpacity
              onPressIn={() => navigation.navigate('ConsultationMain')}>
              <MaterialIcons
                name="arrow-back-ios"
                color={Colors.white}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.navText}>
            <MaterialIcons
              name="print"
              color={Colors.white}
              style={styles.printIcon}
            />
          </View>
        </View>
        <View style={styles.iconText}>
          <MaterialIcons
            name="check-circle"
            color={Colors.green_300}
            style={styles.circleIcon}
          />
        </View>
      </LinearGradient>
      <View style={styles.headerContainer}>
        <Text style={styles.Text}>Consultation Completed!</Text>
        <Text style={styles.smallText}>
          You've successfully completed your{'\n'}appointment with{' '}
          <Text style={styles.smallBoldText}>Sandeep R Reddy</Text>
        </Text>
        <View style={styles.profileFlex}>
          <Text style={styles.profileText}>Patient profile</Text>
          <View style={styles.circle} />
          <Text style={styles.profileText}>View prescription</Text>
        </View>
      </View>
      <View style={styles.mainCointainer}>
        <View style={styles.rowText}>
          <View style={styles.smallCircle} />
          <View style={styles.columnTextContainer}>
            <Text style={styles.columnText}>Share Rx on Patient's number</Text>
            <Text style={styles.columnLightText}>
              Prescription will be shared to {'\n'}8919797512
            </Text>
          </View>
          <View style={styles.miniCircle} />
        </View>
        <View style={styles.shareMidContainer}>
          <Text style={styles.midText}>or share via</Text>
        </View>
      </View>
      <View style={styles.smallBoxCointainer}>
        <View style={styles.rowText}>
          <View style={styles.smallCircle} />
          <View style={styles.columnTextContainer}>
            <Text style={styles.columnText}>Follow up Scheduled</Text>
            <Text style={styles.columnLightText}>
              Scheduled for 15/03/2023 {'\n'}02:06 AM
            </Text>
          </View>
          <MaterialIcons
            name="check-circle"
            color={Colors.darkPurple}
            style={styles.checkCircleIcon}
          />
        </View>
      </View>
      <View style={styles.smallBoxCointainer}>
        <View style={styles.rowText}>
          <View style={styles.smallCircle} />
          <View style={styles.columnTextContainer}>
            <Text style={styles.columnText}>Generate Invoice</Text>
            <Text style={styles.columnLightText}>
              Generate invoice for {'\n'}Sandeep R Reddy
            </Text>
          </View>
          <TouchableOpacity
            onPressIn={() => navigation.navigate('AddInVoice')}
            style={styles.addButton}>
            <MaterialIcons
              name="add-circle"
              color={Colors.darkPurple}
              style={styles.addCircleIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsFlex}>
        <TouchableOpacity style={styles.bottomButtonsBackground}>
          <Text style={styles.buttonText}>Go to homepage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeBottomButtonsBackground}>
          <Text style={styles.activeButtonText}>My Appointment</Text>
        </TouchableOpacity>
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
    height: 260,
    borderBottomLeftRadius: 190,
    borderBottomRightRadius: 190,
  },
  navBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '13%',
    margin: '10%',
    marginBottom: '5%',
    justifyContent: 'space-between',
  },
  navText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  backIcon: {
    fontSize: 23,
  },
  printIcon: {
    alignItems: 'center',
    fontSize: 28,
  },
  iconText: {
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: '15%',
  },
  circleIcon: {
    fontSize: 80,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%',
  },
  Text: {
    fontSize: 27,
    color: Colors.green_300,
  },
  smallText: {
    marginVertical: '5%',
    color: Colors.black,
    fontSize: 15,
  },
  smallBoldText: {
    marginVertical: '5%',
    color: Colors.black,
    fontSize: 15,
    fontWeight: 'bold',
  },
  profileFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 15,
    // backgroundColor: Colors.purple_100,
    // borderRadius: 10,
    // paddingHorizontal: '5%',
  },
  circle: {
    height: 60,
    width: 60,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
  profileText: {
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    backgroundColor: Colors.purple_100,
    color: Colors.black,
    fontWeight: '500',
  },
  mainCointainer: {
    marginVertical: '3%',
    marginHorizontal: '8%',
    width: '83%',
    height: 180,
    borderWidth: 3,
    borderColor: Colors.gray_300,
    borderRadius: 15,
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray_200,
  },
  smallCircle: {
    height: 40,
    width: 40,
    marginVertical: '5%',
    marginHorizontal: '3%',
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
  columnTextContainer: {},
  columnText: {
    fontSize: 15,
    color: Colors.black,
    marginTop: '5%',
  },
  columnLightText: {
    fontSize: 15,
    color: Colors.gray_100,
    marginBottom: '5%',
  },
  miniCircle: {
    height: 30,
    width: 30,
    marginVertical: '5%',
    marginHorizontal: '2%',
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
  shareMidContainer: {
    alignItems: 'center',
  },
  midText: {
    paddingHorizontal: '5%',
    paddingVertical: '1%',
    borderRadius: 10,
    backgroundColor: Colors.purple_100,
  },
  smallBoxCointainer: {
    marginHorizontal: '8%',
    marginVertical: '3%',
    width: '83%',
    borderWidth: 3,
    borderColor: Colors.gray_300,
    borderRadius: 15,
  },
  checkCircleIcon: {
    fontSize: 40,
    marginLeft: '5%',
  },
  addCircleIcon: {
    fontSize: 40,
  },
  addButton: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginLeft: '18%',
  },
  buttonsFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '4%',
    borderTopWidth: 4,
    borderTopColor: Colors.gray_300,
  },
  bottomButtonsBackground: {
    width: '40%',
    marginBottom: '5%',
    marginHorizontal: '5%',
    paddingVertical: '4%',
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.darkPurple,
    alignItems: 'center',
  },
  activeBottomButtonsBackground: {
    width: '40%',
    marginBottom: '5%',
    marginHorizontal: '5%',
    paddingVertical: '4%',
    backgroundColor: Colors.darkPurple,
    borderWidth: 1,
    borderColor: Colors.darkPurple,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButtonText: {
    fontSize: 15,
    color: Colors.white,
    alignItems: 'center',
  },
});

export default ConsultationCompleted;
