import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../constants/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const CustomAddAppointmentHeader = ({navigation}) => (
  <View style={styles.bgWhite}>
    <LinearGradient
      colors={[Colors.darkPurple, Colors.lightPurple]}
      style={styles.gradient}>
      <View style={styles.navBackground}>
        <TouchableOpacity
          style={styles.leftText}
          onPress={() => navigation.navigate('Home')}>
          <MaterialIcons
            name="arrow-back-ios"
            style={styles.backIcon}
            color={Colors.white}
          />
        </TouchableOpacity>
        <Text style={styles.leftText}>Add Appointment</Text>

        <View style={styles.divText}>
          <FontAwesome
            name="video-camera"
            color={Colors.white}
            style={styles.rightText}
          />
          <Text style={styles.rightText}>Video Consult</Text>
          <MaterialIcons
            name="toggle-off"
            color={Colors.white}
            style={styles.toggleIcon}
          />
        </View>
      </View>
    </LinearGradient>
  </View>
);

export const CustomDashBoardHeader = ({navigation}) => (
  <View style={styles.bgWhite}>
    <LinearGradient
      colors={[Colors.darkPurple, Colors.lightPurple]}
      style={styles.gradient}>
      <View style={styles.navBackground}>
        <TouchableOpacity
          style={styles.leftText}
          onPress={() => navigation.navigate('Home')}>
          <MaterialIcons
            name="arrow-back-ios"
            color={Colors.white}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.leftText}>Dashboard</Text>
      </View>
    </LinearGradient>
  </View>
);

export const CustomHealthFeedHeader = ({navigation}) => (
  <View style={styles.bgWhite}>
    <LinearGradient
      colors={[Colors.darkPurple, Colors.lightPurple]}
      style={styles.gradient}>
      <View style={styles.navBackground}>
        <Text style={styles.leftText}>Dr.Prana</Text>
      </View>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: Colors.white,
  },
  gradient: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  navBackground: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '25%',
    marginBottom: '5%',
    width: '90%',
  },
  leftText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '5%',
    fontSize: 16,
    color: Colors.white,
  },
  backIcon: {
    fontSize: 18,
  },
  rightText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '5%',
    fontSize: 16,
    color: Colors.white,
  },
  toggleIcon: {
    alignItems: 'center',
    marginLeft: '2%',
    marginTop: '2%',
    fontSize: 35,
  },
  divText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '6%',
  },
});
