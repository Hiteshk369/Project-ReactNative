import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {E_PrescriptionOptions, HandwrittenOptions} from '../../../components';

const Prescribe = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState('prescription');
  const [menu, setMenu] = useState(false);

  return (
    <ScrollView
      style={
        menu === true
          ? [styles.container, styles.notActiveBg]
          : [styles.container, styles.activeBg]
      }>
      <LinearGradient
        colors={[Colors.purple_200, Colors.purple_100]}
        style={styles.gradient}>
        <View style={styles.navBackground}>
          <View style={styles.leftText}>
            <Pressable
              onPressIn={() => navigation.navigate('Home')}
              style={styles.leftText}>
              <MaterialIcons
                name="arrow-back-ios"
                color={Colors.black}
                style={styles.backIcon}
              />
            </Pressable>
            <View style={styles.circleNav} />
            <Pressable onPressIn={() => navigation.navigate('PatientsList')}>
              <Text style={styles.leftText}>Select Patient</Text>
            </Pressable>
          </View>
          <Pressable onPressIn={() => setMenu(!menu)}>
            <MaterialIcons
              name="more-vert"
              color={Colors.black}
              style={styles.moreIcon}
            />
          </Pressable>
          <Modal
            animationType="fade"
            transparent={true}
            visible={menu}
            onRequestClose={() => {
              setMenu(!menu);
            }}>
            <TouchableOpacity onPressIn={() => setMenu(!menu)}>
              <View style={styles.menuContainer}>
                <Text style={styles.menuText}>Help</Text>
                <Text style={styles.menuText}>Customize EMR</Text>
                <Text style={styles.menuText}>Edit Layout</Text>
                <Text style={styles.menuText}>End Consultation</Text>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </LinearGradient>
      <View style={styles.buttons}>
        <TouchableOpacity onPressIn={() => setToggleCheckBox('prescription')}>
          <Text
            style={
              toggleCheckBox === 'prescription'
                ? styles.selectedButton
                : styles.notselectedButton
            }>
            E-prescription
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPressIn={() => setToggleCheckBox('handwritten')}>
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
          <E_PrescriptionOptions navigation={navigation} />
        ) : (
          <HandwrittenOptions navigation={navigation} />
        )}
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
  activeBg: {
    backgroundColor: Colors.white,
  },
  notActiveBg: {
    backgroundColor: Colors.gray_800,
  },
  gradient: {
    height: 150,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray_100,
    elevation: 3,
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
  backIcon: {
    fontSize: 25,
  },
  circleNav: {
    height: 45,
    width: 45,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Colors.black,
  },
  navText: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
  },
  moreIcon: {
    fontSize: 35,
  },
  menuContainer: {
    height: '41%',
    width: '45%',
    marginTop: '30%',
    marginRight: '10%',
    alignSelf: 'flex-end',
    padding: '5%',
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
  menuText: {
    fontSize: 17,
    fontWeight: '400',
    color: Colors.black,
    marginVertical: '5%',
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
    paddingTop: 12,
    paddingBottom: 8,
    color: Colors.darkPurple,
    borderBottomColor: Colors.darkPurple,
    borderBottomWidth: 3,
    fontWeight: '600',
  },
  notselectedButton: {
    marginLeft: '10%',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 8,
    color: Colors.gray_700,
    width: '77%',
    fontWeight: '600',
  },
});

export default Prescribe;
