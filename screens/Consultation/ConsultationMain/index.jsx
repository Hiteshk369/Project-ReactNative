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

const ConsultationMain = () => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.green_100, Colors.green_200]}
        style={styles.gradient}>
        <View style={styles.navBackground}>
          <View style={styles.navText}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.white}
              style={styles.backIcon}
            />
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
        <View style={styles.bottomHeaderText}>
          <View style={styles.bottomHeaderFlex}>
            <MaterialIcons
              name="check-circle"
              color={Colors.green_300}
              style={styles.circleSmallIcon}
            />
            <Text style={styles.Text}>Consultation Complete</Text>
          </View>
          <View style={styles.bottomHeaderFlex}>
            <MaterialIcons
              name="check-circle"
              color={Colors.green_300}
              style={styles.circleSmallIcon}
            />
            <Text style={styles.Text}>Prescription not Shared</Text>
          </View>
        </View>
      </LinearGradient>
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
    height: 550,
    marginBottom: '45%',
  },
  navBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '13%',
    margin: '10%',
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
    justifyContent: 'center',
    marginTop: '15%',
  },
  circleIcon: {
    fontSize: 150,
  },
  bottomHeaderText: {
    marginVertical: '15%',
    marginHorizontal: '8%',
  },
  bottomHeaderFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: '4%',
  },
  circleSmallIcon: {
    fontSize: 35,
  },
  Text: {
    fontSize: 18,
    color: Colors.white,
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

export default ConsultationMain;
