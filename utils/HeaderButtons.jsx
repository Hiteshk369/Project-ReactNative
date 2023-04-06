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

export const CustomRectangleHeader = ({navigation, name, navTo}) => (
  <View style={styles.bgPurple}>
    <View style={styles.rectangleHeader}>
      <TouchableOpacity
        style={styles.leftText}
        onPress={() => navigation.navigate(`${navTo}`)}>
        <MaterialIcons
          name="arrow-back-ios"
          color={Colors.white}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{name}</Text>
    </View>
  </View>
);

export const CustomSellPackageHeader = ({navigation}) => (
  <View style={styles.bgWhite}>
    <LinearGradient
      colors={[Colors.darkPurple, Colors.lightPurple]}
      style={styles.gradient}>
      <View style={styles.spaceBetweenContainer}>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('Profile')}
          style={styles.leftText}>
          <MaterialIcons
            name="arrow-back-ios"
            color={Colors.white}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerLightText}>Sell Package</Text>
        <Text style={styles.leftText}>Send</Text>
      </View>
    </LinearGradient>
  </View>
);

export const CustomCreatePackageHeader = ({navigation}) => (
  <View style={styles.bgWhite}>
    <LinearGradient
      colors={[Colors.darkPurple, Colors.lightPurple]}
      style={styles.gradient}>
      <View style={styles.navBackground}>
        <TouchableOpacity
          onPressIn={() => navigation.navigate('SellPackage')}
          style={styles.leftText}>
          <MaterialIcons
            name="arrow-back-ios"
            color={Colors.white}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create New Package</Text>
      </View>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: Colors.white,
  },
  bgPurple: {
    backgroundColor: Colors.darkPurple,
    borderBottomColor: Colors.gray_700,
    borderBottomWidth: 1,
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
  rectangleHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 0,
    paddingHorizontal: 5,
    paddingVertical: 20,
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
  headerText: {
    color: Colors.white,
    letterSpacing: 0.6,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 0.85,
  },
  spaceBetweenContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '25%',
    marginBottom: '5%',
    paddingHorizontal: '5%',
    width: '95%',
  },
  headerLightText: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.6,
    color: Colors.slate_200,
  },
});
