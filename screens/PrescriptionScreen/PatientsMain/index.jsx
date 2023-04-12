import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {E_PrescriptionOptions, HandwrittenOptions} from '../../../components';
import {useSelector} from 'react-redux';
import {Pressable} from 'react-native';

const PatientsMain = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState('prescription');
  const [viewMore, setViewMore] = useState(false);

  const patientName = useSelector(state => state.patientReducer.user);
  const [menu, setMenu] = useState(false);

  return (
    <ScrollView
      style={
        viewMore === true
          ? [styles.container, styles.notActiveBg]
          : [styles.container, styles.activeBg]
      }>
      <LinearGradient
        colors={[Colors.purple_200, Colors.purple_100]}
        style={styles.gradient}>
        <View style={styles.navHeader}>
          <View style={styles.leftText}>
            <Pressable onPressIn={() => navigation.navigate('PatientsList')}>
              <MaterialIcons
                name="arrow-back-ios"
                color={Colors.black}
                style={styles.backIcon}
              />
            </Pressable>
            <View style={styles.circleNav} />
            <View>
              <Text style={styles.navText}>{patientName}</Text>
              <Text style={{color: Colors.gray_600}}>28 Yrs Male</Text>
            </View>
          </View>
          <View style={styles.rightText}>
            <MaterialIcons
              name="call"
              color={Colors.black}
              style={styles.moreIcon}
            />
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
        </View>
        {viewMore && (
          <View style={styles.profileDownCard}>
            <View style={styles.circleTop} />
            <View style={styles.flexText}>
              <View style={styles.smallCircleTop} />
              <Pressable
                onPressIn={() => navigation.navigate('MedicalHistory')}>
                <Text style={styles.cardText}>Medical Background</Text>
              </Pressable>
              <View style={styles.rightContainer}>
                <MaterialIcons
                  name="add"
                  color={Colors.lightGrayBg}
                  style={styles.addIcon}
                />
                <Text style={styles.rightCardText}>Add</Text>
              </View>
            </View>
            <View style={styles.flexText}>
              <View style={styles.smallCircleTop} />
              <Text style={styles.cardText}>Past Prescriptions</Text>
              <View style={styles.rightNumberContainer}>
                <Text style={styles.rightNumberText}>(0)</Text>
              </View>
            </View>
          </View>
        )}
        <TouchableOpacity onPressIn={() => setViewMore(!viewMore)}>
          {viewMore ? (
            <FontAwesome
              name="angle-up"
              color={Colors.black}
              style={styles.arrowDown}
            />
          ) : (
            <FontAwesome
              name="angle-down"
              color={Colors.black}
              style={styles.arrowDown}
            />
          )}
        </TouchableOpacity>
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
          <E_PrescriptionOptions screen="preview" />
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
    backgroundColor: Colors.white,
  },
  activeBg: {
    backgroundColor: Colors.white,
  },
  notActiveBg: {
    backgroundColor: Colors.gray_800,
  },
  gradient: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    zIndex: 1,
  },
  navHeader: {
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 100,
  },
  leftText: {
    flexDirection: 'row',
    marginHorizontal: '3%',
    marginTop: '15%',
    marginVertical: '10%',
    alignItems: 'center',
    gap: 10,
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
  rightText: {
    // marginLeft: '18%',
    flexDirection: 'row',
    marginTop: '15%',
    marginVertical: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // gap: 20,
  },
  moreIcon: {
    fontSize: 35,
  },
  menuContainer: {
    height: '41%',
    width: '45%',
    marginTop: '25%',
    marginRight: '8%',
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
  arrowDown: {
    justifyContent: 'center',
    fontSize: 35,
  },
  profileDownCard: {
    height: 160,
    width: '90%',
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  circleTop: {
    height: 50,
    width: 50,
    marginLeft: '42%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Colors.black,
    marginBottom: '2%',
  },
  flexText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
  },
  smallCircleTop: {
    height: 30,
    width: 30,
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Colors.darkPurple,
    marginHorizontal: '3%',
  },
  cardText: {
    // marginHorizontal: '5%',
    fontSize: 18,
    color: Colors.darkPurple,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15%',
    paddingHorizontal: '2%',
    backgroundColor: Colors.purple_100,
    borderRadius: 10,
  },
  addIcon: {
    fontSize: 18,
    color: Colors.darkPurple,
  },
  rightCardText: {
    fontSize: 16,
    color: Colors.darkPurple,
  },
  rightNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '24%',
    paddingHorizontal: '2%',
    backgroundColor: Colors.purple_100,
    borderRadius: 10,
  },
  rightNumberText: {
    fontSize: 16,
    color: Colors.darkPurple,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '46%',
    width: '90%',
    borderBottomColor: Colors.gray_100,
    borderBottomWidth: 2,
  },
  selectedButton: {
    width: '77%',
    fontSize: 18,
    marginLeft: '15%',
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

export default PatientsMain;
