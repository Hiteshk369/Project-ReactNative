import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {E_PrescriptionOptions, HandwrittenOptions} from '../../../components';
// import {Prescription} from '../../../components';

const Selectpatient = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState('prescription');
  const [dropdown, setdropdown] = useState('withOutDropDown');

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.purple_200, Colors.purple_100]}
        style={styles.gradient}>
        <View style={styles.navBackground}>
          <View style={styles.leftText}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.black}
              style={styles.backIcon}
            />
            <FontAwesome
              name="circle-thin"
              color={Colors.lightGrayBg}
              style={styles.circleIcon}
            />
            <Text style={styles.leftText}>Select Patient</Text>
          </View>
          <View style={styles.rightText}>
            <MaterialIcons
              name="more-vert"
              color={Colors.black}
              style={styles.moreIcon}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => setToggleCheckBox('prescription')}>
          <Text
            style={
              toggleCheckBox === 'prescription'
                ? styles.selectedButton
                : styles.notselectedButton
            }>
            E-prescription
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setToggleCheckBox('handwritten')}>
          <Text
            style={
              toggleCheckBox === 'handwritten'
                ? styles.selectedButton
                : styles.notselectedButton
            }>
            Handwritten
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={
          toggleCheckBox === 'prescription'
            ? styles.activeButton
            : styles.headerButton
        }>
        {toggleCheckBox === 'prescription' ? (
          <E_PrescriptionOptions />
        ) : (
          <HandwrittenOptions />
        )}
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
    height: 150,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray_100,
  },
  navBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20%',
    margin: '5%',
    justifyContent: 'space-between',
  },
  leftText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    gap: 10,
    color: Colors.black,
  },
  rightText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginLeft: '5%',
    fontSize: 16,
    gap: 20,
    color: Colors.white,
  },
  backIcon: {
    fontSize: 25,
  },
  circleIcon: {
    fontSize: 45,
  },
  navText: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
  },
  rightText: {
    marginLeft: '26%',
  },
  moreIcon: {
    fontSize: 35,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    width: '90%',
    borderBottomColor: Colors.gray_100,
    borderBottomWidth: 2,
  },
  selectedButton: {
    width: '77%',
    fontSize: 18,
    marginLeft: '10%',
    paddingVertical: 12,
    color: Colors.darkPurple,
    borderBottomColor: Colors.darkPurple,
    borderBottomWidth: 2,
  },
  notselectedButton: {
    marginLeft: '10%',
    fontSize: 18,
    paddingVertical: 12,
    color: Colors.gray_700,
    width: '77%',
  },
});

export default Selectpatient;
