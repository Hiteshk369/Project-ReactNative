import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

const MainProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.darkPurple, Colors.lightPurple]}
        style={styles.gradient}>
        <View style={styles.navBackground}>
          <View style={styles.box}></View>
          <Text style={styles.nameText}>Umar</Text>
          <Text style={styles.numberText}>9866733112</Text>
        </View>
        <TouchableOpacity style={styles.buttonBackground}>
          <MaterialIcons name="mode-edit" color={Colors.styles} />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Activate Profile</Text>
      </View>
      <TouchableOpacity
        onPressIn={() => navigation.navigate('AddClinic')}
        style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Add Clinic</Text>
      </TouchableOpacity>
      <View style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Dashboard</Text>
      </View>
      <View style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Campaign</Text>
      </View>
      <TouchableOpacity
        onPressIn={() => navigation.navigate('SellPackage')}
        style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Sell Package/Create Package</Text>
      </TouchableOpacity>
      <View style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Ask us a Question</Text>
      </View>
      <View style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Share Patient App</Text>
      </View>
      <View style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Change Password</Text>
      </View>
      <View style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Sync Patient Data</Text>
      </View>
      <View style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>About</Text>
      </View>
      <View style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Privacy Policy</Text>
      </View>
      <View style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Terms of Service</Text>
      </View>
      <View style={styles.optionsTextContainer}>
        <FontAwesome
          name="circle-thin"
          color={Colors.black}
          style={styles.circleIcon}
        />
        <Text style={styles.optionsText}>Logout</Text>
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
    marginBottom: '22%',
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
    borderColor: Colors.darkPurple,
    backgroundColor: Colors.white,
    borderWidth: 2,
    marginTop: '30%',
    // marginBottom: 15,
    borderRadius: 100,
  },
  nameText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: '0%',
  },
  numberText: {
    marginBottom: '0%',
    color: Colors.black,
    fontSize: 14,
    fontWeight: '600',
  },
  buttonBackground: {
    marginLeft: '70%',
    marginTop: '0%',
    width: '24%',
    paddingVertical: 5,
    backgroundColor: Colors.darkPurple,
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
    color: Colors.white,
  },
  optionsTextContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_200,
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
    color: Colors.black,
  },
});

export default MainProfileScreen;
